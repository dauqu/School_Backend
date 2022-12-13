const express = require("express");
const router = express.Router();
const Register_Models = require("../models/UserSignup");
const JWT = require("jsonwebtoken");

require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    let token = req.cookies.token || req.headers.token;

    if (token != undefined || token != null || token != "") {
      const have_valid_token = JWT.verify(token, process.env.JWT_SECRET);
      const id_from_token = have_valid_token.id;
      const user_data = await Register_Models.findById(id_from_token);
      res.json(user_data);
    } else {
      req.json({ message: "You are not login ", status: "warning" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: "error" });
  }
});
module.exports = router;
