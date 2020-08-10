import React, { Component } from 'react';
import moodGardenContext from '../../moodGardenContext';
import MainNav from '../MainNav/MainNav';
import RoseInfo from '../RoseInfo/RoseInfo';
import './ViewGarden.css';

export default class ViewGarden extends Component {
    static contextType = moodGardenContext;

    render() {
        const {roses=[]} = this.context;

        return (
            <section className="ViewGarden">
                
                <nav role="navigation" className="Garden_Nav">
                    <MainNav/>
                </nav>

                <h1 id="garden-header">Your Mood Garden</h1>

                <p id="welcome">Welcome back! Review your previous entries below, or use the link above to plant a new rose.</p>

                <ul>
                    {/* map through context and display mini info about every journal post from user. */}
                    {roses.map(rose => 
                        <li key={rose.id}> 
                            <RoseInfo
                                id={rose.id}
                                color={rose.color}
                                entry_date={rose.entry_date}
                            />
                        </li>
                    )}
                </ul>

            </section>
        );
    }
}


