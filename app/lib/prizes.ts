export type PrizeCode =
  | "P2000"
  | "P750"
  | "P400"
  | "P100"
  | "P50"
  | "P25"
  | "P10"
  | "FREE"
  | "LOSE";

export type PrizeConfig = {
  code: PrizeCode;
  label: string;
  amount: number;
  quantity: number;
  symbol: string;
  minSoldBeforeReveal: number;
};

export const PRIZES: PrizeConfig[] = [
  {
    code: "P2000",
    label: "$2,000",
    amount: 2000,
    quantity: 1,
    symbol: "Front Porch Logo",
    minSoldBeforeReveal: 900,
  },
  {
    code: "P750",
    label: "$750",
    amount: 750,
    quantity: 1,
    symbol: "Gold Star",
    minSoldBeforeReveal: 800,
  },
  {
    code: "P400",
    label: "$400",
    amount: 400,
    quantity: 1,
    symbol: "Eagle",
    minSoldBeforeReveal: 600,
  },
  {
    code: "P100",
    label: "$100",
    amount: 100,
    quantity: 5,
    symbol: "American Flag",
    minSoldBeforeReveal: 400,
  },
  {
    code: "P50",
    label: "$50",
    amount: 50,
    quantity: 10,
    symbol: "Combat Boot",
    minSoldBeforeReveal: 200,
  },
  {
    code: "P25",
    label: "$25",
    amount: 25,
    quantity: 24,
    symbol: "Dog Tag",
    minSoldBeforeReveal: 0,
  },
  {
    code: "P10",
    label: "$10",
    amount: 10,
    quantity: 35,
    symbol: "Helmet",
    minSoldBeforeReveal: 0,
  },
  {
    code: "FREE",
    label: "Free Ticket",
    amount: 10,
    quantity: 40,
    symbol: "Medal Ribbon",
    minSoldBeforeReveal: 0,
  },
];

export const TOTAL_TICKETS = 1000;
export const TICKET_PRICE = 10;
export const TOTAL_WINNING_TICKETS = PRIZES.reduce(
  (sum, prize) => sum + prize.quantity,
  0
);

export const OVERALL_ODDS_TEXT = `1 in ${(
  TOTAL_TICKETS / TOTAL_WINNING_TICKETS
).toFixed(2)}`;

export function prizeByCode(code: PrizeCode) {
  return PRIZES.find((prize) => prize.code === code) ?? null;
}

export const ALL_SYMBOLS = [
  "Front Porch Logo",
  "Gold Star",
  "Eagle",
  "American Flag",
  "Combat Boot",
  "Dog Tag",
  "Helmet",
  "Medal Ribbon",
];
