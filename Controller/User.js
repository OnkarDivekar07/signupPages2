const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secreateKey = process.env.secreateKey;

exports.getInfo = async (req, res) => {
  try {
    const user = req.user.id;
    const userinfo = await User.findAll({ where: { id: user } });
    return res.status(200).json({ message: "User Data Send Sucessfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server Error");
  }
};

exports.SignUP = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password } = req.body;
    const user = await User.findOne({ where: { Email } });
    if (user) {
      return res.status(409).json({ message: "Account Already Exists" });
    } else {
      const hashPassword = await bcrypt.hash(Password, 10);
      const newuser = await User.create({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: hashPassword,
      });
      console.log(secreateKey);
      const token = jwt.sign({ UserId: newuser.id }, secreateKey);
      res.cookie("token", token, {
        expiresIn: 3600000,
      });
      res.status(201).json({ Message: "User Account Created Sucessfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal server Error" });
  }
};

exports.Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await User.findOne({ where: { Email } });

    if (!user) {
      return res.status(404).json({ message: "User Does Not Exists" });
    } else {
      const validPassword = await bcrypt.compare(Password, user.Password);
      if (validPassword) {
        const token = jwt.sign({ UserId: user.id }, secreateKey);
        res.cookie("token", token, {
          expiresIn: 3600000,
        });
        res.status(200).json({ message: "login Sucessful" });
      } else {
        res.status(404).json({ message: "Email or Password is Wrong" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal server Error" });
  }
};
