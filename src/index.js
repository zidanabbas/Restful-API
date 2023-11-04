const express = require("express");
const app = express();

// app.use("/", (req, res, next) => {
//   res.send("Hello World!!");
//   next();
// });

app.get("/", (req, res) => {
  res.json({
    name: "Zidane Abbas",
    password: "secretpassword",
  });
});

app.post("/", (req, res) => {
  res.send("Hello POST Method!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
