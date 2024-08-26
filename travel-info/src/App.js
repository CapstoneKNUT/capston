// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import SearchPage from './SearchPage';
import ResultsPage from './ResultsPage';
import './App.css'; // CSS 파일 import

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
