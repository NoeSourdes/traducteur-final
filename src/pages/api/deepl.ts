import fetch from "node-fetch";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { text, target_lang, source_lang } = req.body;

    const authKey = "91b8394f-2914-48ea-3bbc-165faf2dd648:fx"; // Replace with your DeepL API key

    try {
      const deepLResponse = await fetch(
        "https://api-free.deepl.com/v2/translate",
        {
          method: "POST",
          headers: {
            Authorization: `DeepL-Auth-Key ${authKey}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            text,
            target_lang,
            source_lang,
          }).toString(),
        },
      );

      if (deepLResponse.status === 200) {
        const data = await deepLResponse.json();
        res.status(200).json(data);
      } else {
        res.status(deepLResponse.status).json({ error: "Translation failed" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
