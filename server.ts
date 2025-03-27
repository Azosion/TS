import { serve } from "https://deno.land/std@0.203.0/http/server.ts";
import { extname, join } from "https://deno.land/std@0.203.0/path/mod.ts";

const PORT = 8000;
const BASE_DIR = "./";

const mimeTypes: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".ts": "application/javascript", // Correct MIME type for TypeScript modules
  ".js": "application/javascript",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
};

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  let filePath = join(BASE_DIR, url.pathname);

  if (url.pathname === "/") {
    filePath = join(BASE_DIR, "Home.html");
  }

  try {
    const fileExt = extname(filePath);
    const contentType = mimeTypes[fileExt] || "application/octet-stream";
    const fileContent = await Deno.readFile(filePath);
    return new Response(fileContent, {
      headers: { "Content-Type": contentType },
    });
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
}

console.log(`Server running on http://localhost:${PORT}`);
serve(handler, { port: PORT });
