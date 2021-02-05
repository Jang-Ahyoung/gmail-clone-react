import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import EmailList from './components/Email_List/EmailList';
import Header from './components/Header/Header';
import Mail from './components/Mail/Mail';
import Sidebar from './components/SideBar/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <Sidebar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <EmailList />
            </Route>
            <Route path="/mail">
              <Mail />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
