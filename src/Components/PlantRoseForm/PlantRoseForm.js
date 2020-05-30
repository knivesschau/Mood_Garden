import React, {Component} from 'react';
import LandingNav from '../LandingNav/LandingNav'
import './PlantRoseForm.css';

export default class PlantRoseForm extends Component {
    render() {
        return (
            <section className="PlantRose">

                <h1>Plant a Rose</h1>

                <form className="PlantRoseForm">

                    <div className="Date_Entry">
                        <p id="date-entry">Date Planted:</p>

                        <input type="number" placeholder="01" min="01" max="12" required="" name="month" id="month"/>
                        <input type="number" placeholder="05" min="01" max="31" required="" name="day" id="day"/>
                        <input type="number" placeholder="2019" min="2019" max="2030" required="" name="year" id="year"/>

                    </div>

                    <div className="Rose_Entry">
                        <h2>Rose</h2>

                        <p id="rose-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                        
                        <textarea name="rose-text" rows="15" placeholder="Write your thoughts here"/>
                    </div>

                    <div className="Thorn_Entry">
                        <h2>Thorn</h2>

                        <p id="thorn-prompt">What didn't go as planned? What stressed you out or made you feel upset?</p>

                        <textarea name="thorn-text" rows="15" placeholder="Write your thoughts here"/>
                    </div>

                    <div className="Bud_Entry">
                        <h2>Bud</h2>

                        <p id="bud-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                    
                        <textarea name="bud-text" rows="15" placeholder="Write your thoughts here"/>
                    </div>

                    <div className="Rose_Color">
                        <h2>Rose Color</h2>

                        <p id="color-prompt">Lastly, pick a rose color based on your current mood.</p>

                        <select name="rose-colors" id="colors">
                            <option value="red">Red (Neutral)</option>
                            <option value="yellow">Yellow (Happy)</option>
                            <option value="white">White (Thoughtful)</option> 
                            <option value="pink">Pink (Grateful)</option>
                            <option value="purple">Purple (Angry)</option>
                            <option value="black">Black (Sad)</option>
                        </select> 

                    </div>
                    
                <button type="submit" id="submit-rose">Plant Rose</button>
                <button type="reset" id="start-over">Start Over</button>
                
                </form>

            </section>
        );
    }
}