const Joi = require("joi");

const addPostSchema = Joi.object({
  title: Joi.string().alphanum().required(),
  content: Joi.string().alphanum().required()
});

module.exports=addPostSchema