import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";


const PORT = process.env.port || 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}.`);
});