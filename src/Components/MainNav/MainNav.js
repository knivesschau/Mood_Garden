import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-services';
import './MainNav.css';

export default class MainNav extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        window.location='/';
    }

    renderUserNav() {
        return (
            <div className="LandingNav_SignedIn">
                <Link to='/plant-rose'>
                    Plant A Rose
                </Link>

                ||

                <Link to='/'>
                    About
                </Link>

                ||
                
                <Link to='/' onClick={this.handleLogoutClick}>
                    Logout 
                </Link>

            </div>
        )
    }

    renderStartingNav() {
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
            <div className="Main_Nav">

                {TokenService.hasAuthToken()
                    ? this.renderUserNav()
                    : this.renderStartingNav()}

            </div>
        )
    }
}