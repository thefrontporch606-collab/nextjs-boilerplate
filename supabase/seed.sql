update scratch_games
set is_active = false
where is_active = true;

with new_game as (
  insert into scratch_games (name, ticket_price, is_active)
  values ('The Front Porch Charity Scratch-Off - Game 1', 10, true)
  returning id
),
winning_rows as (
  select * from (
    values
      ('P2000', 1, 900),
      ('P750', 1, 800),
      ('P400', 1, 600),
      ('P100', 5, 400),
      ('P50', 10, 200),
      ('P25', 24, 0),
      ('P10', 35, 0),
      ('FREE', 40, 0)
  ) as t(prize_code, qty, min_sold_before_reveal)
),
expanded_winners as (
  select
    row_number() over () as rn,
    prize_code,
    min_sold_before_reveal
  from winning_rows wr,
       generate_series(1, wr.qty)
),
losers as (
  select row_number() over ()
  from generate_series(1, 883)
),
all_rows as (
  select prize_code, min_sold_before_reveal from expanded_winners
  union all
  select 'LOSE'::text as prize_code, 0 as min_sold_before_reveal from losers
),
shuffled as (
  select
    row_number() over (order by random()) as ticket_number,
    prize_code,
    min_sold_before_reveal
  from all_rows
)
insert into scratch_tickets (game_id, ticket_number, prize_code, min_sold_before_reveal)
select
  ng.id,
  s.ticket_number,
  s.prize_code,
  s.min_sold_before_reveal
from shuffled s
cross join new_game ng;
