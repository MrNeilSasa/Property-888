"use client";

import { createThirdwebClient, defineChain } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const SECRET_KEY = process.env.THRIDWEB_SECRET_KEY;

export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

/*
export const client_ssr = createThirdwebClient({
  secretKey: SECRET_KEY as string,
}); */

export const chain = sepolia;
