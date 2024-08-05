import fs from "fs";
import FormData from "form-data";
const pinataSDK = require("@pinata/sdk");
const { Readable } = require("stream");
const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

const bufferToStream = (buffer) => {
  return new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const saveFile = async (file) => {
  console.log("File: ", file);
  try {
    // Get the buffer from the file
    const buffer = await file.arrayBuffer();
    const stream = bufferToStream(Buffer.from(buffer));

    const options = {
      pinataMetadata: {
        name: file.name,
      },
    };
    const response = await pinata.pinFileToIPFS(stream, options);

    return response;
  } catch (error) {
    console.error("Error saving file to IPFS:", error);
    throw error;
  }
};

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.getAll("file")[0];

    if (!file) {
      return new Response("File not found", { status: 404 });
    }

    const response = await saveFile(file);
    const { IpfsHash } = response;

    return new Response(JSON.stringify({ ipfsHash: IpfsHash }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error Uploading to IPFS: ", error);
    return Response("Internal server error", { status: 500 });
  }
}
