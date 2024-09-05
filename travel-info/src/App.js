// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderPage from './Header/Header';
import SearchPage from './place/SearchPage';
import list from './place/Lists';
import Detail from './place/Read';
import Signup from './User/Sign_up';
import Login from './User/login';
import Main from './Main/Main';
import Mypage from './MyPage';

function App() {
  return (
    <Router>
      <HeaderPage />
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/list" component={list} />
        <Route path="/detail/:storeId" component={Detail} />
        <Route path="/Sign_up" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/Main" component={Main} />
        <Route path="/Mypage" component={Mypage} />
        <Route path='/Search' component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
