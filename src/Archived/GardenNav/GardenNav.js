import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-services';
import './GardenNav.css'

export default class RoseNav extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        window.location='/';
    }
    
    render() {
        return (
            <div className="Garden_Nav">
                <Link to="/">
                    Landing Page
                </Link>
                ||
                <Link to="/plant-rose">
                    Plant A Rose
                </Link>
                ||
                <Link to="/" onClick={this.handleLogoutClick}>
                    Sign Out
                </Link>
            </div>
        )
    }
}