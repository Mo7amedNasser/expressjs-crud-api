import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

/**
 * @desc   Product model
 * @usage  Used to interact with the products collection in MongoDB
 */
const Product = mongoose.model("Product", productSchema);

export default Product;
