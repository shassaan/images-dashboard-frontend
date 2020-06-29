import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Components/Login/login';
import MainLayout from './Components/Layout/MainLayout';
import CreateUserComponent from './Components/CreateUserComponent'
import './App.css'

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact strict component={Login} />
        <MainLayout>
          <Route path="/layout" exact strict component={MainLayout} />
          <Route path="/createUser" exact strict component={CreateUserComponent} />
        </MainLayout>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
