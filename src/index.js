process.env.NODE_ENV = "production";
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const middlewareLogRequest = require("./middleware/log");
const usersRoutes = require("./routes/users");
const projectsRoutes = require("./routes/projects");
const loginRoutes = require("./routes/login");

app.use(express.json());
app.use(middlewareLogRequest);

app.use("/api", usersRoutes);
app.use("/api", projectsRoutes);
app.use("/api", loginRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
