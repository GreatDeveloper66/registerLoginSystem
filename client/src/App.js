import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import {ProtectedRoute} from './Components/ProtectedRoute'
import {ProtectedComponent} from './Components/ProtectedComponent'



function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={ Login }/>
        <Route exact path='/register' component={ Register }/>
        <ProtectedRoute exact path = '/protected' component={ProtectedComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
