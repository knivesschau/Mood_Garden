import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TokenService from '../../services/token-services';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom';
import './LoginForm.css';

export default class LoginForm extends Component { 
    static defaultProps = {
        onValidLogin: () => {}
    };

    constructor(props) {
        super(props);
        this.state = {error: null};
    };

    // handle login authentication and validation on submit. //
    handleJwtLoginAuth = e => {
        e.preventDefault();
        const {return_user, return_pass} = e.target;

        this.setState({
            error: null
        });

        AuthApiService.postLogin({
            user_name: return_user.value,
            password: return_pass.value 
        })
            .then(res => {
                return_user.value = '';
                return_pass.value = '';
                TokenService.saveAuthToken(res.authToken);
                this.props.onValidLogin();
            })
            .then(() => {
                window.location=`/your-garden`;
            })
            .catch(res => {
                this.setState({
                    error: alert("Invalid username or password. Please double-check your credentials.")
                });
            });
    }

    render() {
        return (
            <section className="GardenLoginForm">

                <nav role="navigation" className="Login_Nav"> 
                    <FontAwesomeIcon icon="chevron-left"/>
                        <Link to='/'>
                        Back 
                        </Link>
                </nav>
            
                <h3 id="login-header">Log In</h3>

                <form className="Login_Form" onSubmit={this.handleJwtLoginAuth}> 

                    <div>

                        <label htmlFor="username">
                            <p id="return-user-label">Username:</p>

                        <input type="text" id="return-user" name="return_user"/>

                        </label>

                    </div>

                    <div>

                        <label htmlFor="username">
                            <p id="return-pass-label">Password:</p>
                            
                        <input type="password" id="return-pass" name="return_pass"/>

                        </label>
                    </div>

                    <button type="submit" id="submit-login">Login</button>
                
                </form>

                <div className="Demo_Info">

                    <span id="demo-info1">Demo User: thinkfulTeam2020</span>

                    <span id="demo-info2">Demo Password: M0odGarden1!</span>

                </div>

            </section>
        );
    }
}