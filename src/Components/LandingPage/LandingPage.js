import React, { Component } from 'react';
import RoseColor from '../RoseColor/RoseColor';
import MainNav from '../MainNav/MainNav';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                
                <nav role="navigation" className="Landing_Nav">
                    <MainNav/>
                </nav>

                <header role="banner">
                    <h1>Mood Garden</h1>
                    
                    <h2 id="pitch-header">Cultivate Your Mind</h2>
                </header>

                <div className="Description_Intro">
                    
                    <RoseColor/>
                    
                    <h3 id="tagline1">Cultivate your mindfulness, one day at a time.</h3>

                    <p id="landing1">Mood Garden allows you to learn, grow, and reflect on your life by cultivating a rose garden that acts as your daily mood journal.</p>
                
                </div>

                <div className="Description_Functional">
                    
                    <RoseColor/>
                    
                    <h3 id="tagline2">Plant your Roses</h3>

                    <p id="landing2">Fill your garden with roses that act as daily reflections of your activities, thoughts, and actions. Mood Garden guides you on cultivating your garden with reflective and insightful prompts.</p>
                
                </div>

                <div className="Description_Final">
                    
                    <RoseColor/>
                    
                    <h3 id="tagline3">Walk in Your Garden</h3>

                    <p id="landing3">Take a walk through your mind's garden and reflect on your past journal entries anytime, anywhere. You may even come up with more insights!</p>

                </div>

            </div>
                        
        );
    }
}