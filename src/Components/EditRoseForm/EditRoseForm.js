import React, {Component} from 'react';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';

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

    render() {
        const {rose, thorn, bud, color, entry_date} = this.props;

        return (
            <>
            <h1>Editing {color} Rose Planted on {new Date(entry_date).toLocaleDateString()}</h1>

            <div className="Rose_Editor">
               
               <h2>Rose</h2>

                <label htmlFor="rose-entry-input">

                    <p id="rose-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                    
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
                
                <h2>Thorn</h2>

                <label htmlFor="thorn-entry-input">

                    <p id="thorn-prompt">What didn't go as planned? What stressed you out or made you feel upset?</p>

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
                
                <h2>Bud</h2>

                <label htmlFor="bud-entry-input">

                    <p id="bud-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                
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

            </div>
            </>
        );
    }
}