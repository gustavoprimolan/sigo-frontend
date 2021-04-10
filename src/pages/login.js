import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import TitleComponent from "./title";

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        redirect: false,
        authError: false,
        isLoading: false,
    };

    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };
    handlePwdChange = event => {
        this.setState({password: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const url = 'https://tcc-puc-309309.uc.r.appspot.com/api/usuario/login';
        const email = this.state.email;
        const password = this.state.password;
        const requestBody = {email, senha: password};

        axios.post(url, requestBody)
            .then(result => {
                console.log(result);
                if (result.status == 200) {
                    console.log(result.data);
                    localStorage.setItem('user', result.data);
                    localStorage.setItem('token', result.data.token);
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('permission', result.data.perfil.nome);
                    this.setState({redirect: true, isLoading: false, authError: false});
                } else {
                    console.log('Não existe usuario');
                    this.setState({authError: true, isLoading: false});    
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({authError: true, isLoading: false});
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            console.log('redirecionou');
            return <Redirect to='/dashboard'/>
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        if (localStorage.getItem("isLoggedIn") == 'true') {
            return <Redirect to='/dashboard' />
        }
        return (
            <div className="container">
                <TitleComponent title="SIGO"></TitleComponent>
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputEmail" placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} autoFocus required/>
                                    <label htmlFor="inputEmail">Email address</label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Email.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="******" name="password" onChange={this.handlePwdChange} required/>
                                    <label htmlFor="inputPassword">Password</label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Password.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me"/>Remember Password
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Login &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>

                            <div className="form-group">
                                <div className="form-group">
                                    <b>email:</b> adm@teste.com
                                </div>
                                <div className="form-group">
                                    <b>senha:</b> 123456
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-group">
                                    <b>email:</b> cliente@teste.com
                                </div>
                                <div className="form-group">
                                    <b>senha:</b> 123456
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}


