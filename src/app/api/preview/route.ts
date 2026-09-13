import { NextRequest } from "next/server";
import { redirectToPreviewURL } from "@prismicio/next";
import { createClient } from "@/lib/prismic";

export async function GET(request: NextRequest) {
  const client = createClient();
  return await redirectToPreviewURL({ client, request });
}
