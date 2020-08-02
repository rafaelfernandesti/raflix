import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';


ReactDOM.render(
//  <React.StrictMode>
 //   <App />
 // </React.StrictMode>,
 <BrowserRouter>
  <Switch>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route path="/" component={Home} exact />
    <Route component={()=>(<div>Página 404</div>)} />
  </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);