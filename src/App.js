import React, { useEffect } from 'react';
import './App.css';
import PaymentGateWay from './PaymentGateWay';

import { Link ,BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Shop from './Shop';

function App() {

  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Shop} />
      
      <Route exact path="/payment/:price" component={PaymentGateWay} />
      </Switch>
  </Router>
  )
}

export default App;
