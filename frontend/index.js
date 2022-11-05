import 'core-js/stable';
import 'regenerator-runtime/runtime';
//import './css/style.css';

import Login from './modulos/login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

login.init();
cadastro.init();