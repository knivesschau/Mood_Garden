import React, {Component} from 'react';
import moodGardenContext from '../../moodGardenContext';
import roseImg from '../../images/rose-image.png';
import './RoseColor.css';

export default class RoseColor extends Component {
    static contextType = moodGardenContext;

    pickColor(color) {
        switch(color) {
            case "Red": 
                return "hue-rotate(0deg)";
            
            case "Yellow": 
                return "hue-rotate(75deg) saturate(2.50)";
            
            case "White": 
                return "grayscale(100%) brightness(210%)";

            case "Pink": 
                return "hue-rotate(335deg)";

            case "Purple":
                return "hue-rotate(275deg)";

            case "Black":
                return "hue-rotate(0deg) saturate(0%)";
        }
        return "hue-rotate(0deg)"; //default case
    }

    render() {
        const {color} = this.props;

        return (
            <>
                <img 
                    alt="rose-color" 
                    id={color}
                    src={roseImg}
                    style={{width: "20%", filter: this.pickColor(color)}}
                />
            </>
        );
    }
}