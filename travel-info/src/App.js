// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderPage from './Header';
import SearchPage from './SearchPage';
import ResultsPage from './ResultsPage';
import DetailPage from './DetailPage';
import Signup from './Sign_up';

function App() {
  return (
    <Router>
      <HeaderPage />
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/detail/:storeId" component={DetailPage} />
        <Route path="/Sign_up" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
