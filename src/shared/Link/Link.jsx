import React from 'react';
import { Link as ReactRouterDomClick } from 'react-router-dom';

import './Link.css';

function Link({ children, to }) {
    return (
        <li className="listItem">
            <ReactRouterDomClick to={to}>{children}</ReactRouterDomClick>
        </li>
    )
}

export default Link;