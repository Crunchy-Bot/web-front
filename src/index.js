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
import Authorized from "./pages/Authorized";
import {AnimeView, MangaView} from "./pages/EntityView";
import Server from "./pages/Server";
import User from "./pages/User";

import reportWebVitals from './reportWebVitals';
import {loginRedirectURI} from "./auth";

ReactDOM.render(
   <Router>
       <div className="bg-gradient-about-quick-dark app overflow-hidden">
           <Nav/>
           <div className="flex justify-center min-h-screen pt-24">
               <div className="w-full">
                   <Switch>
                       <Route exact path="/" component={ () => { return <Redirect to="/home"/> } } />
                       <Route exact path="/support" component={ () => {
                           window.location = "https://discord.com/invite/KvvUcKP"
                       } } />
                       <Route exact path="/invite" component={ () => {
                           window.location = "https://discordapp.com/oauth2/authorize?client_id=656598065532239892&scope=bot&permissions=1678109696"
                       } } />
                       <Route exact path="/login" component={ () => {
                           window.location = loginRedirectURI
                       } } />
                       <Route exact path="/github" component={ () => {
                           window.location = "https://github.com/Crunchy-Bot"
                       } } />
                       <Route path="/home" component={ Home } />
                       <Route path="/commands" component={ Commands } />
                       <Route path="/faq" component={ Faq } />
                       <Route path="/search" component={ Search } />
                       <Route path="/authorized" component={ Authorized } />

                       <Route path="/manga/:id" component={ MangaView } />
                       <Route path="/anime/:id" component={ AnimeView } />

                       <Route path="/user/:id" component={ User } />
                       <Route path="/server/:id" component={ Server } />

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
