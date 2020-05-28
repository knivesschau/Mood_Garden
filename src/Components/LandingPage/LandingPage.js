import React, {Component} from 'react';
import LandingNav from '../LandingNav/LandingNav';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
        
                <LandingNav/>
            
                <header role="banner">
                    <h1>Mood Garden</h1>
                    
                    <h2>Cultivate Your Mind</h2>
                </header>

                <div className="Description_Intro">
                    <h3>Cultivate your mindfulness, one day at a time.</h3>

                    <p>Mood Garden allows you to learn, grow, and reflect on your life by cultivating a rose garden that acts as your daily mood journal.</p>
                </div>

                <div className="Description_Functional">
                    <h3>Plant your roses</h3>

                    <p>Each day, you can plant roses into your mood journal and reflect on your daily activities, thoughts, and actions. Mood Garden guides you on cultivating your garden with reflective and insightful prompts.</p>
                </div>

                <div className="Description_Final">
                    <h3>Walk in your garden</h3>

                    <p>Take a walk through your mind's garden and reflect on your past journal entries anytime, anywhere.</p>
                </div>

            </div>
            

        );
    }
}