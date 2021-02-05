const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(265),
    email: Joi.string().required().min(6).max(265).max(265).email(),
    password: Joi.string().required().min(6).max(1024),
  });
  return Joi.validate(data, schema);
};
const loginValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(265),
    password: Joi.string().required().min(6).max(1024),
  });
  return Joi.validate(data, schema);
};

module.exports = registerValidation;
module.exports = loginValidation;
