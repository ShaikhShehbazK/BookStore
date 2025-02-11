import User from "../model/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashedPass = await bcrypt.hash(password, 12);
    const user = new User({
      fullName,
      email,
      password: hashedPass,
    });
    const response = await user.save();
    res.status(200).json(response);
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Internal error" });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        message: "Incorrect Password",
      });
    }

    res.status(200).json({
      message: "login succcessfully",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Internal error" });
  }
};
