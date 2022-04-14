import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name"],
    },
    category: {
      type: String,
      enum: ["headphones", "speakers", "earphones"],
    },
    coverImage: {
      type: String,
    },
    galleryImage: {
      type: Array,
    },
    slug: {
      tpye: String,
    },
    description: {
      type: String,
      required: [true, "A product must have a description"],
    },
    features: {
      type: String,
      required: [true, "A product must have a features"],
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
    },
    includes: [
      {
        quantity: Number,
        item: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
