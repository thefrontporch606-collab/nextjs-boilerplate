import { NextResponse } from "next/server";
import { PRIZES, TOTAL_TICKETS } from "@/lib/prizes";

export const runtime = "edge";

export async function GET() {
  try {
    const soldCount = 0;

    const remainingTickets = TOTAL_TICKETS - soldCount;

    const prizeBoard = PRIZES.map((prize) => ({
      code: prize.code,
      label: prize.label,
      quantity: prize.quantity,
      found: 0,
      symbol: prize.symbol,
    }));

    const topPrizeStillAvailable = true;

    return NextResponse.json({
      soldCount,
      remainingTickets,
      totalTickets: TOTAL_TICKETS,
      topPrizeStillAvailable,
      prizeBoard,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch scratch game status." },
      { status: 500 }
    );
  }
}
