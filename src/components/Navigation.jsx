import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <h3>Navigation</h3>
            <ul>
                <Link to='/login'>
                    <li>Login in</li>
                </Link>
                <Link to='/signup'>
                    <li>Sign Up</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;