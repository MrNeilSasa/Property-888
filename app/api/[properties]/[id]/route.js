import pool from "@/lib/db";

export async function GET(request, { params }) {
  try {
    const id = params.id;
    const client = await pool.connect();

    const result = await client.query(
      "SELECT * FROM properties WHERE id = $1",
      [id]
    );

    const property = result.rows[0];
    if (!property) {
      return new Response("Property not found", { status: 404 });
    }
    return Response.json({ property });
  } catch (error) {
    console.error("Error fetching property details:", error);
    return Response("Internal server error", { status: 500 });
  }
}
