import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './RoseNav.css';

export default class RoseNav extends Component {
  render() {
    return (

      <nav className="Rose_Nav" role="navigation">

        <Link to="/your-garden">
          <FontAwesomeIcon icon="chevron-left"/>
          Back To Your Garden
        </Link>

      </nav>
      
    );
  }
}
