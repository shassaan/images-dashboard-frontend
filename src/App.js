import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Route from 'react-router-dom/Route';
import Login from './Components/Login/login';
import MainLayout from './Components/Layout/MainLayout';
import CreateUserComponent from './Components/CreateUserComponent'
import './App.css'

function App() {
  return (
    
    <Router>
       
       <Route path="/" exact strict component={()=>{return <Login/>}}/>
       <Route path="/layout" exact strict component={()=>{return <MainLayout/>}}/>
       <Route path="/create-user" exact strict component={()=>{return <CreateUserComponent/>}}/>
       </Router>
     
  
  );
}

export default App;
