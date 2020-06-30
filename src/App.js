import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Components/Login/login';
import MainLayout from './Components/Layout/MainLayout';
import CreateUserComponent from './Components/UserComponent/CreateUserComponent';
import RoleManagement from './Components/RoleManagement/RoleManagement';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/"   component={Login} />
        <MainLayout>
          <Route exact path="/layout"   component={""} />
          <Route exact path="/create-user"   component={CreateUserComponent} />
          <Route exact path="/role-management" component={RoleManagement}/>
        </MainLayout>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
