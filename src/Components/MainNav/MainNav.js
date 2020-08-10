import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TokenService from '../../services/token-services';
import './MainNav.css';

export default class MainNav extends Component {
    // go to homepage and clear auth token on sign-out. //
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        window.location='/';
    }

    // render nav links for logged in in users. //
    renderUserNav() {
        return (
            <div className="MainNav_SignedIn">
                <Link to='/plant-rose' id="plant-rose">
                    Plant 
                </Link>

                <FontAwesomeIcon icon="leaf" color="green"/>
                
                <Link to='/' id="home-page">
                    About
                </Link>

                <FontAwesomeIcon icon="leaf" color="green"/>
                
                <Link to='/' id="logout-link" onClick={this.handleLogoutClick}>
                    Logout 
                </Link>

            </div>
        );
    }


    // render nav links for non-logged in users or new guests. // 
    renderStartingNav() {
        return (
            <div className="MainNav_NoLogin">
                <Link to='/register' id="register-link">
                     Sign Up
                </Link>

                <FontAwesomeIcon icon="seedling" color="green"/>

                <Link to='/login' id="login-link">
                     Log In
                </Link>
            </div>
        );
    }
    
    render() {
        return (
            <nav role="navigation" className="Main_Nav">
                        
                {TokenService.hasAuthToken()
                    ? this.renderUserNav()
                    : this.renderStartingNav()}
                    
            </nav>
        );
    }
}