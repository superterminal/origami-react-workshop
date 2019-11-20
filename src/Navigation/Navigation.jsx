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
                <Link to="#">Link 3</Link>
            </ul>
        </nav>
    )
}

export default Navigation;