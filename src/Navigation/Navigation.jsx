import React from 'react';
import Link from '../shared/Link/Link';

import './Navigation.css';

function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
                <Link to="/">
                    <img id="logo" src="logo192.png" alt="my-app" />
                </Link>
                <Link to="/">Posts</Link>
                <Link to="/create-post">New post</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </ul>
        </nav>
    )
}

export default Navigation;