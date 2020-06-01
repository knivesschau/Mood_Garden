import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './LandingNav.css';

export default class LandingNav extends Component {
    render() {
        return (
            <div className="LandingNav">
                <Link to='/'>
                    Landing Page
                </Link>
                
                <Link to='/register'>
                    Sign Up
                </Link>

                <Link to='/login'>
                    Login
                </Link>

                <Link to='/your-garden'>
                    Your Garden
                </Link>

                <Link to='/plant-rose'>
                    Plant a Rose 
                </Link>

                <Link to='/edit-rose'>
                    Edit Rose
                </Link>

                <Link to='/view-rose'>
                    View Rose
                </Link>
            </div>
        )
    }
}