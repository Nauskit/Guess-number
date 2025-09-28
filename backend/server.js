const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let secretNumber = Math.floor(Math.random() * 100) + 1;

app.get("/new-game", (req, res) => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ message: "New game started" });
});

app.post("/guess", (req, res) => {
  const { number } = req.body;
  if (number == secretNumber) {
    return res.json({ result: "Correct" });
  } else if (number > secretNumber) {
    return res.json({ result: "Too high" });
  } else {
    return res.json({ result: "Too low" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port: http://localhost:3000");
});
