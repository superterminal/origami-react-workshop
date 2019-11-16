import React from 'react';
import Link from '../shared/Link/Link';

import './Navigation.css';

function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
                <Link url="#">
                    <img id="logo" src="logo192.png" alt="my-app" />
                </Link>
                <Link url="#">Link 2</Link>
                <Link url="#">Link 3</Link>
            </ul>
        </nav>
    )
}

export default Navigation;