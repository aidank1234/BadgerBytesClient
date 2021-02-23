import React from 'react';
import '../App.css'
import '../bootstrap.scss';
import Loader from "react-loader-spinner";
const client = require('../Utilities/client');


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formFields: {username: '', phoneNumber: '', pass: '', repeatPass: ''},
            error: false,
            loading: false,
            errorMessage: '',
        }
    }

    inputChangeHandler = (e) => {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
            formFields
        });
    };

    formHandler = (e, formFields) => {
        e.preventDefault();
        this.setState({
            error: false,
            loading: true,
        });
        if(this.state.formFields.username.length < 5) {
            this.setState({
                error: true,
                loading: false,
                errorMessage: "Username must contain more than 5 characters."
            });
            return;
        }
        if(this.state.formFields.pass.length < 8) {
            this.setState({
                error: true,
                loading: false,
                errorMessage: "Password must be a least 8 characters long."
            });
            return;
        }
        if(!(this.state.formFields.pass === this.state.formFields.repeatPass)) {
            this.setState({
                error: true,
                loading: false,
                errorMessage: "Passwords much match."
            });
            return;
        }
        if(this.state.formFields.phoneNumber.length < 10) {
            this.setState({
                error: true,
                loading: false,
                errorMessage: "Phone number must contain ten characters"
            });
            return;
        }

        client.post('/api/users', formFields)
            .then(function(response){
                localStorage.setItem('token', response.data.token);
                window.location.href = '/menu';
            })
            .catch(function(error) {
                this.setState({
                    loading: false,
                    error: true,
                    errorMessage: 'Unable to complete registration. Please try again later.'
                });
            }.bind(this));
    };

    render() {
        return (
            <div className={'use-styles'}>
                <div className="main">
                    <section className="signup">
                        <div className="container">
                            <div className="signup-content">
                                <div className="signup-form">
                                    <h2 className="form-title">Sign Up</h2>
                                    <form className="register-form" id="register-form" onSubmit={(e) => this.formHandler(e, this.state.formFields)}>
                                        <div className="form-group">
                                            <label htmlFor="username"><i className="icon-user material-icons-name"/></label>
                                            <input type="text" name="username" id="username" placeholder="Username" onChange={(e) => this.inputChangeHandler(e)}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pass"><i className="icon-lock"/></label>
                                            <input type="password" name="pass" id="pass" placeholder="Password" onChange={(e) => this.inputChangeHandler(e)}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="re-pass"><i className="icon-lock"/></label>
                                            <input type="password" name="repeatPass" id="repeatPass" placeholder="Repeat your password" onChange={(e) => this.inputChangeHandler(e)}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phoneNumber"><i className="icon-phone"/></label>
                                            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={(e) => this.inputChangeHandler(e)}/>
                                        </div>
                                        {this.state.error ? <p style={{color: 'red'}}>{this.state.errorMessage}</p> : null}
                                        {this.state.loading === false &&
                                        <div className="form-group form-button">
                                            <input type="submit" className="form-submit" value="Register"/>
                                        </div>
                                        }
                                        {this.state.loading &&
                                        <Loader
                                            type="Circles"
                                            color="#00BFFF"
                                            height={100}
                                            width={100}
                                        />
                                        }
                                    </form>
                                </div>
                                <div className="signup-image">
                                    <figure><img src="../img/logo.png" alt="sign up image" /></figure>
                                    <a href="/signin" className="signup-image-link">Already have an account? Click here.</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default SignUp;
