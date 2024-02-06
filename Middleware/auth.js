const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const secreateKey = process.env.secreateKey;

exports.verify = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decodedtoken = await jwt.verify(token, secreateKey);
    console.log(decodedtoken);
    const userid = decodedtoken.UserId;
    const user = await User.findByPk(userid);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server Error" });
  }
};
