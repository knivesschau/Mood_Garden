import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RoseColor from '../RoseColor/RoseColor';
import moodGardenContext from '../../moodGardenContext';
import './RoseInfo.css';

export default class RoseInfo extends Component {
    static contextType = moodGardenContext;

    render() {
        const {id, color, entry_date} = this.props;

        return (
            <section className="ViewRose">
            
                <div className="Collapsed_Roses">
            
                    <Link id="Rose_MiniInfo" to={`/roses/${id}`}>
                        
                        <div className="Rose_Image_Garden">
                            <RoseColor color={color}/>
                        </div>
                        {/* Display short-hand information about Rose via context access. */}
                        <h2 id="rose-info">{color} Rose Planted on {new Date(entry_date).toLocaleDateString()}</h2>
                    
                    </Link>

                </div>         

            </section>
        );
    }
}