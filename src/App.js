import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import EmailList from './components/Email_List/EmailList';
import Header from './components/Header/Header';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import Sidebar from './components/SideBar/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div className="App__body">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <EmailList />
            </Route>
            <Route path="/mail">
              <Mail />
            </Route>
          </Switch>
        </div>
        <SendMail />
      </BrowserRouter>

    </div>
  );
}

export default App;
