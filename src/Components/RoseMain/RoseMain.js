import React, {Component} from 'react';
import moodGardenContext from '../../moodGardenContext';
import {findRose} from '../../garden-helpers';
import Rose from '../Rose/Rose';
import './RoseMain.css';

export default class RoseMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = moodGardenContext;

    render() {
        const {roses=[]} = this.context; 
        const {id} = this.props.match.params;
        // const roseEntry = findRose(roses, id) using helper function results in undefined data? 
        
        return (
            <section className="View_Rose">
                {roses.find(rose => 
                    <Rose 
                        id={rose.id}
                        rose={rose.rose}
                        thorn={rose.thorn}
                        bud={rose.bud}
                        color={rose.color}
                        entry_date={rose.entry_date}
                    />
                )}
            </section>
        )
    }
}