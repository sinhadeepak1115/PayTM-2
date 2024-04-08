import express from "express";

const app = express();

app.post("/webhook", (req, res) => {
  //TODO: Add zod validation here
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
  };
  //Update the user's balance
});
