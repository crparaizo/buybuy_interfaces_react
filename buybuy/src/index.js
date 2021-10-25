import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import Inicial from './pages/Inicial/Inicial';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Produtos from './pages/Produtos/Produtos';
import Lojas from './pages/Lojas/Lojas';
import Carrinho from './pages/Carrinho/Carrinho';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';

const rotas = (
  <Router>
      <div>
          <Switch>
              <Route exact path="/" component={Inicial} />
              <Route path="/login" component={Login} />
              <Route path="/cadastro" component={Cadastro} />
              <Route path="/produtos" component={Produtos} />
              <Route path="/lojas" component={Lojas} />
              <Route path="/carrinho" component={Carrinho} />
              <Route component={NaoEncontrada} /> {/* Esse é o default do Switch, nenhuma outra Route será lida dps disso */}
          </Switch>
      </div>
  </Router>
);

ReactDOM.render(rotas, document.getElementById('root')); // Acrescentar "rotas" aqui!

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
