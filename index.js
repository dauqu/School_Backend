const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const multer = require("multer");
const cookieParser = require("cookie-parser");
const upload = require("express-fileupload");
const fs = require("fs");

 

app.use(upload());

app.use(cookieParser());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "School API is  working" });
});

//Loop of allowed origins
const allowedOrigins = [
  "http://localhost:3001",
  "http://localhost:3000",
  "http://localhost:4000",
  "http://192.168.1.100:3000",
  "http://192.168.1.102:3000",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

const connectDB = require("./config/database");
connectDB();

app.use("/api/GetUser", require("./routes/user_register"));

// singup API
app.use("/api/signup", require("./routes/user_register"));

// login api
app.use("/api/login", require("./routes/login"));

// logout api
app.use("/api/logout", require("./routes/logout"));

// Profile req and res
app.use("/api/profile", require("./Profile/Userprofile"));

// image upload
app.use("/api/imageupload", require("./routes/ImageUpload"));
 

app.listen(4000, () => {
  console.log(`server is running on http://localhost:4000`);
});
