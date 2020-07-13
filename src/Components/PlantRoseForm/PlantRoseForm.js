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
            rose: '',
            bud: '',
            thorn: '',
            color: '',
            validRose: false,
            validThorn: false,
            validBud: false,
            validColor: false,
            validPlant: false,
            errorType: {},
        };
    }

    validateEntry() {
        const {validRose, validThorn, validBud, validColor} = this.state;

        this.setState({
            validPlant: validRose && validThorn && validBud && validColor
        });
    }

    writeRose(rose) {
        this.setState({
            rose: rose,
        },
            this.validateRoseInput
        );
    }

    writeThorn(thorn) {
        this.setState({
            thorn: thorn,
        },
            this.validateThornInput
        );
    }

    writeBud(bud) {
        this.setState({
            bud: bud,
        },
            this.validateBudInput
        );
    }

    pickColor(color) {
        this.setState({
            color: color,
        },
            this.validateColorPick
        );
    }

    validateRoseInput() {
        const {rose} = this.state;
        let validRose = true;
        let errorType = {...this.state.errorType};

        if (rose.length === 0) {
            validRose = false;
            errorType.rose = "Please enter in some text to repsond to the prompt."
        }

        this.setState({
            validRose,
            errorType
        },
            this.validateEntry
        )
    }

    validateThornInput() {
        const {thorn} = this.state;
        let validThorn = true;
        let errorType = {...this.state.errorType};

        if (thorn.length === 0) {
            validThorn = false;
            errorType.thorn = "Please enter in some text to repsond to the prompt."
        }

        this.setState({
            validThorn,
            errorType,
        },
            this.validateEntry
        );
    }

    validateBudInput() {
        const {bud} = this.state;
        let validBud = true;
        let errorType = {...this.state.errorType};

        if (bud.length === 0) {
            validBud = false;
            errorType.bud = "Please enter in some text to repsond to the prompt."
        }

        this.setState({
            validBud,
            errorType
        },
            this.validateEntry
        )
    }

    validateColorPick() {
        const {color} = this.state;
        let validColor = true;
        let errorType = {...this.state.errorType};

        if (color === "") {
            validColor = false;
            errorType.color = "Please select a color."
        }

        this.setState({
            validColor,
            errorType
        },
            this.validateEntry
        )
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
                                onChange={e => this.writeRose(e.target.value)} 
                                value={this.state.rose}
                                name="rose-text" 
                                id="rose-entry-input" rows="15" 
                                placeholder="Write your thoughts here"/>
                            
                            <ErrorValidation 
                                valid={this.state.validRose}
                                message={this.state.errorType.rose}/>

                        </label>

                    </div>

                    <div className="Thorn_Entry">
                        
                        <h2>Thorn</h2>

                        <label htmlFor="thorn-entry-input">

                            <p id="thorn-prompt">What didn't go as planned? What stressed you out or made you feel upset?</p>

                            <textarea 
                                onChange={e => this.writeThorn(e.target.value)} 
                                value={this.state.thorn}
                                name="thorn-text" 
                                id="thorn-entry-input" 
                                rows="15" 
                                placeholder="Write your thoughts here"/>

                            <ErrorValidation 
                                valid={this.state.validThorn}
                                message={this.state.errorType.thorn}/>

                        </label>

                    </div>

                    <div className="Bud_Entry">

                        <h2>Bud</h2>

                        <label htmlFor="bud-text">

                            <p id="bud-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                        
                            <textarea 
                                onChange={e => this.writeBud(e.target.value)} 
                                value={this.state.bud}
                                name="bud-text" 
                                id="bud-entry-input" 
                                rows="15" 
                                placeholder="Write your thoughts here"/>

                            <ErrorValidation 
                                valid={this.state.validBud}
                                message={this.state.errorType.bud}/>

                        </label>

                    </div>

                    <div className="Rose_Color">
                        
                        <h2>Rose Color</h2>
                        
                        <label htmlFor="colors">

                            <p id="color-prompt">Lastly, pick a rose color based on your current mood.</p>

                            <select 
                                onChange={e => this.pickColor(e.target.value)} 
                                value={this.state.color}
                                name="rose-colors" 
                                id="colors">

                                <option value=""></option>
                                <option value="Red">Red (Neutral)</option>
                                <option value="Yellow">Yellow (Happy)</option>
                                <option value="White">White (Thoughtful)</option> 
                                <option value="Pink">Pink (Grateful)</option>
                                <option value="Purple">Purple (Angry)</option>
                                <option value="Black">Black (Sad)</option>
                            
                            </select> 

                            <ErrorValidation 
                                valid={this.state.validColor}
                                message={this.state.errorType.color}/>

                        </label>

                    </div> 
                    
                <button type="submit" id="submit-rose">Plant Rose</button>
                <button type="reset" id="start-over">Start Over</button>

                </form>

            </section>
        );
    }
}