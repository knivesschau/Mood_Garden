import React, {Component} from "react";
import TokenService from '../../services/token-services';
import AuthApiService from '../../services/auth-api-service';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import {Link} from 'react-router-dom';
import './LoginForm.css';

export default class LoginForm extends Component { 
    static defaultProps = {
        onValidLogin: () => {}
    }

    constructor(props) {
        super(props);

        this.state = {error: null}
    }

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
            .then(() => {
                window.location=`/your-garden`
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

                <nav role="navigation" className="Login_Nav"> 
                    <Link to='/'>
                        Back 
                    </Link>
                </nav>
            
                <h3>Log In</h3>

                <form className="Login_Form" onSubmit={this.handleJwtLoginAuth}> 

                    <div>

                        <label htmlFor="username">
                            Username: 

                        <input type="text" id="return-user" name="return_user"/>

                        </label>

                    </div>

                    <div>

                        <label htmlFor="username">
                            Password:

                        <input type="password" id="return-pass" name="return_pass"/>

                        </label>
                    </div>

                <button type="submit">Login</button>
                </form>

            </section>
        )
    }
}