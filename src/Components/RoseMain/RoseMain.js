import React, {Component} from 'react';
import moodGardenContext from '../../moodGardenContext';
import RoseNav from '../RoseNav/RoseNav';
import Rose from '../Rose/Rose';
import './RoseMain.css';

export default class RoseMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = moodGardenContext;

    handleDeleteRose = id => {
        this.props.history.push(`/your-garden`)
    }

    render() {
        const {roses=[]} = this.context; 
        const {id} = this.props.match.params;
        const roseEntry = roses.find(rose => rose.id === parseInt(id)) || {};

        console.log(roseEntry);
        
        return (
            <section className="View_Rose">
                <nav role="navigation" className="Rose_Nav">
                    <RoseNav/>
                </nav>
                
                    <Rose 
                        id={roseEntry.id}
                        rose={roseEntry.rose}
                        thorn={roseEntry.thorn}
                        bud={roseEntry.bud}
                        color={roseEntry.color}
                        entry_date={roseEntry.entry_date}
                        onDeleteRose={this.handleDeleteRose}
                    />
            </section>
        )
    }
}