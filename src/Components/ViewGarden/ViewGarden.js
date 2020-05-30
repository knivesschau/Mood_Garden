import React, {Component} from 'react';
import ViewRose from '../ViewRose/ViewRose';
import LandingNav from '../LandingNav/LandingNav';
import journalEntries from '../../dummy-store';
import './ViewGarden.css';

export default class ViewGarden extends Component {
    render() {

        return (
            <section className="ViewGarden">
                <LandingNav/>
                
                <h1>Your Mood Garden</h1>

                <ViewRose entries={journalEntries.journalEntries}/>
            
            </section>
        )
    }
}


