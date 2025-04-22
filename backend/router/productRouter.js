const express = require("express");
const productController = require("../controllers/productController");
const auth = require("../middleware/auth");
const router = express.Router();


router.get("/get",auth,productController.getProducts);
router.post("/",auth,productController.createProducts);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;
