import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './LandingNav.css';

export default class LandingNav extends Component {
    render() {
        return (
            <div className="LandingNav">
                <Link to='/'>
                    Sign Up
                </Link>

                <Link to='/'>
                    Login
                </Link>

                <Link to='/'>
                    Your Mood Garden
                </Link>

                <Link to='/'>
                    Plant a Rose 
                </Link>
            </div>
        )
    }
}