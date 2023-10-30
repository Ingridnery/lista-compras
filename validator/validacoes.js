const Joi = require("joi");

const userSchema = Joi.object({
    nome: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(1).required()
});
const itemSchema = Joi.object({
    descricao: Joi.string().min(3).max(30).required(),
    estado: Joi.string().min(3).max(30).required(),
    usuario_id: Joi.number().integer().required()
});
module.exports = {userSchema, itemSchema};