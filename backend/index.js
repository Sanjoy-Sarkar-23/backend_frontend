const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World from Express Rohit!");
});

app.post("/login", async (req, res) => {
const {email, password} = req.body
  console.log("Email:", email);
  console.log("Password:", password);
if (email == "test@gmail.com" && password === "1234"){


  res.status(200).json({
    message: "I am ready to login",
    data: email,
  });}else
  {
    res.status(401).json("Login Failed")
  }
});

app.get("/rohit", (req, res) => {
  res.send("I am ready to Rohit");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});