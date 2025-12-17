import express from 'express';
import connectDb from "./Db/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});