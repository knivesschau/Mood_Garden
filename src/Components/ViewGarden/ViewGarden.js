import React, {Component} from 'react';
import ViewRose from '../ViewRose/ViewRose';
import LandingNav from '../LandingNav/LandingNav';
import './ViewGarden.css';

export default class ViewGarden extends Component {
    static defaultProps = {
        entrySample: {
            date: "2020-04-10",
            rose: "I got to video chat with my family and eat dinner together virtually. We made eggplant parmesean together!",
            bud: "I'm looking forward to seeing my family again once shelter-in-place is over.",
            thorn: "Even though I saw my family via video chat, I realized how much I missed them today and it mad me sad that I haven't been able to see them for a long time.",
            color: "Yellow",
        },
    }

    render() {
        const {entrySample} = this.props; 

        return (
            <section className="ViewGarden">
                <LandingNav/>
                
                <h1>Your Mood Garden</h1>

                <ViewRose journal={entrySample}/>

                <div classname="Collapsed_Entries">
                    <h2 id="collapsed-entry-1">White Rose Planted on 2020-03-05</h2>
                    
                    <h2 id="collapsed-entry-2">Red Rose Planted on 2020-02-14</h2>
                </div>

            </section>
        )
    }
}


