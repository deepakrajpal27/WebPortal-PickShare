import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from "./components/Login/LoginForm"
import LoginScreen from './components/Login/LoginScreen';
import RegistrationForm from './components/Registration/RegistrationForm.jsx';
import RegistrationSteps from './components/Registration/RegistrationSteps.jsx';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Router>
                    <Switch>
                        <Route path='/' exact
                            render={props => {
                                return <LoginScreen {...props} />
                            }} />
                        <Route path='/login' component={LoginForm} />
                        <Route path='/registration' component={RegistrationForm} />
                        <Route path='/registration-steps' component={RegistrationSteps} />
                    </Switch >
                </Router>
            </div>
        );
    }
}


export default App;