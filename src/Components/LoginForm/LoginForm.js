import React, {Component} from "react";
import TokenService from '../../services/token-services';
import {Link} from 'react-router-dom';
import './LoginForm.css';

export default class LoginForm extends Component { 
    static defaultProps = {
        onValidLogin: () => {}
    }
    
    // state = { error: null }

    handleLoginAuth = e => {
        e.preventDefault()
        const {return_user, return_pass} = e.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(return_user.value, return_pass.value)
        )
        
        return_user.value= ''
        return_pass.value = ''
        this.props.onValidLogin()

        window.location='/your-garden'
    }

    render() {
        return (
            <section className="LoginForm">

                <nav role="navigation" className="Login_Nav"> 
                    <Link to='/'>
                        Back to Landing Page
                    </Link>
                </nav>
            
                <h3>Log In</h3>

                <form className="Login_Form" onSubmit={this.handleLoginAuth}> 

                    <div>
                        <label htmlFor="username">
                            Username: 
                        </label>

                        <input type="text" id="return-user" name="return_user"/>
                    </div>

                    <div>
                        <label htmlFor="username">
                            Password:
                        </label>

                        <input type="text" id="return-pass" name="return_pass"/>
                    </div>

                <button type="submit">Login</button>
                </form>

            </section>
        )
    }
}