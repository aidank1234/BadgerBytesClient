import React from 'react';
import '../App.css'
import '../bootstrap.scss';
import Loader from 'react-loader-spinner';
const client = require('../Utilities/client');

class SignInStaff extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formFields: {username: '', pass: ''},
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
            loading: true,
            error: false,
        });
        if(this.state.formFields.username.length < 5) {
            this.setState({
                loading: false,
                error: true,
                errorMessage: 'Invalid username and password combination'
            });
            return;
        }
        if(this.state.formFields.pass.length < 8) {
            this.setState({
                loading: false,
                error: true,
                errorMessage: 'Invalid username and password combination'
            });
            return;
        }


        client.post('/api/staffUsers/login', formFields)
            .then(function(response){
                window.location.href = '/staff';
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: true,
                    errorMessage: 'Invalid username and password combination'
                });
            });
    };

    render() {
        return (
            <div className={'use-styles'}>
                <div className="main">
                    <section className="sign-in">
                        <div className="container">
                            <div className="signin-content">
                                <div className="signin-image">
                                    <figure><img src="../img/logo.png" alt="sign in image" /></figure>
                                </div>

                                <div className="signin-form">
                                    <h2 className="form-title">Sign In</h2>
                                    <form className="register-form" id="login-form" onSubmit={(e) => this.formHandler(e, this.state.formFields)}>
                                        <div className="form-group">
                                            <label htmlFor="username"><i
                                                className="icon-user material-icons-name"></i></label>
                                            <input type="text" name="username" id="username" placeholder="Username" onChange={this.inputChangeHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pass"><i className="icon-lock"></i></label>
                                            <input type="password" name="pass" id="pass"
                                                   placeholder="Password" onChange={this.inputChangeHandler}/>
                                        </div>
                                        {this.state.error ? <p style={{color: 'red'}}>{this.state.errorMessage}</p> : null}
                                        {this.state.loading == false &&
                                        <div className="form-group form-button">
                                            <input type="submit" name="signin" id="signin"
                                                   className="form-submit"
                                                   value="Log in"/>
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
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default SignInStaff;
