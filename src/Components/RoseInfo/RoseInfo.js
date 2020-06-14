import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Rose from '../Rose/Rose';
import moodGardenContext from '../../moodGardenContext';
import './RoseInfo.css';

export default class RoseInfo extends Component {

    static contextType = moodGardenContext;

    render() {
        const {id, rose, thorn, bud, color, entry_date} = this.props;

        return (
            <section className="ViewRose">
            
            <div className="Collapsed_Roses">
                <Link to={`/roses/${id}`}>
                    <h2>{color} Rose Planted on {new Date(entry_date).toLocaleDateString()}</h2>
                </Link>

                {/* <h3>Rose</h3>
                <p>{rose}</p>

                <h3>Thorn</h3>
                <p>{thorn}</p>

                <h3>Bud</h3>
                <p>{bud}</p> */}

            </div>         

        </section>
        );
    }
}