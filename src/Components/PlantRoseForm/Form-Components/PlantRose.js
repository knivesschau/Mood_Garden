import React from 'react';

export default function PlantRose(props) {
    if (this.props.currentStep !== 1) {
        return null
    }

    return (
        <>
        <div className="Date_Entry">
            <p id="date-entry">Date Planted:</p>

            <input type="number" placeholder="01" min="01" max="12" required="" name="month" id="month" value={props.entry_date} onChange={this.props.handleChange}/>
            <input type="number" placeholder="05" min="01" max="31" required="" name="day" id="day" value={props.entry_date} onChange={this.props.handleChange}/>
            <input type="number" placeholder="2019" min="2019" max="2030" required="" name="year" id="year" value={props.entry_date} onChange={this.props.handleChange}/>

        </div>

        <div className="Rose_Entry">
            <h2>Rose</h2>

            <p id="rose-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
            
            <textarea name="rose-text" id="rose-entry-input" rows="15" placeholder="Write your thoughts here" value={props.rose} onChange={this.props.handleChange}/>
        </div>
        </>
    )
}