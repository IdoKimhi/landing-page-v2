import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Sections.css';


class Navbar extends Component {
    render() { 
        return (
        <div className='navbar-wrapper first'>
            <nav className='navbar'>
                <h2 className='navbar-logo'>Logo</h2>
                <ul className='navbar-links'>
                    <li>First link</li>
                    <li>Second link</li>
                    <li>Third link</li>
                </ul>
            </nav>
        </div>
        );
    }
}
 
export default Navbar;

