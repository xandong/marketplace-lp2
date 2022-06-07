import express, { json } from "express";
import cors from "cors";
import { routes } from "./routes/routes";

const app = express();
const port = 3333;

app.use(cors());
app.use(json());
app.use(routes);

app.listen(port, () =>
  console.log("\x1b[32m%s\x1b[0m", `> Server running in PORT:${port}`)
);
