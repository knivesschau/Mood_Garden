import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import './RoseNav.css'

export default class RoseNav extends Component {
    render() {
        return (
            <div className="Rose_Nav">
                <Link to="/your-garden">
                    <FontAwesomeIcon icon="chevron-left"/>
                    Back To Your Garden
                </Link>
            </div>
        )
    }
}