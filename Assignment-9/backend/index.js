const express = require("express");
const app = express();
const db = require("./config/mongoose");
const userRoutes = require("./routes/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
