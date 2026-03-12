import { NextRequest, NextResponse } from "next/server";
import { ALL_SYMBOLS, prizeByCode, PrizeCode } from "@/lib/prizes";

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function buildSymbols(prizeCode: PrizeCode) {
  const prize = prizeByCode(prizeCode);

  if (prize && prizeCode !== "LOSE") {
    return [prize.symbol, prize.symbol, prize.symbol];
  }

  let a = randomItem(ALL_SYMBOLS);
  let b = randomItem(ALL_SYMBOLS);
  let c = randomItem(ALL_SYMBOLS);

  while (a === b) {
    b = randomItem(ALL_SYMBOLS);
  }

  while (c === a || c === b) {
    c = randomItem(ALL_SYMBOLS);
  }

  return [a, b, c];
}

const demoPrizePool: PrizeCode[] = [
  "LOSE",
  "LOSE",
  "LOSE",
  "LOSE",
  "LOSE",
  "P10",
  "P25",
  "FREE",
  "P50",
  "P100",
  "LOSE",
  "LOSE",
  "P10",
  "LOSE",
  "P25",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const buyerName = body?.buyerName || "";
    const buyerEmail = body?.buyerEmail || "";

    const selectedPrize =
      demoPrizePool[Math.floor(Math.random() * demoPrizePool.length)] || "LOSE";

    const prize = prizeByCode(selectedPrize);
    const symbols = buildSymbols(selectedPrize);

    return NextResponse.json({
      success: true,
      buyerName,
      buyerEmail,
      ticketNumber: Math.floor(Math.random() * 1000) + 1,
      prizeCode: selectedPrize,
      prizeLabel: prize ? prize.label : "No Prize",
      winAmount: prize ? prize.amount : 0,
      isWinner: selectedPrize !== "LOSE",
      symbols,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to reveal scratch-off ticket." },
      { status: 500 }
    );
  }
}
