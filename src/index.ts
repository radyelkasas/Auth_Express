import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>hello from: ${req.url} page </h1>`);
});

app.get("*", (req, res) => {
  res.status(404).send(`<h1>404 not found this page => ${req.originalUrl}</h1>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on => http://localhost:${PORT}`);
});
