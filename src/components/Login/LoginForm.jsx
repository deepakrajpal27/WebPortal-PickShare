import React from 'react';
import { Link } from 'react-router-dom';
import Image from './image.jpg';
import Logo from './pickshare_Logo.png';

function LoginForm() {
    return (
        <div className='login-container'>
            <div className='middleContainer'>
                <div className='image'>
                    <img alt={'temp'} src={Image} className='bigImage' />
                </div>
                <div className='lowerMiddle'>
                    <div className='packetText'>
                        <h2>Login</h2>
                    </div>
                    <div className='buttonContainer'>
                        <Link to='/login'>
                            <button className='einloggenButton'>Einloggen</button>
                        </Link>
                        <Link to='/'>
                            <button className='registrierenButton'>Registrieren</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='pickShareLogo'>
                <img alt={'temp'} className='logoDimensions' src={Logo} />
            </div>
        </div>
    );
}

export default LoginForm;