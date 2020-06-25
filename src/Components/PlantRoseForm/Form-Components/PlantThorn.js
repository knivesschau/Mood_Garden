import React from 'react';

export default function PlantThorn(props) {
    if (this.props.currentStep !== 2) {
        return null
    }

    return (
        <>
        <div className="Thorn_Entry">
            <h2>Thorn</h2>

            <p id="thorn-prompt">What didn't go as planned? What stressed you out or made you feel upset?</p>

            <textarea name="thorn-text" id="thorn-entry-input" rows="15" placeholder="Write your thoughts here" value={props.thorn} onChange={this.props.handleChange}/>
        </div>
        </>
    )
}
