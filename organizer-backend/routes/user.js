//Importing some libraries
const express = require("express");
const User = require("./../models/auth");
const router = express.Router();
const { registerValidation } = require("../validation");

//Creating routes
//Creating new User
router.post =
  ("/register",
  async (res, req) => {
    ///validate data
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const savedUser = await user.save();
    } catch {
      res.status(400).send(err);
    }
  });
module.exports = router;
