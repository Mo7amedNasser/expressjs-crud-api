import express from "express";
const router = express.Router();

import {
  getProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller.js";

/**
 * @desc    Get all products
 * @route   GET /api/products
 * @access  Public
 */
router.get("/", getProducts);

/**
 * @desc    Get a single product by ID
 * @route   GET /api/products/:id
 * @access  Public
 */
router.get("/:id", getSingleProduct);

/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Public
 */
router.post("/", createProduct);

/**
 * @desc    Delete a product by ID
 * @route   DELETE /api/products/:id
 * @access  Public
 */
router.delete("/:id", deleteProduct);

/**
 * @desc    Update a product by ID
 * @route   PUT /api/products/:id
 * @access  Public
 */
router.put("/:id", updateProduct);

export default router;
