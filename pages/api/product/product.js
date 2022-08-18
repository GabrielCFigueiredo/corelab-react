import validation from "../../../lib/middleWares/validation";
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
product.post(validation({ body: postSchema }), async (req, res) => {
  const created = await productUser(req.body);
  const cookie = "user=hussein; samesite=lax; secure"
  if (created) {
    res.status(201).send({ created });
    res.setHeader("set-cookie", [cookie])
    await created.req.body.save();
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
product.delete(validation(deleteSchema), async (req, res) => {
  try {
    const car = await deleteCar(req.body.id);
    if (car) return res.status(200).send({ car });
    return res.status(400).send("not found");
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
product.patch(validation(editSchema), async (req, res) => {
  try {
    const edit = await editCar(req.body);
    if (edit) return res.status(200).send({ edit });

    return res.status(400).send("car not found");
  } catch (error) {}
});
export default product;
