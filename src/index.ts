import express from "express";
import rootRouter from "./routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>hello from: ${req.url} page </h1>`);
});

app.use("/api/v1", rootRouter);

//** Middleware for handling errors
app.use(errorHandler);

app.get("*", (req, res) => {
  res
    .status(404)
    .send(`<h1>404 not found this page => ${req.originalUrl}</h1>`);
});

const PORT = parseInt(process.env.PORT || "5000", 10);

app.listen(PORT, () => {
  console.log(`Server is running on => http://localhost:${PORT}`);
});
