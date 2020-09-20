import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Protected from './Components/Protected'


function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={ Login }/>
        <Route exact path='/register' component={ Register }/>
        <Router exact path='/protected' component= { Protected }/>
      </Switch>
    </Router>
  );
}

export default App;
