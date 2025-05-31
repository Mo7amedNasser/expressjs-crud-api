import Product from "../models/product.model.js";

/**
 * @desc    Fetch all products from the database
 * @route   GET /api/products
 * @access  Public
 */
const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @desc    Fetch a single product by ID
 * @route   GET /api/products/:id
 * @access  Public
 */
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Find product by ID
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @desc    Create a new product
 * @route   POST /api/products
 * @access  Public
 */
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body); // Create a new product using request body
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @desc    Delete a product by ID
 * @route   DELETE /api/products/:id
 * @access  Public
 */
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id); // Delete product by ID
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @desc    Update a product by ID
 * @route   PUT /api/products/:id
 * @access  Public
 */
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated product
      runValidators: true, // Run validation rules defined in schema
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Exporting controller functions to use in routes
export {
  getProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
