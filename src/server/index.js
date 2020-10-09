const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const app = express();

app.use(volleyball);
app.use(express.json());

const staticFolder = path.join(__dirname, "..", "..", "static");
const distFolder = path.join(__dirname, "..", "..", "dist");
app.use(express.static(staticFolder));
app.use(express.static(distFolder));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(staticFolder, "index.html"));
});

// error middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 3000;

const server = app.listen(port);
