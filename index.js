const express = require("express");
require("dotenv").config()

const router = require("./routes/router")
const app = express();

app.use(express.json())
app.use("/api",router)
app.set(express.static("./public"))
app.use("/public",express.static("public"))

require("./dbConnect");

app.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});
