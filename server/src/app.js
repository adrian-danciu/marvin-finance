import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import transactionsRouter from "./routes/transactionRouter.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

export const app = express();
const PORT = 5001;

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DBNAME = process.env.MONGO_DBNAME;

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_DBNAME}.lewc60l.mongodb.net/?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json());

app.use("/transactions", transactionsRouter);
app.use("/api/auth", userRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
