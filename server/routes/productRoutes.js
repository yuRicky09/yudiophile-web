import express from "express";
import {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/:category").get(getAllProducts).post(createProduct);
router.route("/:category/:id").get(getProduct).delete(deleteProduct);

export default router;
