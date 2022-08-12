import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const dataBase = async (req, res, next) => {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGODB_URI);
    }
  } catch (error) {
    res.status(500).send(error);
  }
  return next();
};
export default dataBase;
