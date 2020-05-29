import React, {Component} from 'react';
import ViewRose from '../ViewRose/ViewRose';
import './ViewGarden.css';

export default class ViewGarden extends Component {
    static defaultProps = {
        entries: {
            journalEntries: [],
        }
    }

    render() {
        const {entries} = this.props; 

        return (
            <section className="ViewGarden">
                <ViewRose journal={entries}/>

            </section>
        )
    }
}


