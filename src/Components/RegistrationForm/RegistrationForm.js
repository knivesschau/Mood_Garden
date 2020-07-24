import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
    static defaultProps = {
        onValidlRegistration: () => {}
    }

    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            retypePass: '',
            validName: false,
            validPass: false,
            validConfirm: false,
            validReg: false,
            errorType: {},
            seen: false
        };
    }

    togglePopUp() {
        this.setState({
            seen: !this.state.seen
        })
    }

    validateRegForm() {
        const {validName, validPass, validConfirm} = this.state;

        this.setState({
            validReg: validName && validPass && validConfirm
        });
    }

    updateUsername(username) {
        this.setState({
            username: username,
        },
            this.validateUsername
        );
    }

    updatePassword(password) {
        this.setState({
            password: password,
        },
            this.validatePassword
        );
    }

    confirmPassword(retypePass) {
        this.setState({
            retypePass: retypePass,
        },
            this.validateConfirmedPassword
        );
    }

    validateUsername() {
        const {username} = this.state;
        let validName = true;
        let errorType = {...this.state.errorType};

        if (username.length < 3) {
            validName = false;
            errorType.username = "Please create a username that is longer than 3 characters."
        }

        this.setState({
            validName,
            errorType,
        },
            this.validateRegForm
        );
    }

    validatePassword() {
        const {password} = this.state;
        const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/;
        let validPass = true;
        let errorType = {...this.state.errorType};

        if (password.length < 8) {
            validPass = false;
            errorType.password = "Password must be at least 8 characters long."
        }

        if (password.length > 72) {
            validPass = false;
            errorType.password = "Password must be less than 72 characters long."
        }

        if (password.startsWith(' ') || password.endsWith(' ')) { 
            validPass = false;
            errorType.password = "Password must not start or end with a space."
        }

        if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
            validPass = false;
            errorType.password = "Password must contain 1 upper case letter, lower case letter, number, and special character."
        }

        this.setState({
            validPass,
            errorType,
        },
            this.validateRegForm
        );
    }
    
    validateConfirmedPassword() {
        const {retypePass} = this.state;
        const {password} = this.state;
        let validConfirm = true;
        let errorType = {...this.state.errorType}

        if (password !== retypePass) {
            validConfirm = false;
            errorType.retypePass = "Passwords do not match."
        }

        this.setState({
            validConfirm,
            errorType
        },
            this.validateRegForm
        );
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
            .then(() => {
                window.location=`/login`
                window.alert('Registered successfully. Please log in with your new credentials.')

            })
            .catch(res => {
                this.setState({
                    error: window.alert('An unexpected error occurred. Please try again later.')
                })
            })
    }    
    
    render() {        
        return (
            <section className="RegistrationForm">

                <nav role="navigation" className="Register_Nav"> 
                    <Link to='/'>
                        <FontAwesomeIcon icon="chevron-left"/>
                        Back
                    </Link>
                </nav>

                <h3 id="register-header">Begin Cultivating</h3>

                <form className="Register_Form" onSubmit={this.submitRegistration}>

                    <div className="Username">

                        <label htmlFor="username">
                            <p id="user-descrip">Username:</p>

                            <input 
                                onChange={e => this.updateUsername(e.target.value)}
                                value={this.state.username}
                                type="text" 
                                id="username" 
                                name="username"/>

                            <ErrorValidation 
                                className="Username_Error"
                                valid={this.state.validName}
                                message={this.state.errorType.username}/>

                        </label>

                    </div>

                    <div className="Password">

                        <label htmlFor="password">
                            
                            <p id="password-descrip">Password:</p>

                            <input 
                                onChange={e => this.updatePassword(e.target.value)}
                                type="password" 
                                id="password" 
                                name="password"/>
                            
                            <ErrorValidation 
                                className="Password_Error"
                                valid={this.state.validPass}
                                message={this.state.errorType.password}/>
                        
                        </label>

                        <label htmlFor="retype-password">
                            
                            <p id="confirm-descrip">Re-Type Password:</p>

                            <input 
                                onChange={e => this.confirmPassword(e.target.value)}
                                type="password" 
                                id="retype-password" 
                                name="re-type-password"/>

                            <ErrorValidation 
                                className="Retype_Error"
                                valid={this.state.validConfirm}
                                message={this.state.errorType.retypePass}/>
                        
                        </label>

                    </div>                                                 

                <button type="submit" id="register-user">
                     Register
                </button>

                </form>

            </section>
        )
    }
}
