// api/predict.js
export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

    const FASTAPI_URL = process.env.FASTAPI_URL;
    if (!FASTAPI_URL) return res.status(500).json({ error: "Missing FASTAPI_URL env" });

    const chunks = [];
    for await (const c of req) chunks.push(c);
    const buffer = Buffer.concat(chunks);

    const upstream = await fetch(`${FASTAPI_URL.replace(/\/+$/,"")}/predict`, {
      method: "POST",
      headers: { "Content-Type": req.headers["content-type"] || "application/octet-stream" },
      body: buffer
    });

    const text = await upstream.text();
    try { return res.status(upstream.status).json(JSON.parse(text)); }
    catch { return res.status(upstream.status).send(text); }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: String(e) });
  }
}
