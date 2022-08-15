import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  brand: {
    type: String,
    required: true,
    maxlength: 50,
  },
  year: {
    type: Number,
    required: true,
    maxlength: 50,
  },
  color: {
    type: String,
    required: true,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    maxlength: 50,
  },
  image: {
    type: String,
    required: true,
    maxlength: 1000
  },
});
export default mongoose.models.Product || mongoose.model("Product", productSchema)