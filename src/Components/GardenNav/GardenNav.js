import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './GardenNav.css'

export default class RoseNav extends Component {
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
                <Link to="/">
                    Sign Out
                </Link>
            </div>
        )
    }
}