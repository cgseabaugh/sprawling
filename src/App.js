import './App.css';

import React, { Component, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';

import Home from './pages/home/home';
import About from './pages/about/about';
import Rpg from './pages/rpg/rpg';
import Profile from './pages/profile/profile';
import Game from './game/game';
import PageWrapper from './components/pageWrapper/pageWrapper'
import Header from './components/header/header';
import Login from './components/login/login';
import LoggedIn from './components/loggedIn/loggedIn';
import Footer from './components/footer/footer';



function App() {

  const [loggedIn, setLoggedIn] = useState(null)


  console.log("app")

  return (
    <div className="App flex-col">
      
      <div className="header flex-row">
        
        <div className="app-header">
          <Header />
        </div>
        
      </div>
      
      <div className="main flex-row">
        
          <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/rpg" element={<Rpg/>} ></Route>
              <Route path="/game" element={<Game/>}></Route>
            </Routes>
          </Router>
        
      </div>
      
      <div className="footer flex-row">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;