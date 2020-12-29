import React from 'react';
import './App.css';
import ErrorPage from './mypages/ErrorPage';
import Home from './mypages/Home';
import Rooms from './mypages/Rooms';
import SingleRoom from './mypages/SingleRoom';
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
   <>
   <Navbar/>
   <Switch>
   <Route path="/" exact component={Home}/>
   <Route path="/Rooms" exact  component={Rooms}/>
   <Route path="/Rooms/:slug" exact component={SingleRoom}/> 
   <Route component={ErrorPage}/> 
  </Switch>
   </>
  );
}

export default App;
