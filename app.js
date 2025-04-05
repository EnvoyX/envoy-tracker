import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

// Handle json data sent in request or API calls
app.use(express.json());

// helps to process form data that sent by HTML forms in a simple format
app.use(express.urlencoded({ extended: false }));

// Reads cookies from incoming request to store user data
app.use(cookieParser());

// Middlewares
app.use(errorMiddleware);
app.use(arcjetMiddleware);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Envoy Subscription Tracker API!");
});

app.listen(PORT, async () => {
  console.log(
    `Envoy Subscription Tracker API is running on http://localhost:${PORT}`
  );
  await connectToDatabase();
});

export default app;
