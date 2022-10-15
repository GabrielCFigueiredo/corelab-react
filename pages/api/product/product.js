import validate from "../../../lib/middleWares/validate";
import {
  deleteSchema,
  editSchema,
  postSchema,
} from "../../../modules/product/product.schema";
import createHandler from "../../../lib/middleWares/nextConnect";
import {
  deleteCar,
  editCar,
  getProduct,
  productUser,
} from "../../../modules/product/product.service";

const product = createHandler();
product.post(validate({ body: postSchema }), async (req, res) => {
  try {
    const create = await productUser(req.body);
    res.status(201).send({ create });

    await create.req.body.save();
  } catch (error) {
    console.log(error); 
  }
});
product.get(async (req, res) => {
  try {
    const products = await getProduct();
    if (products) {
      res.status(200).send({ products });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
product.delete(validate(deleteSchema), async (req, res) => {
  try {
    const car = await deleteCar(req.body.id);
    if (car) return res.status(200).send({ car });
    return res.status(400).send("not found");
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
product.patch(validate(editSchema), async (req, res) => {
  try {
    const edit = await editCar(req.body);
    if (edit) return res.status(200).send({ edit });

    return res.status(400).send("car not found");
  } catch (error) {}
});
export default product;
