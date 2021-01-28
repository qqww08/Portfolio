const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const router = express.Router();

fs.readdir("public/uploads", (error) => {
  // uploads 폴더 없으면 생성
  if (error) {
    fs.mkdirSync("public/uploads");
  }
});
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});
router.post("/upload", upload.single("img"), (req, res) => {
  res.json({ avatar: `/uploads/${req.file.filename}` });
});

module.exports = router;
