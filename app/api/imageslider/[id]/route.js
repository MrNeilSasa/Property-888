import pool from "@/lib/db";

export async function GET(request, { params }) {
  try {
    const id = params.id;
    const client = await pool.connect();

    const result = await client.query(
      "SELECT * FROM imageslider WHERE property_id = $1",
      [id]
    );

    const slideshow = result.rows[0];

    return Response.json({ slideshow });
  } catch (error) {
    console.error("Error fetching property images:", error);
    return Response("Internal server error", { status: 500 });
  }
}
