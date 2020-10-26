import React, { Component } from 'react';
import './LoginScreen.css';
import Image from './image.jpg';
import Logo from './pickshare_Logo.png';
import { Link } from 'react-router-dom';

class LoginScreen extends Component {

  routeChange = (path) => {
    this.props.history.push(path)
  }

  render() {
    return (
      <div className='login-container'>
        <div className='middleContainer'>
          <div className='image'>
            <img src={Image} className='bigImage' />
          </div>
          <div className='lowerMiddle'>
            <div className='packetText'>
              <h2>Pakete sicher annehmen und lokal versenden</h2>
            </div>
            <div className='buttonContainer'>
              {/* <Link to='/login'> */}
              {/* <button onClick={() => { this.routeChange("/login") }} className='einloggenButton'>Einloggen</button> */}
              {/* </Link> */}
              <button className='einloggenButton'>Einloggen</button>
              <button onClick={() => { this.routeChange("/registration") }} className='registrierenButton'>Registrieren</button>
            </div>
          </div>
        </div>
        <div className='pickShareLogo'>
          <img className='logoDimensions' src={Logo} />
        </div>
      </div>
    );
  }
}

export default LoginScreen;