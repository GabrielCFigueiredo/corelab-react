import Product from "./product.model";
export const productUser = async ({
  image,
  carName,
  brand,
  year,
  color,
  price,
  description,
  id,
}) => {
  try {
    const listCar = {
      image,
      carName,
      brand,
      year,
      color,
      price,
      description,
      id,
    };
    const dbProduct = await Product.create(listCar);
    return dbProduct;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async () => {
  return await Product.find();
};

export const getProductById = async (res, req) => {
  try {
    const product = await Product.findById(req.params._id);

    res.status(200).send(product);
  } catch (error) {
    console.error(error);
  }
};

export const deleteCar = async (id) => {
  return await Product.findOneAndDelete({
    _id: id,
  });
};

export const editCar = async (body) => {
  return await Product.findOneAndUpdate(
    {
      _id: body.id,
    },
    {
      image: body.image,
      carName: body.carName,
      brand: body.brand,
      year: body.year,
      price: body.price,
      description: body.description,
    },
    {
      new: true,
    }
  );
};
