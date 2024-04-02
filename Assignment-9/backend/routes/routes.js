const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("multer");
const User = require("../model/user");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "D:/STUDY/NEU/Web Design 6150/Assignment/Assignment - 8/images");
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + Date.now() + ext);
    },
  });
  
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG, PNG, and GIF files are allowed!"), false);
    }
  };
  
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/create", async (req, res) => {
    console.log(req.body);
    try {
        const { fullName, email, password } = req.body;
    
        if (!fullName || !email || !password) {
          return res
            .status(400)
            .json({ message: "Please provide fullName, email, and password" });
        }
    
        if (/\d/.test(fullName)) {
          return res
            .status(400)
            .json({ message: "Full name should not contain numbers" });
        }
    
        const emailRegex = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]+\.(edu|com|org)$/;
        if (!emailRegex.test(email)) {
          return res
            .status(400)
            .json({ message: "Please provide a valid email address" });
        }
    
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
          return res.status(400).json({
            message:
              "Password must have at least 8 characters with one uppercase letter, one lowercase letter, one number, and one special character",
          });
        }
    
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ message: "Email already exists" });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({
          fullName: fullName,
          email: email,
          password: hashedPassword,
        });
    
        await newUser.save();
    
        res.status(201).json({ message: "User created successfully" });
      }catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
});

router.get("/getAllUsers", async(req, res) => {
    try{
        const users = await User.find(
            {},
            { fullName: 1, email: 1, password: 1, _id: 0 }
          );
          res.status(200).json(users);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})

router.delete("/delete", async(req, res) =>{
    try {
        const { email } = req.body;
    
        if (!email) {
          return res
            .status(400)
            .json({ message: "Please provide the email of the user to delete" });
        }
    
        const deleteUser = await User.findOneAndDelete({ email });
    
        if (!deleteUser) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.status(200).json({ message: "User deleted successfully", deleteUser });
      }catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
})

router.put("/edit", async(req, res) => {
    try{
        const { email, fullName, password } = req.body;
    
        if (!email) {
          return res
            .status(400)
            .json({ message: "Please provide the email of the user to update" });
        }
    
        const existingUser = await User.findOne({ email });
    
        if (!existingUser) {
          return res.status(404).json({ message: "User not found" });
        }
    
        if (fullName && /\d/.test(fullName)) {
          return res
            .status(400)
            .json({ message: "Full name should not contain numbers" });
        }
    
        if (password && password.length < 8) {
          return res
            .status(400)
            .json({ message: "Password must be at least 8 characters long" });
        }
    
        if (req.body.email && req.body.email !== existingUser.email) {
          return res.status(400).json({ message: "Email cannot be updated" });
        }
    
        let hashedPassword;
        if (password) {
          hashedPassword = await bcrypt.hash(password, 10);
        }
    
        if (fullName) {
          existingUser.fullName = fullName;
        }
        if (password) {
          existingUser.password = hashedPassword;
        }
    
        await existingUser.save();
    
        res.status(200).json({
          message: "User details updated successfully",
          updatedUser: existingUser,
        });
      }catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
})

router.put("/uploadImage", async(req, res) => {
    try {
        upload.single("image")(req, res, async function (err) {
          if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: "Multer error: " + err.message });
          } else if (err) {
            return res.status(400).json({ error: err.message });
          }
          const userEmail = req.body.email;
          const imagePath = req.file.path.replace(/\\/g, "/");
          await User.updateOne({ email: userEmail }, { image: imagePath });
          console.log(userEmail);
          if (!req.file) {
            return res.status(400).json({ error: "No image provided!" });
          }
          const user = await User.findOne({ email: userEmail });
          if (!user) {
            return res
              .status(404).json({ error: "User with the provided email not found!" });
          }
          res.status(200).json({
            imagePath: imagePath,
            message: "Image has been uploaded successfully!",
          });
        });
      }catch(error){
        console.error("Error uploading image:", error);
        res
          .status(500)
          .json({ error: "Server error occurred while uploading image!" });
      }
})

module.exports = router;