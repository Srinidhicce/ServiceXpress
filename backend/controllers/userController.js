const User = require("../models/userModel"); // Check this path

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(200).json("User Created Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json("Error creating user");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //use findOne to find and check the user has acc to login
    const user = await User.findOne({ email });
    //if not respond invalid mail
    if (!user) {
      return res.status(404).json("Invalid mail");
    }
    //if mail satisfied check the match in password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json("Invalid password");
    }
    const token = jwt.sign({ user_id: user._id }, "secret_token", {
      expiresIn: "1d",
    });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json("Error logging in user");
  }
};

module.exports = { createUser, loginUser };
