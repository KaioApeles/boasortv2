import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/font-awesome/css/font-awesome.min.css"
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import './navbar/navbar.css'
import NavBar from './navbar/navbar'
import Sorteio from './sorteio/sorteio'
import Lista from './lista/lista';
import Cadastro from './cadastro/cadastro';

function App() {
  return (    
      <Router>
        <div className='container-fluid'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Sorteio} />
          <Route path='/sorteio' exact component={Sorteio} />
          <Route path='/cadastro' exact component={Cadastro} />
          <Route path='/lista' exact component={Lista} />
        </Switch>
        </div>    
      </Router>    
  )
}

export default App;
