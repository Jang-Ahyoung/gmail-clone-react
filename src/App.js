import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import EmailList from './components/Email_List/EmailList';
import Header from './components/Header/Header';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import Sidebar from './components/SideBar/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './components/firebase/firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }))
      }
    })
  }, [])

  return (
    <BrowserRouter>
      {!user
        ? (<Login />)
        : (
          <div className="App">
            <Header />
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
            {sendMessageIsOpen && <SendMail />}
          </div>
        )}

    </BrowserRouter>


  );
}

export default App;
