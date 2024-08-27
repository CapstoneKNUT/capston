// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderPage from './Header';
import SearchPage from './SearchPage';
import ResultsPage from './ResultsPage';
import DetailPage from './DetailPage';
import Signup from './Sign_up';
import Login from './login';
import SignupPage from './SignupPage';

function App() {
  return (
    <Router>
      <HeaderPage />
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/detail/:storeId" component={DetailPage} />
        <Route path="/Sign_up" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
}

export default App;
