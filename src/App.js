import React from 'react';
import Form from './components/Form'
import './App.css';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import LogIn from './components/Login/LoginScreen';
import LoginForm from './components/Login/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router >
            <div className="App" >
                { /* <Navigation /> */}
                <Switch >
                    { /* <Route path='/' exact component={Home} /> */}
                    {/* <Route path='/' component={LogIn} /> */}
                    <Route path='/' component={LoginForm} />
                    { /* <LogIn/> */}
                    { /* <Route path='/signup' component={SignUp} /> */}
                </Switch>
            </div>
        </Router>
    );
}


export default App;