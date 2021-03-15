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
       <div className="app overflow-x-hidden">
           <Nav/>
           <div className="flex justify-center overflow-y-auto pt-24 min-h-screen">
               <div className="w-full xl:w-11/12">
                   <Switch>
                       <Route exact path="/" component={ () => { return <Redirect to="/home"/> } } />
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
