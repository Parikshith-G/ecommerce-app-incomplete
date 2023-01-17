const express = require('express')
const app = express()
const port = 5000
const mongoose=require('mongoose')
const fileUpload=require('express-fileupload')
const apiRoutes=require("../back_end/routes/apiRoutes")
const cookieParser=require('cookie-parser')







app.use(cookieParser())
app.use(express.json())
app.use(fileUpload())
mongoose.set('strictQuery', false);







app.get("/", async (req, res, next) => {
  res.json({ message: "API running..." });
});

// mongodb connection
const connectDB = require("./config/db");
connectDB();

app.use("/api", apiRoutes);

// app.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "development") {
//     console.error(error);
//   }
//   next(error);
// });
// app.use((error, req, res, next) => {
//   if (process.env.NODE_ENV === "development") {
//     res.status(500).json({
//       message: error.message,
//       stack: error.stack,
//     });
//   } else {
//       res.status(500).json({
//          message: error.message, 
//       })
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

