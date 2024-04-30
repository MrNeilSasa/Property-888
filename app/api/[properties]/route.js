import pool from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const section = searchParams.get("section");

    const properties = await pool.query(
      "SELECT * FROM properties WHERE section = $1",
      [section]
    );

    const soldproperties = await pool.query(
      "SELECT * FROM sold_properties WHERE section = $1",
      [section]
    );

    return Response.json({
      availableProperties: properties.rows,
      soldProperties: soldproperties.rows,
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return Response("Internal server error", { status: 500 });
  }
}
