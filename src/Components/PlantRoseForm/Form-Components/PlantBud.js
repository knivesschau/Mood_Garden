import React from 'react';

export default function PlantBud(props) {
    if (this.props.currentStep !== 3) {
        return null
    }
    
    return (
        <>
        <div className="Bud_Entry">
            <h2>Bud</h2>

            <p id="bud-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
        
            <textarea name="bud-text" id="bud-entry-input" rows="15" placeholder="Write your thoughts here" value={props.bud} onChange={this.props.handleChange}/>
        </div>
        </>
    )
}
