import { NextApiRequest, NextApiResponse } from "next/";
import Database from "database";

const db = new Database();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method?.match(/get/i)) {
    await db.getAll().then((products) => {
      res.status(200).json({
        data: products,
        status: 200,
        error: null,
      });
    });
  }
}

export default handler;
