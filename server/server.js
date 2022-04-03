import dotenv from "dotenv";
import app from "./app.js";
import mongoose from "mongoose";

dotenv.config();
const port = parseInt(process.env.PORT) || 3000;
const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));

const server = app.listen(port, () => {
  console.log(`server is running at prot:${process.env.PORT}`);
});
