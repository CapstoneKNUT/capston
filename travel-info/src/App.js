// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderPage from './Header/Header';
import SearchPage from './place/SearchPage';
import ResultsPage from './place/ResultsPage';
import Detail from './place/Read';
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
        <Route path="/detail/:storeId" component={Detail} />
        <Route path="/Sign_up" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Mypage" component={Mypage} />
      </Switch>
    </Router>
  );
}

export default App;
