const express = require("express");
const app = express();
const db = require("../Assignment-9/api/config/mongoose");
const userRoutes = require("../Assignment-9/api/routes/routes");
const cors = require("cors"); // Import cors module
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/user", userRoutes);
app.use("/images", express.static("company-images"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
