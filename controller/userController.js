const validacao = require("../validator/validacoes.js");
const User = require ("../models/user");
const passport = require('passport');
const bcrypt = require('bcrypt');

const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
    (email,senha,done)=>{async (req,res) => {
        const user = await User.findOne({where: {email: email, senha: senha}});
        if(!user){
            return res.status(400).json({error: "Email ou senha incorretos"});
        }
        if(user.email == email && user.senha == senha){
            return done(null,user);
        }else{
            return done(null,false,{message: "Email ou senha incorretos"});
        }

    }}
));

async function findAll(req, res) {
    const users = await User.findAll();
    if(users.length == 0 ){
        return res.status(400).json({error: "Nenhum usuário encontrado"});
    }
    return res.status(200).json({users: users});

    
}

async function findById(req, res) {
    const {id} = req.params;
    const users = await User.findByPk(id);
    if(!users){
        return res.status(400).json({error: "Cliente não encontrado"});
    }
    
    return res.status(200).json({users: user});
    
}
async function findByIdUser(id){
    const users = await User.findByPk(id);
    if(!users){
        return null;
    }
    
    return users;
    
}
async function create(req, res){
    const {nome, email, senha} = req.body;
    //senha hash
    const senhaHash = await bcrypt.hashSync(senha, 10);
    const user = await User.create({
        nome,
        email,
        senha: senhaHash,
    });
    user.save();

    return res.status(201).json({user: user});
}
async function update(req, res) {
    const {id} = req.params;
    const {nome, email, senha} = req.body;
    const user = await User.findByPk(id);
    if(!user){
        return res.status(400).json({error: "Cliente não encontrado"});
    }
    user.nome = nome;
    user.email = email;
    user.senha = senha;
    user.save();
    return res.status(200).json({user: user});
}
async function deleteUser(req, res) {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if(!user){
        return res.status(400).json({error: "Cliente não encontrado"});
    }
    user.destroy();
    return res.status(200).json({message: "Cliente excluído com sucesso"});
}

async function login(email,senha,done){
    const user = await User.findOne({where: {email: email}});
    if(!user){
        return done(null,false,{message: "Email incorretos"});
    }
    const senhaCorrespondente = await bcrypt.compare(senha, user.senha);
    if(!senhaCorrespondente){
        return done(null,false,{message: "Email ou senha incorretos"});
    }
    return done(null,user);
}

    
const validationMiddleware = (request, response, next) => {
    const { error } = validacao.userSchema.validate(request.body)
    const valid = error == null; 
    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
      response.status(422).json({ error: message })
    } 
}

module.exports = {findAll, findById, create,validationMiddleware, update, deleteUser,login, findByIdUser};