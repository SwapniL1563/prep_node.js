const express = require("express");
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Protected route
router.get("/profile", auth, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}`, user: req.user });
});

module.exports = router;
