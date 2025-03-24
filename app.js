import express from "express";
import { PORT } from "./config/env.js";

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to Envoy Subscription Tracker API!");
});

app.listen(PORT, () => {
  console.log(
    `Envoy Subscription Tracker API is running on http://localhost:${PORT} `
  );
});

export default app;
