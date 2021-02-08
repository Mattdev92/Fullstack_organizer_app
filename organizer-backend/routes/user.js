//Importing some libraries
const express = require("express");
const User = require("../models/auth");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Creating routes
//Creating new User

router.post("/register", async (req, res) => {
  ///validate data - later
  /// Checking if User is already in database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email already exist");
  }
  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.json({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login

router.post("/login", async (req, res) => {
  ///validate data

  //checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send(`Email is wrong`);
  }
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");
  //Crete and assign a token
  const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);
});

module.exports = router;
