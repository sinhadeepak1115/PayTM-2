import express from "express";
import db from "@repo/db/client";

const app = express();

app.post("/hdfcwebhook", async (req, res) => {
  //TODO: Add zod validation here
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
  };
  await db.balance.update({
    where: {
      userId: paymentInformation.userId,
    },
    data: {
      amount: {
        increment: paymentInformation.amount,
      },
    },
  });
  //Update the user's balance
  await db.onRampTransaction.update({
    where: {
      token: paymentInformation.token,
    },
    data: {
      status: "Success",
    },
  });
  res.json({ message: "Success" });
});
