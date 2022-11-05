const express = require('express');
const router = express.Router();

const homeController = require('./src/controlls/homecontroll');
const loginController = require('./src/controlls/loginController')
const contatoControll = require('./src/controlls/contatoController')

const { loginRequired } = require('./src/middleware/middleware');



// Rotas da Home
router.get('/',homeController.index);

// ====================================

// Rotas Login

router.get('/login/index', loginController.index);
router.post('/login/register', loginController.register);
router.post('/login/login', loginController.login);
router.get('/login/logout', loginController.logout);

//======================================================

// Rotas Contatos

router.get('/contato/index', loginRequired, contatoControll.index);
router.post('/contato/register',loginRequired,contatoControll.register);
router.get('/contato/index/:id', loginRequired, contatoControll.editIndex);
router.post('/contato/edit/:id', loginRequired, contatoControll.edit);
router.get('/contato/delete/:id', loginRequired, contatoControll.delete);

module.exports = router;