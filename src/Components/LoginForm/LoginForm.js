import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './LoginForm.css';

export default class LoginForm extends Component { 
    render() {
        return (
            <section className="LoginForm">

                <nav role="navigation" className="Login_Nav"> 
                    <Link to='/'>
                        Back to Landing Page
                    </Link>
                </nav>
            
                <h3>Log In (Will Be Included in Final Version)</h3>

                <form className="Login_Form"> 

                    <div>
                        <label htmlFor="username">
                            Username: 
                        </label>

                        <input type="text" id="return-user" name="return-user"/>
                    </div>

                    <div>
                        <label htmlFor="username">
                            Password:
                        </label>

                        <input type="text" id="return-pass" name="return-pass"/>
                    </div>

                <button type="submit">Login</button>
                </form>

            </section>
        )
    }
}