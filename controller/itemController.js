const validacao = require("../validator/validacoes.js");
const Item = require ("../models/items");

async function findAll(req, res) {
    const items = await Item.findAll();
    if(items.length == 0 ){
        return res.status(400).json({error: "Nenhum item encontrado"});
    }
    return res.status(200).json({items: items});   
}
async function findById(req, res) {
    const {id} = req.params;
    const items = await Item.findByPk(id);
    if(!items){
        return res.status(400).json({error: "Item não encontrado"});
    }
    
    return res.status(200).json({items: items});
    
}
async function create(req, res){
    const {descricao, estado, usuario_id} = req.body;
    const item = await Item.create({
        descricao,
        estado,
        usuario_id,
    });
    item.save();

    return res.status(201).json({item: item});
}
async function update(req, res){
    const {id} = req.params;
    const {descricao, estado, usuario_id} = req.body;
    const item = await Item.update({
        descricao,
        estado,
        usuario_id,
    },{where: {id: id}});
    if(item == 0){
        return res.status(400).json({error: "Item não encontrado"});
    }
    return res.status(200).json({item: item});
}
async function findByIdUser(req, res){
    const {id} = req.params;
    const items = await Item.findAll({where: {usuario_id: id}});
    if(items.length == 0){
        return res.status(400).json({error: "Usuário não possui itens na lista"});
    }
    return res.status(200).json({items: items});

}
async function deleteItem(req, res){
    const {id} = req.params;
    const item = await Item.destroy({where: {id: id}});
    if(item == 0){
        return res.status(400).json({error: "Item não encontrado"});
    }
    return res.status(200).json({item: item});
}
async function listaCompartilhada(req, res){
    const {id} = req.params;
    const items = await Item.findAll({where: {usuario_id: id}});
    if(items.length == 0){
        return res.status(400).json({error: "Essa lista não está disponivel no momento."});
    }
    return res.status(200).json({items: items});
}
async function compartilhar(req, res){
    const {usuario_id} = req.body;
    const link= "http://localhost:8080/lista-compartilhada/"+usuario_id;
    return res.status(200).json({link: link});
    
}
const validationMiddleware = (request, response, next) => {
    const { error } = validacao.itemSchema.validate(request.body)
    const valid = error == null; 
    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
      response.status(422).json({ error: message })
    } 
}
module.exports = {findAll, findById, create, update, deleteItem, validationMiddleware, findByIdUser,compartilhar,listaCompartilhada};