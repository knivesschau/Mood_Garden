import React, {Component} from "react";
import './LoginForm.css';

export default class LoginForm extends Component { 
    render() {
        return (
            <section className="LoginForm">
                
                <h3>Log In</h3>

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