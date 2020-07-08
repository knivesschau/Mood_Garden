import React, {Component} from "react";
import TokenService from '../../services/token-services';
import AuthApiService from '../../services/auth-api-service';
import {Link} from 'react-router-dom';
import './LoginForm.css';

export default class LoginForm extends Component { 
    static defaultProps = {
        onValidLogin: () => {}
    }

    state = {error: null}

    handleJwtLoginAuth = e => {
        e.preventDefault();
        const {return_user, return_pass} = e.target;

        this.setState({
            error: null
        })

        AuthApiService.postLogin({
            user_name: return_user.value,
            password: return_pass.value 
        })
            .then(res => {
                return_user.value = ''
                return_pass.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onValidLogin()
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
        
        // window.location= '/your-garden'
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

                <form className="Login_Form" onSubmit={this.handleJwtLoginAuth}> 

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