import React, {Component} from 'react';
import TokenService from '../../services/token-services'
import moodGardenContext from '../../moodGardenContext';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import RoseNav from '../RoseNav/RoseNav';
import config from '../../config';
import './PlantRoseForm.css';

export default class PlantRoseForm extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
    }

    constructor(props) {
        super(props);

        this.state = {
            rose_text: {
                value: '',
                touched: false
            },
            thorn_text: {
                value: '',
                touched: false
            },
            bud_text: {
                value: '',
                touched: false
            },
            color: {
                value: '',
                touched: false
            }
        };
    }

    writeRose(rose_text) {
        this.setState({
            rose_text: {
                value: rose_text,
                touched: true
            }
        });
    }

    writeThorn(thorn_text) {
        this.setState({
            thorn_text: {
                value: thorn_text,
                touched: true
            }
        });
    }

    writeBud(bud_text) {
        this.setState({
            bud_text: {
                value: bud_text,
                touched: true
            }
        });
    }

    pickColor(color) {
        this.setState({
            color: {
                value: color,
                touched: true
            }
        });
    }

    validateRoseInput() {
        const roseInput = this.state.rose_text.value.trim();

        if (roseInput.length === 0) {
            return "Please enter in some text to repsond to the prompt."
        }
    }

    validateThornInput() {
        const thornInput = this.state.thorn_text.value.trim();

        if (thornInput.length === 0) {
            return "Please enter in some text to repsond to the prompt."
        }
    }

    validateBudInput() {
        const budInput = this.state.bud_text.value.trim();

        if (budInput.length === 0) {
            return "Please enter in some text to repsond to the prompt."
        }
    }

    validateColorPick() {
        const roseColor = this.state.color.value.trim();

        if (roseColor === "") {
            return "Please select a color."
        }
    }

    static contextType = moodGardenContext;

    handleSubmit = e => {
        e.preventDefault();

        let newEntry = {
            entry_date: new Date(),
            rose: e.target['rose-text'].value,
            thorn: e.target['thorn-text'].value,
            bud: e.target['bud-text'].value,
            color: e.target['rose-colors'].value,
        };

        fetch(`${config.API_ENDPOINT}/roses`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newEntry)
        })
        .then(res => {
            if (!res.ok) {
                console.log(newEntry)
                return res.json().then(e => Promise.reject(e))
            }
            return res.json();
        })
        .then(rose => {
            this.context.addRose(rose);
            this.props.history.push(`/roses/${rose.id}`)
        })
        .catch(error => {
            console.error({error})
        });
    }
    
    render() {
        return (
            <section className="PlantRose">
                <RoseNav/>

                <h1>Plant a Rose</h1>

                <form className="PlantRoseForm" onSubmit={this.handleSubmit}>

                    <div className="Date_Entry">
                        
                        <label htmlFor="date"> 

                            <p id="date-entry">Date Planted:</p>

                            <input type="date" required="" name="date" id="entry-date"/>

                        </label>

                    </div>

                    <div className="Rose_Entry">
                        
                        <h2>Rose</h2>

                        <label htmlFor="rose-entry-input">
                            
                            <p id="rose-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                            
                            <textarea 
                                name="rose-text" 
                                onChange={e => this.writeRose(e.target.value)} 
                                id="rose-entry-input" rows="15" 
                                placeholder="Write your thoughts here"/>
                            
                            <ErrorValidation message={this.validateRoseInput()}/>

                        </label>

                    </div>

                    <div className="Thorn_Entry">
                        
                        <h2>Thorn</h2>

                        <label htmlFor="thorn-entry-input">

                            <p id="thorn-prompt">What didn't go as planned? What stressed you out or made you feel upset?</p>

                            <textarea 
                                name="thorn-text" 
                                onChange={e => this.writeThorn(e.target.value)} 
                                id="thorn-entry-input" 
                                rows="15" 
                                placeholder="Write your thoughts here"/>

                            <ErrorValidation message={this.validateThornInput()}/>

                        </label>

                    </div>

                    <div className="Bud_Entry">

                        <h2>Bud</h2>

                        <label htmlFor="bud-text">

                            <p id="bud-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                        
                            <textarea 
                                name="bud-text" 
                                onChange={e => this.writeBud(e.target.value)} 
                                id="bud-entry-input" 
                                rows="15" 
                                placeholder="Write your thoughts here"/>

                            <ErrorValidation message={this.validateBudInput()}/>

                        </label>

                    </div>

                    <div className="Rose_Color">
                        
                        <h2>Rose Color</h2>
                        
                        <label htmlFor="colors">

                            <p id="color-prompt">Lastly, pick a rose color based on your current mood.</p>

                            <select name="rose-colors" onChange={e => this.pickColor(e.target.value)} id="colors">
                                <option value=""></option>
                                <option value="Red">Red (Neutral)</option>
                                <option value="Yellow">Yellow (Happy)</option>
                                <option value="White">White (Thoughtful)</option> 
                                <option value="Pink">Pink (Grateful)</option>
                                <option value="Purple">Purple (Angry)</option>
                                <option value="Black">Black (Sad)</option>
                            </select> 

                            <ErrorValidation message={this.validateColorPick()}/>

                        </label>

                    </div> 
                    
                <button type="submit" id="submit-rose">Plant Rose</button>
                <button type="reset" id="start-over">Start Over</button>

                </form>

            </section>
        );
    }
}