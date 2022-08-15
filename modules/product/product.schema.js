import Joi from "joi";
import joiObjectid from "joi-objectid";

Joi.objectId = joiObjectid(Joi);

export const postSchema = Joi.object({
  image: Joi.string().required().max(1000),
  carName: Joi.string()
    .required()
    .max(50)
    .message('O campo "nome" pode ter no máximo {{#limit}} caracteres.'),
  brand: Joi.string()
    .required()
    .max(50)
    .message('O campo "sobrenome" pode ter no máximo {{#limit}} caracteres.'),
  year: Joi.string()
    .required()
    .max(30)
    .message('O campo "usuário" pode ter no máximo {{#limit}} caracteres.'),
  color: Joi.string()
    .required()
    .max(100)
    .message('O campo "email" pode ter no máximo {{#limit}} caracteres.'),
  price: Joi.string().required().max(50),
  description: Joi.string().required().max(50),
});
export const deleteSchema = Joi.object({
  id: Joi.objectId().required(),
});

export const editSchema = Joi.object({
  id: Joi.objectId().required(),
  image: Joi.string().required().max(500),
  carName: Joi.string()
    .required()
    .max(50)
    .message('O campo "nome" pode ter no máximo {{#limit}} caracteres.'),
  brand: Joi.string()
    .required()
    .max(50)
    .message('O campo "sobrenome" pode ter no máximo {{#limit}} caracteres.'),
  year: Joi.string()
    .required()
    .max(30)
    .message('O campo "usuário" pode ter no máximo {{#limit}} caracteres.'),
  color: Joi.string()
    .required()
    .max(100)
    .message('O campo "email" pode ter no máximo {{#limit}} caracteres.'),
  price: Joi.string().required().max(50),
  description: Joi.string().required().max(50),
})
