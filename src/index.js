import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import './index.css';

import Nav from './components/Nav';

import Home from './pages/Home';
import Commands from './pages/Commands';
import Faq from './pages/Faq';
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <Router>
       <div className="bg-discord-dark app overflow-x-hidden">
           <Nav/>
           <div className="flex justify-center overflow-y-auto min-h-screen">
               <div className="w-full">
                   <Switch>
                       <Route exact path="/" component={ () => { return <Redirect to="/home"/> } } />
                       <Route exact path="/support" component={ () => {
                           window.location = "https://discord.com/invite/KvvUcKP"
                       } } />
                       <Route exact path="/invite" component={ () => {
                           window.location = "https://discordapp.com/oauth2/authorize?client_id=656598065532239892&scope=bot&permissions=1678109696"
                       } } />
                       <Route path="/home" component={ Home } />
                       <Route path="/commands" component={ Commands } />
                       <Route path="/faq" component={ Faq } />
                       <Route path="/search" component={ Search } />
                       <Route component={ NotFound } />
                   </Switch>
               </div>
           </div>
       </div>
   </Router>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
