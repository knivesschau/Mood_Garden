import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './LandingNav.css';

export default class LandingNav extends Component {
    render() {
        return (
            <div className="LandingNav">
                <Link to='/register'>
                    Sign Up
                </Link>

                <Link to='/login'>
                    Login
                </Link>

                <Link to='/your-garden'>
                    Your Garden
                </Link>

            </div>
        )
    }
}