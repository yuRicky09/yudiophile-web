import asyncHandler from "./../utils/asyncHandler.js";
import Product from "../models/productModel.js";

const getAllProducts = asyncHandler(async (req, res, next) => {
  const category = req.params.category;
  const products = await Product.find({ category });

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

const createProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      product,
    },
  });
});

const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

export { getAllProducts, createProduct, getProduct, deleteProduct };
