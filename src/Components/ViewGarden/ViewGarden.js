import React, {Component} from 'react';
import ViewRose from '../ViewRose/ViewRose';
import './ViewGarden.css';

export default class ViewGarden extends Component {
    static defaultProps = {
        entries: {
            date: "2020-04-10",
            rose: "I got to video chat with my family and eat dinner together virtually. We made eggplant parmesean together!",
            bud: "I'm looking forward to seeing my family again once shelter-in-place is over.",
            thorn: "Even though I saw my family via video chat, I realized how much I missed them today and it mad me sad that I haven't been able to see them for a long time.",
            color: "Yellow",
        }
    }

    render() {
        const {entries} = this.props; 

        return (
            <section className="ViewGarden">

                <ViewRose journal={entries}/>

            </section>
        )
    }
}


