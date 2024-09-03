// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderPage from './Header/Header';
import SearchPage from './Region-info/SearchPage';
import ResultsPage from './Region-info/ResultsPage';
import DetailPage from './Region-info/DetailPage';
import Signup from './User/Sign_up';
import Login from './User/login';
import Home from './Main/Home';
import Mypage from './MyPage';

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
        <Route path="/Home" component={Home} />
        <Route path="/Mypage" component={Mypage} />
      </Switch>
    </Router>
  );
}

export default App;
