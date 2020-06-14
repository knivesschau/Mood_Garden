import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moodGardenContext from '../../moodGardenContext';
import './RoseInfo.css';

export default class RoseInfo extends Component {

    static contextType = moodGardenContext;

    render() {
        const {id, color, entry_date} = this.props;

        return (
            <section className="ViewRose">
            
            <div className="Collapsed_Roses">
                <Link to={`/roses/${id}`}>
                    <h2>{color} Rose Planted on {new Date(entry_date).toLocaleDateString()}</h2>
                </Link>
            </div>         

        </section>
        );
    }
}