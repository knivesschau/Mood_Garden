import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-services';
import './RoseNav.css'

export default class RoseNav extends Component {
    render() {
        return (
            <div className="Rose_Nav">
                <Link to="/your-garden">
                    Back To Your Garden
                </Link>
            </div>
        )
    }
}