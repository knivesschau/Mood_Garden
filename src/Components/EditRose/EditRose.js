import React, {Component} from 'react';
import EditRoseForm from '../EditRoseForm/EditRoseForm';
import config from '../../config';
import moodGardenContext from '../../moodGardenContext';
import './EditRose.css';

export default class EditRose extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    static contextType = moodGardenContext;

    handleUpdateRose = e => {
        e.preventDefault();
        
        const {id} = this.props.match.params;

        const updatedRose = {
            rose: e.target['rose-edit'].value,
            thorn: e.target['thorn-edit'].value,
            bud: e.target['bud-edit'].value,
        }

        fetch(`${config.API_ENDPOINT}/roses/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedRose),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
        })
        .then(() => {
            this.context.updateRose(updatedRose);
            this.props.history.push(`/your-garden`)
        })
        .catch(error => {
            console.error({error})
        });
    }

    handleCancelClick = () => {
        this.props.history.push(`/your-garden`)
    };

    render() {
        const {roses=[]} = this.context; 
        const {id} = this.props.match.params;
        const roseEntry = roses.find(rose => rose.id === parseInt(id)) || {};

        return (
            <section className="EditRose">
                
                <div className="Rose__Editor">
                    
                    <form className="Edit_Rose" onSubmit={this.handleUpdateRose}>

                    <EditRoseForm
                        id={roseEntry.id}
                        rose={roseEntry.rose}
                        thorn={roseEntry.thorn}
                        bud={roseEntry.bud}
                        color={roseEntry.color}
                        entry_date={roseEntry.entry_date}
                    />

                    <button type="submit" id="update-garden">Update Rose</button>
                    <button type="button" id="cancel-update" onClick={this.handleCancelClick}>Cancel</button>
                    
                    </form>

                </div>
            
            </section>
        );
    }
}