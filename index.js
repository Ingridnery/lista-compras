const express = require("express");
const cors = require('cors');

const db = require("./db.js");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const session = require('express-session');
const userController = require("./controller/userController.js");
const itemController = require("./controller/itemController.js");

const porta = 8080;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));
app.use(session({
  secret: 'sua-chave-secreta',
  resave: false,
  saveUninitialized: false
}));

// Inicializa o Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
  { usernameField: 'email', passwordField: 'senha' },
  (email, senha, done) => {
    userController.login(email, senha, done);
  }
));
app.get("/user/:id", userController.findById);
app.post("/user", userController.create);

app.put("/user/:id", userController.validationMiddleware, userController.update);
app.delete("/user/:id", userController.deleteUser);
app.get("/item", itemController.findAll);
app.get("/item/:id", itemController.findById);
app.get("/item/user/:id", itemController.findByIdUser)
app.post("/item", itemController.autenticado, itemController.validationMiddleware, itemController.create);
app.put("/item/:id",itemController.update);
app.delete("/item/:id", itemController.deleteItem);
app.get("/lista/:id", itemController.listaCompartilhada);

app.post("/compartilhar", itemController.compartilhar);
app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao efetuar login' });
      }

      return res.status(200).json({ message: 'Login bem-sucedido', user });
    });
  })(req, res, next);
});


app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return res.redirect('/'); // Redireciona para a página inicial em caso de erro
    }
    res.redirect('/'); // Redireciona para a página inicial após o logout bem-sucedido
  });
});
app.get('/rota-protegida', (req, res) => {
  if (req.isAuthenticated()) {
    console.log("autenticado");
  } else {
    console.log("não autenticado");
  }
});

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(async function (id, done) {
  console.log("id", id);
  const user = await userController.findByIdUser(id);
  console.log("user", user);
  if (user) {
    done(null, user);
  } else {
    return done(new Error('User not found'), null);
  }
});

app.listen(porta, () => {
  console.log(`servidor esta rodando na porta ${porta}`);
})
