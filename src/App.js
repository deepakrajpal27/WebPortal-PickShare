import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';
import LoginForm from "./components/Login/LoginForm"
import LoginScreen from './components/Login/LoginScreen';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

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
                        <Route path='/login' exact component={LoginForm} />
                    </Switch >
                </Router>
            </div>
        );
    }
}


export default App;