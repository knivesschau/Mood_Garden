import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import './EditRoseForm.css';

export default class EditRoseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rose: '',
            thorn: '',
            bud: '',
            roseEdit: false,
            thornEdit: false,
            budEdit: false,
            validEdit: false,
            errorType: {}
        };
    }

    validateEditForm() {
        const {roseEdit, thornEdit, budEdit} = this.state;
        
        this.setState({
            validEdit: roseEdit && thornEdit && budEdit
        });
    }

    editRose(rose) {
        this.setState({
            rose: rose
        },
            this.validateRose
        );
    }

    editThorn(thorn) {
        this.setState({
            thorn: thorn
        },
            this.validateThorn
        );
    }

    editBud(bud) {
        this.setState({
            bud: bud
        },
            this.validateBud
        );
    }

    validateRose() {
        const {rose} = this.state;
        let roseEdit = true;
        let errorType = {...this.state.errorType};

        if (rose.length === 0) {
            roseEdit = false;
            errorType.rose = "Please edit your original entry, or type in another response."
        }

        this.setState({
            roseEdit, 
            errorType
        },
            this.validateEditForm
        )
    }

    validateThorn() {
        const {thorn} = this.state;
        let thornEdit = true;
        let errorType = {...this.state.errorType};

        if (thorn.length === 0) {
            thornEdit = false;
            errorType.thorn = "Please edit your original entry, or type in another response."
        }

        this.setState({
            thornEdit,
            errorType
        }, 
            this.validateEditForm
        )
    }

    validateBud() {
        const {bud} = this.state;
        let budEdit = true;
        let errorType = {...this.state.errorType}

        if (bud.length === 0) {
            budEdit = false;
            errorType.bud = "Please edit your original entry, or type in another response."
        }

        this.setState({
            budEdit,
            errorType
        },
            this.validateEditForm
        )
    }

    handleCancelClick = () => {
        window.location=`/your-garden`
    };

    render() {
        const {rose, thorn, bud, color, entry_date} = this.props;

        return (
            <>
            <h1 id="edit-header">Editing {color} Rose Planted on {new Date(entry_date).toLocaleDateString()}</h1>

            <div className="Rose_Editor">
               
               <FontAwesomeIcon icon="grin-beam" id="rose-icon" color="#FFFAEA" size="3x"/> 

               <h2 id="rose-edit-header">Rose</h2>

                <label htmlFor="rose-entry-input">

                    <p id="rose-prompt">What brought you happiness today? Did you make progress on any ideas or goals?</p>
                    
                    <textarea 
                        onChange={e => this.editRose(e.target.value)}
                        name="rose-edit" 
                        id="rose-entry-input" 
                        rows="15" 
                        defaultValue={rose}/>

                    <ErrorValidation 
                        value={this.state.validRose}
                        message={this.state.errorType.rose}/>
                
                </label>

            </div>

            <div className="Thorn_Editor">

                <FontAwesomeIcon icon="frown" id="thorn-icon" color="#A272AA" size="3x"/>
                
                <h2 id="thorn-edit-header">Thorn</h2>

                <label htmlFor="thorn-entry-input">

                    <p id="thorn-prompt">Was there anything that upset or frustrated you today? What were the sources of those feelings?</p>

                    <textarea 
                        onChange={e => this.editThorn(e.target.value)}
                        name="thorn-edit" 
                        id="thorn-entry-input" 
                        rows="15" 
                        defaultValue={thorn}/>
                    
                    <ErrorValidation 
                        value={this.state.validThorn}
                        message={this.state.errorType.thorn}/>

                </label>

            </div>

            <div className="Bud_Editor">

                <FontAwesomeIcon icon="grin-alt" id="bud-icon" color="#8B5151" size="3x"/>
                
                <h2 id="bud-edit-header">Bud</h2>

                <label htmlFor="bud-entry-input">

                    <p id="bud-prompt">What is something you are looking forward to? What would you like to spend more time focusing on?</p>
                
                    <textarea 
                        onChange={e => this.editBud(e.target.value)}
                        name="bud-edit" 
                        id="bud-entry-input" 
                        rows="15" 
                        defaultValue={bud}/>
                    
                    <ErrorValidation 
                        valid={this.state.validBud}
                        message={this.state.errorType.bud}/>

                </label>

                <button type="submit" id="update-garden">Update Rose</button>
                <button type="button" id="cancel-update" onClick={this.handleCancelClick}>Cancel</button>

            </div>
            </>
        );
    }
}