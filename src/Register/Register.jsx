import React from 'react';

import '../shared/styles/LoginAndRegister.css';

export default function Register() {
    return <div class="Register">
        <div className="form-control">
            <label>Username</label>
            <input type="text" />
        </div>
        <div className="form-control">
            <label>Password</label>
            <input type="password" />
        </div>
        <div className="form-control">
            <label>Repeat password</label>
            <input type="password" />
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </div>;
}