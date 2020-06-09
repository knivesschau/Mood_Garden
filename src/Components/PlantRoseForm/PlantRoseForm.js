import React, {Component} from 'react';
import moodGardenContext from '../../moodGardenContext';
import config from '../../config';
import './PlantRoseForm.css';

export default class PlantRoseForm extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
    }

    static contextType = moodGardenContext;
    
    handleSubmit = e => {
        e.preventDefault();

        const newEntry = {
            entry_date: new Date(),
            rose: e.target['rose-text'].value,
            thorn: e.target['thorn-text'].value,
            bud: e.target['bud-text'].value,
            color: e.target['rose-colors'].value,
        };

        fetch(`${config.API_ENDPOINT}/roses`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEntry)
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json();
        })
        .then(rose => {
            this.context.addEntry(rose);
            this.props.history.push(`/roses/${rose.id}`)
        })
        .catch(error => {
            console.error({error})
        });
    }
    
    render() {

        return (
            <section className="PlantRose">

                <h1>Plant a Rose</h1>

                <form className="PlantRoseForm" onSubmit={this.handleSubmit}>

                    <div className="Date_Entry">
                        <p id="date-entry">Date Planted:</p>

                        <input type="number" placeholder="01" min="01" max="12" required="" name="month" id="month"/>
                        <input type="number" placeholder="05" min="01" max="31" required="" name="day" id="day"/>
                        <input type="number" placeholder="2019" min="2019" max="2030" required="" name="year" id="year"/>

                    </div>

                    <div className="Rose_Entry">
                        <h2>Rose</h2>

                        <p id="rose-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                        
                        <textarea name="rose-text" id="rose-entry-input" rows="15" placeholder="Write your thoughts here"/>
                    </div>

                    <div className="Thorn_Entry">
                        <h2>Thorn</h2>

                        <p id="thorn-prompt">What didn't go as planned? What stressed you out or made you feel upset?</p>

                        <textarea name="thorn-text" id="thorn-entry-input" rows="15" placeholder="Write your thoughts here"/>
                    </div>

                    <div className="Bud_Entry">
                        <h2>Bud</h2>

                        <p id="bud-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                    
                        <textarea name="bud-text" id="bud-entry-input" rows="15" placeholder="Write your thoughts here"/>
                    </div>

                    <div className="Rose_Color">
                        <h2>Rose Color</h2>

                        <p id="color-prompt">Lastly, pick a rose color based on your current mood.</p>

                        <select name="rose-colors" id="colors">
                            <option value="Red">Red (Neutral)</option>
                            <option value="Yellow">Yellow (Happy)</option>
                            <option value="White">White (Thoughtful)</option> 
                            <option value="Pink">Pink (Grateful)</option>
                            <option value="Purple">Purple (Angry)</option>
                            <option value="Black">Black (Sad)</option>
                        </select> 

                    </div>
                    
                <button type="submit" id="submit-rose">Plant Rose</button>
                <button type="reset" id="start-over">Start Over</button>
                
                </form>

            </section>
        );
    }
}