const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const multer = require("multer");
const User = require("../model/user"); 
const Company = require("../model/company");
const Job = require('../model/job');
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "/Users/mg/Desktop/WebDesignNew/Assignment-10/images");
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + Date.now() + ext);
    },
  });


const storageCompany = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "/Users/mg/Desktop/WebDesignNew/Assignment-10/company-images"
    ); // Path to store images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-company" +
      path.extname(file.originalname);
    const fullPath = path.join(
      "/Users/mg/Desktop/WebDesignNew/Assignment-10/company-images",
      uniqueSuffix
    ); // Full path including filename
    cb(null, uniqueSuffix); // Unique filename with 'company' appended
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
        const { fullName, email, password, type } = req.body;
    
        if (!fullName || !email || !password || !type) {
          return res
            .status(400)
            .json({ message: "Please provide fullName, email, password and type" });
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

        if (type !== "employee" && type !== "admin") {
          return res.status(400).json({
            message: 'Type must be "employee" or "admin"',
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
          type: type,
        });
    
        await newUser.save();
    
        res.status(201).json({ message: "User created successfully" });
      }catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
});

router.post("/create/job", async (req, res) => {
  console.log(req.body);
  try {
      const { companyName, jobTitle, description, salary } = req.body;
  
      if (!companyName || !jobTitle || !description || !salary) {
        return res
          .status(400)
          .json({ message: "Please provide companyName, jobTitle, description, and salary" });
      }
  
      // Save job details to database
      // Example: const newJob = await Job.create({ companyName, jobTitle, description, salary });
      const newJob = new Job({
        companyName: companyName,
        jobTitle: jobTitle,
        description: description,
        salary: salary,
      });
  
      await newJob.save();
      res.status(201).json({ message: "Job created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/jobs/get", async (req, res) => {
  try {
    const jobs = await Job.find();

    const { page = 1, perPage = 3 } = req.query;
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;

    const paginatedJobs = jobs.slice(startIndex, endIndex);
    const totalPages = Math.ceil(jobs.length / perPage);

    res.status(200).json({ jobs: paginatedJobs, totalPages });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


router.get("/getAllUsers", async(req, res) => {
    try{
      const users = await User.find({}, { password: 0 });
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

router.post("/uploadImage", async(req, res) => {
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

router.get("/getAllCompanies", async(req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies); // JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" }); // Sending error response
  }
})

router.post("/authenticate", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // At this point, the user is authenticated
    res.status(200).json({ message: "Authentication successful", user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
})

const fileFilterCompany = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const companyUpload = multer({
  storage: storageCompany,
  fileFilter: fileFilterCompany,
});

router.post("/uploadCompanyImages", companyUpload.array("images", 5), async (req, res) => {
  try {
    // Extract company name and uploaded image filenames
    const { companyName } = req.body;
    const images = req.files.map((file) => file.filename);

    // Create a new company document
    const newCompany = new Company({
      companyName: companyName,
      images: images,
    });

    // Save the company document to the database
    await newCompany.save();

    res.status(201).send("Company added successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
});

module.exports = router;