import React from 'react';

export default function PickColor(props) {
    if (this.props.currentStep !== 4) {
        return null
    }

    return (
        <>
        <div className="Rose_Color">
            <h2>Rose Color</h2>

            <p id="color-prompt">Lastly, pick a rose color based on your current mood.</p>

            <select name="rose-colors" id="colors" value={props.color} onChange={this.props.handleChange}>
                <option value="Red">Red (Neutral)</option>
                <option value="Yellow">Yellow (Happy)</option>
                <option value="White">White (Thoughtful)</option> 
                <option value="Pink">Pink (Grateful)</option>
                <option value="Purple">Purple (Angry)</option>
                <option value="Black">Black (Sad)</option>
            </select> 
        </div>
        </>
    )
}