import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TokenService from '../../services/token-services';
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
    };

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
    };

    // validate the entire form for accuracy. //
    validateEntry() {
        const {validRose, validThorn, validBud, validColor} = this.state;

        this.setState({
            validPlant: validRose && validThorn && validBud && validColor
        });
    }


    // capture each time "rose" section gets updated and pass through validator. //
    writeRose(rose) {
        this.setState({
            rose: rose,
        },
            this.validateRoseInput
        );
    }

    // capture each time the "thorn" section gets updated and pass through validator. //
    writeThorn(thorn) {
        this.setState({
            thorn: thorn,
        },
            this.validateThornInput
        );
    }

    // capture each time the "bud" section gets updated and pass through validator. //
    writeBud(bud) {
        this.setState({
            bud: bud,
        },
            this.validateBudInput
        );
    }

    // capture each time the "color" section gets updated and pass through validator. //
    pickColor(color) {
        this.setState({
            color: color,
        },
            this.validateColorPick
        );
    }

    // validate "rose" section of form. //
    validateRoseInput() {
        const {rose} = this.state;
        let validRose = true;
        let errorType = {...this.state.errorType};

        if (rose.length === 0) {
            validRose = false;
            errorType.rose = "Please enter in some text to repsond to the prompt.";
        }

        this.setState({
            validRose,
            errorType
        },
            this.validateEntry
        );
    }

    // validate "thorn" section of form. //
    validateThornInput() {
        const {thorn} = this.state;
        let validThorn = true;
        let errorType = {...this.state.errorType};

        if (thorn.length === 0) {
            validThorn = false;
            errorType.thorn = "Please enter in some text to repsond to the prompt.";
        }

        this.setState({
            validThorn,
            errorType,
        },
            this.validateEntry
        );
    }

    // validate "bud" section of form. //
    validateBudInput() {
        const {bud} = this.state;
        let validBud = true;
        let errorType = {...this.state.errorType};

        if (bud.length === 0) {
            validBud = false;
            errorType.bud = "Please enter in some text to repsond to the prompt.";
        }

        this.setState({
            validBud,
            errorType
        },
            this.validateEntry
        );
    }

    // validate "color" section of form. //
    validateColorPick() {
        const {color} = this.state;
        let validColor = true;
        let errorType = {...this.state.errorType};

        if (color === "") {
            validColor = false;
            errorType.color = "Please select a color.";
        }

        this.setState({
            validColor,
            errorType
        },
            this.validateEntry
        );
    }

    handleCancelClick = () => {
        window.location=`/your-garden`; 
    }

    static contextType = moodGardenContext;

    // handle POST submissions for all journal entries. //
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
                return res.json().then(e => Promise.reject(e));
            }
            return res.json();
        })
        .then(rose => {
            this.context.addRose(rose);
            this.props.history.push(`/roses/${rose.id}`);
        })
        .catch(error => {
            console.error({error});
        });
    }
    
    render() {
        return (
            <section className="PlantRose">
                
                <RoseNav/>

                <h1 id="plant-title">Plant a Rose</h1>

                <form className="PlantRoseForm" onSubmit={this.handleSubmit}>

                    <div className="Date_Entry">
                        
                        <label htmlFor="date"> 
                            
                            <FontAwesomeIcon icon="seedling" color="green" size="3x"/>
                            
                            <h2 id="date-entry-header">Date Planted</h2>

                            <input type="date" required name="date" id="entry-date"/>

                        </label>

                    </div>

                    <div className="Rose_Entry">

                        <FontAwesomeIcon icon="grin-beam" id="rose-icon" color="#FFFAEA" size="3x"/> 
                        
                        <h2 id="plant-header-rose">Rose</h2>

                        <label htmlFor="rose-entry-input">
                            
                            <p id="rose-prompt">What brought you happiness today? Did you make progress on any ideas or goals?</p>
                            
                            <textarea 
                                onChange={e => this.writeRose(e.target.value)} 
                                value={this.state.rose}
                                name="rose-text" 
                                required
                                id="rose-entry-input" rows="15" 
                                placeholder="Write your thoughts here"/>
                            
                            <ErrorValidation 
                                valid={this.state.validRose}
                                message={this.state.errorType.rose}/>

                        </label>

                    </div>

                    <div className="Thorn_Entry">

                        <FontAwesomeIcon icon="frown" id="thorn-icon" color="#A272AA" size="3x"/>
                        
                        <h2 id="plant-header-thorn">Thorn</h2>

                        <label htmlFor="thorn-entry-input">

                            <p id="thorn-prompt">Was there anything that upset or frustrated you today? What were the sources of those feelings?</p>

                            <textarea 
                                onChange={e => this.writeThorn(e.target.value)} 
                                value={this.state.thorn}
                                name="thorn-text" 
                                required
                                id="thorn-entry-input" 
                                rows="15" 
                                placeholder="Write your thoughts here"/>

                            <ErrorValidation 
                                valid={this.state.validThorn}
                                message={this.state.errorType.thorn}/>

                        </label>

                    </div>

                    <div className="Bud_Entry">

                        <FontAwesomeIcon icon="grin-alt" id="bud-icon" color="#8B5151" size="3x"/>

                        <h2 id="plant-header-bud">Bud</h2>

                        <label htmlFor="bud-text">

                            <p id="bud-prompt">What is something you are looking forward to? What would you like to spend more time focusing on?</p>
                        
                            <textarea 
                                onChange={e => this.writeBud(e.target.value)} 
                                value={this.state.bud}
                                name="bud-text" 
                                required
                                id="bud-entry-input" 
                                rows="15" 
                                placeholder="Write your thoughts here"/>

                            <ErrorValidation 
                                valid={this.state.validBud}
                                message={this.state.errorType.bud}/>

                        </label>

                    </div>

                    <div className="Rose_Color">

                        <FontAwesomeIcon icon="spa" id="color-icon" color="#B00000" size="3x"/>
                        
                        <h2 id="plant-color-header">Rose Color</h2>
                        
                        <label htmlFor="colors">

                            <p id="color-prompt">Lastly, pick a rose color based on your current mood.</p>

                            <select 
                                onChange={e => this.pickColor(e.target.value)} 
                                value={this.state.color}
                                name="rose-colors"
                                required 
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

                        <button type="submit" id="submit-rose">Plant Rose</button>
                        <button type="button" id="cancel-plant" onClick={this.handleCancelClick}>Cancel</button>
                    
                    </div> 

                </form>

            </section>
        );
    }
}