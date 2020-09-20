import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


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
