import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const now = new Date();

  const rows = await prisma.$transaction([
    prisma.signalObservation.create({
      data: {
        signalKey: "hyperscaler_capex",
        entity: "MSFT",
        value: 22000000000,
        unit: "USD",
        yoy: 28.4,
        qoq: 6.2,
        sourceUrl: "https://example.com/msft",
        sourceNote: "Sample seed data for Microsoft capex",
        observedAt: now,
      },
    }),
    prisma.signalObservation.create({
      data: {
        signalKey: "hyperscaler_capex",
        entity: "AMZN",
        value: 24000000000,
        unit: "USD",
        yoy: 31.1,
        qoq: 7.4,
        sourceUrl: "https://example.com/amzn",
        sourceNote: "Sample seed data for Amazon capex",
        observedAt: now,
      },
    }),
    prisma.signalObservation.create({
      data: {
        signalKey: "hyperscaler_capex",
        entity: "GOOGL",
        value: 13000000000,
        unit: "USD",
        yoy: 19.8,
        qoq: 4.3,
        sourceUrl: "https://example.com/googl",
        sourceNote: "Sample seed data for Alphabet capex",
        observedAt: now,
      },
    }),
    prisma.signalObservation.create({
      data: {
        signalKey: "hyperscaler_capex",
        entity: "META",
        value: 14500000000,
        unit: "USD",
        yoy: 42.6,
        qoq: 9.1,
        sourceUrl: "https://example.com/meta",
        sourceNote: "Sample seed data for Meta capex",
        observedAt: now,
      },
    }),
  ]);

  return NextResponse.json({
    ok: true,
    inserted: rows.length,
    rows,
  });
}
