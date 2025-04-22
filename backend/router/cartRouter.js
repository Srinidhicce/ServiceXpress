const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const auth = require("../middleware/auth"); // Adjust the path as needed

// Apply auth middleware to all routes in this router
router.use(auth);

router.post("/", cartController.addCart);
router.get("/cartitems", cartController.getCart);
router.delete("/delete/:id", cartController.deleteCart);
module.exports = router;
