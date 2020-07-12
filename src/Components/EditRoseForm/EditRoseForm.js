import React, {Component} from 'react';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';

export default class EditRoseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rose_edit: {
                value: '',
                touched: false
            },
            thorn_edit: {
                value: '',
                touched: false
            },
            bud_edit: {
                value: '',
                touched: false
            }
        };
    }

    editRose(rose_edit) {
        this.setState({
            rose_edit: {
                value: rose_edit,
                touched: true
            }
        });
    }

    editThorn(thorn_edit) {
        this.setState({
            thorn_edit: {
                value: thorn_edit,
                touched: true
            }
        });
    }

    editBud(bud_edit) {
        this.setState({
            bud_edit: {
                value: bud_edit,
                touched: true
            }
        })
    }

    validateRose() {
        const roseEdit = this.state.rose_edit.value.trim();

        if (roseEdit.length === 0) {
            return "Please edit your original entry, or type in another response."
        }
    }

    validateThorn() {
        const thornEdit = this.state.thorn_edit.value.trim();

        if (thornEdit.length === 0) {
            return "Please edit your original entry, or type in another response."
        }
    }

    validateBud() {
        const budEdit = this.state.bud_edit.value.trim();

        if (budEdit.length === 0) {
            return "Please edit your original entry, or type in another response."
        }
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

                    <ErrorValidation message={this.validateRose()}/>
                
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
                    
                    <ErrorValidation message={this.validateThorn()}/>

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
                    
                    <ErrorValidation message={this.validateBud()}/>

                </label>

            </div>
            </>
        );
    }
}