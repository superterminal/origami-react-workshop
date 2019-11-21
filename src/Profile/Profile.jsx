import React from 'react';
import Posts from '../Publications/Posts/Posts';

import './Profile.css';

export default function CreatePost() {
    return <div className="Profile">
        <div className="personal-info">
            <p>
                <span>Email:</span>
                myemail@span.bg
            </p>
            <p>
                <span>Posts:</span>
                101020012
            </p>
        </div>
        <Posts limit={3}/>
    </div>;
}