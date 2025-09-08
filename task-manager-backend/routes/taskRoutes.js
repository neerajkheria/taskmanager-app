const express = require("express");
const { getTasks } = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", protect, getTasks);

module.exports = router;
