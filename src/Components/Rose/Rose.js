import React, {Component} from 'react';
import moodGardenContext from '../../moodGardenContext';
import {Link} from 'react-router-dom';
import './Rose.css';

export default class Rose extends Component {
    
    static contextType = moodGardenContext;

    render() {
        const {id, rose, thorn, bud, color, entry_date} = this.props;

        return (
            <section className="Rose">

                <div className="View_Rose">
                    <Link to={`/roses/${id}`}>
                    <h2>{color} Rose Planted on {entry_date}</h2>
                    </Link>

                    <h3>Rose</h3>
                    <p>{rose}</p>

                    <h3>Thorn</h3>
                    <p>{thorn}</p>

                    <h3>Bud</h3>
                    <p>{bud}</p>

                    <button type="submit" id="edit">Edit</button>
                    <button type="submit" id="delete">Delete</button>

                </div>

            </section>
        );
    }
}
