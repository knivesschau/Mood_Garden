import React, { Component } from 'react';
import moodGardenContext from '../../moodGardenContext';
import RoseColor from '../RoseColor/RoseColor';
import RoseNav from '../RoseNav/RoseNav';
import Rose from '../Rose/Rose';
import './RoseMain.css';

export default class RoseMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    };

    static contextType = moodGardenContext;

    // re-route to garden view after rose is deleted from journal entries. //
    handleDeleteRose = id => {
        this.props.history.push(`/your-garden`);
    }

    render() {
        const {roses=[]} = this.context; 
        const {id} = this.props.match.params;
        const roseEntry = roses.find(rose => rose.id === parseInt(id)) || {}; // find entry that needs updating within context by id. //
        
        return (
            <section className="Rose_Expanded">
                
                <RoseNav/>

                <div className="Rose_Image_Entry">
                    <RoseColor color={roseEntry.color}/>
                </div>

                {/* Pass in props to the Rose component via context access. */}
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
        );
    }
}