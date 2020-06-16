import React, {Component} from 'react';

export default class EditRoseForm extends Component {
    render() {
        const {rose, thorn, bud, color, entry_date} = this.props;

        return (
            <>
            <h1>Editing {color} Rose Planted on {new Date(entry_date).toLocaleDateString()}</h1>

            <div className="Rose_Editor">
                <h2>Rose</h2>

                <p id="rose-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
                
                <textarea name="rose-text" id="rose-entry-input" rows="15" placeholder={rose}/>
                
                </div>

            <div className="Thorn_Editor">
                <h2>Thorn</h2>

                <p id="thorn-prompt">What didn't go as planned? What stressed you out or made you feel upset?</p>

                <textarea name="thorn-text" id="thorn-entry-input" rows="15" placeholder={thorn}/>
            </div>

            <div className="Bud_Editor">
                <h2>Bud</h2>

                <p id="bud-prompt">What is something you are looking forward to? Are there any new ideas that you would like to see grow?</p>
            
                <textarea name="bud-text" id="bud-entry-input" rows="15" placeholder={bud}/>
            </div>
            </>
        );
    }
}