//  exprees here for server
const express = require("express");
//add env to server js
const dotenv = require("dotenv");

const colors = require("colors");
const morgan = require("morgan");

const cors = require("cors");
const connectDB = require("./config/db");

//dot config
dotenv.config();
//mongo Db connection
connectDB();

//rest object  all functionality of express store in const app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//routes

//1 test route
//use app.use instead if app.get
app.use("/api/v1/test", require("./routes/testRoutes"));
//now add to serverjs of file auth register
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//PORT
//to avoid crash in this use process.env.PORT
const PORT =  process.env.PORT || 8080;

//listen to listen all application using PORT
app.listen(PORT, () => {
  console.log(
    //dynamically add
    `Node Server Running In ${process.env.DEV_MODE} Mode On Port ${process.env.PORT}`
      .bgBlue.white
  );
});
