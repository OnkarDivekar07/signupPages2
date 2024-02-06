//imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const sequalize = require("./util/database");
const PORT = process.env.PORT || 2545;

//Handler function
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(cookie());

//static serving of Files
app.use(express.static("Public"));

//Importing Routes
const SignUPRoute = require("./Routes/User");
const HomePage = require("./Routes/HomePage");

//Importing models
const User = require("./Model/User");

//Routes Handling MiddleWre
app.use("/User", SignUPRoute);
app.use(HomePage);

//starting my server
sequalize
  .sync({})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server Started On PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
