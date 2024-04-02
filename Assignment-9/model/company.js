const mongoose = require("mongoose");
const CompanySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    images: [{ type: String }], 
  },
  { 
    collection: "companies" 
  }
);
module.exports = mongoose.model("Company", CompanySchema);
