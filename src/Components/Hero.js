import React, { Component } from 'react';
import './Sections.css';

class Hero extends Component {
    render() { 
        return (
            <div className='hero-wrapper'>
                <div className='hero-text-wrapper'>
                <h2 className='hero-text text-white'>Big text header</h2>
                <div className='hero-paragraph text-white'>lorem ipsum st dolor amet</div>
                <button className='sign-up'>Sign Up</button>
                </div>
                <img src="http://fakeimg.pl/400x200" alt="Fake Images Please?" />
            </div>
        );
    }
}
 
export default Hero;