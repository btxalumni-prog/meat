export default async function handler(req, res) {
  res.status(200).json({ ok: true, FASTAPI_URL: process.env.FASTAPI_URL || null });
}
