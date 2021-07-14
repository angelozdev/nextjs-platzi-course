import { NextApiRequest, NextApiResponse } from "next/";
import Database from "database";

const db = new Database();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  if (method?.match(/get/i)) {
    const id = query.id;

    if (typeof id !== "string") return;

    db.getById(id)
      .then((product) => {
        res.status(200).json({
          data: product,
          status: 200,
          error: null,
        });
      })
      .catch((error) => {
        res.status(404).json({
          error: error || error.message,
          data: null,
          status: 404,
        });
      });
  }
}

export default handler;
