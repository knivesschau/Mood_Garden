import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-services';
import './LandingNav.css';

export default class LandingNav extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        window.location='/';
    }

    renderLogout() {
        return (
            <div className="LandingNav_SignedIn">
                <Link to='/' onClick={this.handleLogoutClick}>
                    Logout 
                </Link>
            </div>
        )
    }

    renderLogin() {
        return (
            <div className="LandingNav_NoLogin">
                <Link to='/register'>
                     Sign Up
                </Link>

                ||

                <Link to='/login'>
                     Log In
                </Link>
            </div>
        )
    }
    
    render() {
        return (
            <div className="LandingNav">

                <Link to='/your-garden'>
                    Your Garden
                </Link>

                {TokenService.hasAuthToken()
                    ? this.renderLogout()
                    : this.renderLogin()}

            </div>
        )
    }
}