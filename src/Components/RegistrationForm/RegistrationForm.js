import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
    render() {
        return (

            <section className="LoginForm">

                <nav role="navigation" className="Login_Nav"> 
                    <Link to='/'>
                        Back to Landing Page
                    </Link>
                </nav>

                <h3>Begin Cultivating (Will Be Included in Final Version)</h3>

                <form className="Registration_Form">
                    
                    <div className="First_Name">
                        <label htmlFor="first_name">
                            First Name:
                        </label>

                        <input type="text" id="first-name" name="first_name"/>
                    </div>

                    <div className="Last_Name">
                        <label htmlFor="last_name">
                            Last Name:
                        </label>

                        <input type="text" id="last-name" name="last_name"/>
                    </div>

                    <div className="E-Mail_Add">
                        <label htmlFor="email">
                            E-Mail:
                        </label>
                        <input type="text" id="e-mail" name="email"/>
                    </div>

                    <div className="Username">
                        <label htmlFor="username">
                            Username:
                        </label>

                        <input type="text" id="username" name="username"/>
                    </div>

                    <div className="Password">
                        <label htmlFor="password">
                            Password:
                        </label>

                        <input type="text" id="password" name="password"/>
                    </div>                                                 

                <button type="submit">Register</button>

                </form>

            </section>
        )
    }
}