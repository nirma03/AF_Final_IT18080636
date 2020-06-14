import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import './css/CallToActionIntro.css';


import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile"
import Logout from "./components/Logout";
import Category from "./components/Categories";

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path='/' component={Landing}/>
                <main className="container-fluid">
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/user-profile' component={UserProfile}/>
                    <Route exact path = '/logout' component={Logout}/>
                    <Route exact path = '/categories' component={Category}/>
                </main>
            </div>
            <Footer/>
        </Router>

    );



}
export default App;
