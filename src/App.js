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
        <Route exact path="/"   component={Login} />
        <MainLayout>
          <Route exact path="/layout"   component={""} />
          <Route exact path="/create-user"   component={CreateUserComponent} />
        </MainLayout>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
