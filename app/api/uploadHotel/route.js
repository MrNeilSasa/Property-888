import { NextResponse } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import path from "path";
import pool from "@/lib/db";
const pump = promisify(pipeline);

export async function POST(req) {
  try {
    // Extract form data from the request
    const formData = await req.formData();

    const title = formData.get("title");
    const price = formData.get("price");
    const url = formData.get("url");
    const file = formData.get("images");
    console.log(title, price, url, formData);

    // Generate a unique filename using timestamp and random number
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.name);
    const newFileName = `${uniqueSuffix}${fileExtension}`;
    const filePath = `./public/uploads/${newFileName}`;

    await pump(file.stream(), fs.createWriteStream(filePath));

    // Insert data into the database
    const insertQuery =
      "INSERT INTO hotels (title, price, url, filename) VALUES ($1, $2, $3, $4) RETURNING hotelid";
    const insertValues = [title, price, url, newFileName];

    const result = await pool.query(insertQuery, insertValues);

    // Create a successful response
    return new Response(
      JSON.stringify({
        message: "File uploaded successfully",
        path: filePath,
        hotelId: result.rows[0].id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error Uploading Hotel: ", error);
    // Create an error response
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
