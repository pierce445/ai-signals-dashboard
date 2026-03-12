import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const rows = await prisma.signalObservation.findMany({
    where: {
      signalKey: "hyperscaler_capex",
    },
    orderBy: {
      observedAt: "desc",
    },
    take: 20,
  });

  return NextResponse.json({
    ok: true,
    count: rows.length,
    rows,
  });
}
