import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import config from '../../config';
import moodGardenContext from '../../moodGardenContext';
import './Rose.css';

export default class Rose extends Component {
    static defaultProps = {
        onDeleteRose: () => {}
    }

    static contextType = moodGardenContext;

    handleDelete = e => {
        e.preventDefault();
        const id = this.props.id;

        fetch(`${config.API_ENDPOINT}/roses/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return null;
        })
        .then(() => {
            this.context.deleteRose(id);
            this.props.onDeleteRose(id);
        })
        .catch(error => {
            console.error({error})
        });
    }

    render() {
        const {id, rose, thorn, bud, color, entry_date} = this.props;

        return (
            <section className="Rose">

                <div className="View_Rose">

                    <h2>{color} Rose Planted on {new Date(entry_date).toLocaleDateString()}</h2>

                    <h3>Rose</h3>
                    <p>{rose}</p>

                    <h3>Thorn</h3>
                    <p>{thorn}</p>

                    <h3>Bud</h3>
                    <p>{bud}</p>

                    <Link to={`/edit-rose/${id}`}>
                        <button type="submit" id="edit">
                            Edit Rose
                        </button>
                    </Link>

                    <button type="button" id="delete" onClick={this.handleDelete}>Delete Rose</button>

                </div>

            </section>
        );
    }
}
