import React, {Component} from 'react';
import moodGardenContext from '../../moodGardenContext';
import Rose from '../Rose/Rose';
import {findRose} from '../../garden-helpers';
import './ViewGarden.css';

export default class ViewGarden extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = moodGardenContext;

    render() {
        const {roses=[]} = this.context;
        const {id} = this.props.match.params; 
        const getRoseEntries = findRose(roses, id);

        return (
            <section className="ViewGarden">
                
                <h1 id="garden-header">Your Mood Garden</h1>

                <ul>
                    {getRoseEntries.map(rose => 
                        <li key={rose.id}> 
                            <Rose
                                id={rose.id}
                                color={rose.color}
                                entry_date={rose.entry_date}
                                rose={rose.rose}
                                thorn={rose.thorn}
                                bud={rose.bud}/> 
                        </li>      
                    )}
                </ul>

            </section>
        )
    }
}


