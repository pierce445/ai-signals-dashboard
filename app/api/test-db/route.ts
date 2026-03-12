import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const row = await prisma.signalObservation.create({
    data: {
      signalKey: "test_signal",
      entity: "TEST",
      value: 123.45,
      unit: "USD",
      yoy: 10.5,
      qoq: 2.1,
      score: 80,
      sourceUrl: "https://example.com",
      sourceNote: "Initial database connectivity test",
    },
  });

  return NextResponse.json({
    ok: true,
    row,
  });
}

