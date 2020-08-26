import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="login-body">
                <h3 className="title">Log in</h3>
                <div className="login-info">
                    <input type="text" placeholder="User Name" name="userName" />
                    <br />
                    <input type="text" placeholder="Password" name="password" />
                    <br/>
                    <button>Log in</button>
                </div>
            </div>
        );
    }
}