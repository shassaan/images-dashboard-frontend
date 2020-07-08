import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Components/Login/login';
import MainLayout from './Components/Layout/MainLayout';
import CreateUserComponent from './Components/CreateUserComponent/CreateUserComponent';
import RoleManagement from './Components/RoleManagement/RoleManagement';
import UserRequest from './Components/UserRequests/UserRequest';
import ProfileSettings from './Components/ProfileSetting/ProfileSetting';
import ImagesManagement from './Components/ImagesManagement/imagesManagement'

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <MainLayout>
          <Route exact path="/layout" component={""} />
          <Route exact path="/create-user" component={CreateUserComponent} />
          <Route exact path="/role-management" component={RoleManagement} />
          <Route exact path="/user-requests" component={UserRequest} />
          <Route exact path="/profile-setting" component={ProfileSettings} />
          <Route exact path="/images-management" component={ImagesManagement} />
        </MainLayout>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
