import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
    static defaultProps = {
        onValidlRegistration: () => {}
    }
    
    submitRegistration = e => {
        e.preventDefault();

        const {username, password} = e.target; 

        this.setState({
            error: null
        })

        AuthApiService.postUser({
            user_name: username.value,
            password: password.value
        })
            .then(user => {
                username.value = '';
                password.value = '';
                this.props.onValidlRegistration();
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    
    }    
    
    render() {
        return (

            <section className="LoginForm">

                <nav role="navigation" className="Register_Nav"> 
                    <Link to='/'>
                        Back
                    </Link>
                </nav>

                <h3>Begin Cultivating</h3>

                <form className="Registration_Form" onSubmit={this.submitRegistration}>

                    <div className="Username">

                        <label htmlFor="username">
                            Username:

                            <input type="text" id="username" name="username"/>

                        </label>

                    </div>

                    <div className="Password">

                        <label htmlFor="password">
                            
                            Password:

                            <input type="password" id="password" name="password"/>
                        
                        </label>

                        <label htmlFor="retype-password">
                            
                            Re-Type Password:

                            <input type="password" id="retype-password" name="re-typepassword"/>
                        
                        </label>

                    </div>                                                 

                <button type="submit">Register</button>

                </form>

            </section>
        )
    }
}