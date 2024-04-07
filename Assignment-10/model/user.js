const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    image: { 
      type: String 
    },
    type: { 
      type: String, 
      required: true, 
      enum: ["employee", "admin"] 
    },
  },
  { collection: "users" }
);

const users = mongoose.model("UserSchema", userSchema);

module.exports = users;
