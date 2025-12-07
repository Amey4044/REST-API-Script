const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("REST API Running...");
});

app.listen(5000, () => console.log("Server running on port 5000"));
