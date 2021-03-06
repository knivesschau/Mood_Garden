import React, { Component } from 'react';
import TokenService from '../../services/token-services';
import EditRoseForm from '../EditRoseForm/EditRoseForm';
import RoseNav from '../RoseNav/RoseNav';
import config from '../../config';
import moodGardenContext from '../../moodGardenContext';
import './EditRose.css';

export default class EditRose extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    };
    
    static contextType = moodGardenContext;

    // handle PATCH updates to all journal entries. //
    handleUpdateRose = e => {
        e.preventDefault();
        
        const {id} = this.props.match.params;
        const roseId = parseInt(id); 

        const updatedRose = {
            rose: e.target['rose-edit'].value,
            thorn: e.target['thorn-edit'].value,
            bud: e.target['bud-edit'].value,
        };

        fetch(`${config.API_ENDPOINT}/roses/${roseId}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedRose),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e));
            }
        })
        .then(() => {
            this.context.updateRose(updatedRose);
            window.location=`/roses/${roseId}`;
        })
        .catch(error => {console.error({error})});
    }

    render() {
        const {roses=[]} = this.context; 
        const {id} = this.props.match.params;
        const roseEntry = roses.find(rose => rose.id === parseInt(id)) || {}; // find entry that needs updating within context by id. //

        return (
            <section className="EditRose">
                <div className="Rose__Editor">

                    <RoseNav/>
                    
                    <form className="Edit_Rose" onSubmit={this.handleUpdateRose}>
                    
                    {/* Pass in props to the EditRoseForm component via context access.*/}
                    <EditRoseForm
                        id={roseEntry.id}
                        rose={roseEntry.rose}
                        thorn={roseEntry.thorn}
                        bud={roseEntry.bud}
                        color={roseEntry.color}
                        entry_date={roseEntry.entry_date}
                    />
                    
                    </form>

                </div>
            
            </section>
        );
    }
}