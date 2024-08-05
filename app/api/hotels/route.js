import pool from "@/lib/db";

export async function GET(request) {
  try {
    const hotels = await pool.query("SELECT * FROM hotels");
    return Response.json({ hotels: hotels.rows }, { status: 200 });
  } catch (error) {
    console.error("Error fetching hotels: ", error);
    return Response.json("Internal Server Error", { status: 500 });
  }
}
