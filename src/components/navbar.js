import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <h3 className="brand">CompanyName</h3>
                <ul className="navtabs">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}