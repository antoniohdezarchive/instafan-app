import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Notification from '../notification/Notification';
import auth from '../../js/util/auth';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        auth.verifySession()
            .then((response) => {
                this.props.history.push('/');
            })
            .catch((error) => {})
    }

    onChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onSubmit(event) {
        event.preventDefault();

        const loginBtn = document.querySelector('#login-btn');
        console.dir(loginBtn);
        loginBtn.disabled = true;
        loginBtn.innerText = 'Cargando...'

        auth.signIn(this.state.email, this.state.password)
            .then((response) => {
                this.props.history.push('/');
            })
            .catch((error) => {
                // Show error in login...
                console.log(error);
                loginBtn.disabled = false;
                loginBtn.innerText = 'Iniciar Sesión';
                this.setState({ showErrors: true });

            });
    }

    render() {
        let notification;
        if (this.state.showErrors) {
            const options = {
                type: 'error',
                title: 'Credenciales incorrectas',
                detail: ''
            };
            notification = <Notification options={options} />;
        }
        return (
            <div className="login__container">
                <div className="panel">
                    <div className="panel__header">
                        <header className="login__header">
                        </header>
                    </div>
                    <div className="panel__content">
                        <form className="form form--login" onSubmit={this.onSubmit}>
                            <div className="form__column form__column--1">
                                <div className="form__element">
                                    <label className="form__label">
                                        Correo electrónico
                                    </label>
                                    <input name="email" type="email" onChange={this.onChange} required />
                                </div>
                                <div className="form__element">
                                    <label className="form__label">
                                        Contraseña
                                    </label>
                                    <input name="password" type="password" onChange={this.onChange} required />
                                </div>
                                <div className="form__element">
                                    <button id="login-btn" className="button button--primary">Iniciar Sesión</button>
                                </div>
                                <div className="form__element text-align--center">
                                    {/* <Link to="/recover-password">Olvidé mi contraseña</Link> */}
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
                { notification }
                <div className="login__register-message">
                    ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
                </div>
                <div className="login__copyright-message">
                    © Copyright 2017 - ILLUTIO, Realidad Aumentada y Geolocalización S de RL de CV
                </div>
            </div>
        );
    }
}

export default Login;