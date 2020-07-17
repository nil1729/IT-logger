import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { registerUser, loginUser, clearErrors } from '../../actions/auth';
import M from 'materialize-css/dist/js/materialize.js';
import { useHistory } from 'react-router-dom';

const Auth = ({ registerUser, auths, loginUser, clearErrors }) => {
    const [mode, setMode] = useState('login');
    const [loading, setLoading] = useState(false);
    const { isAuthenticated, errors } = auths;
    const history = useHistory();
    useEffect(() => {
        if (errors) {
            setLoading(false);
            M.toast({ html: errors });
            clearErrors();
        }
        else if (isAuthenticated) {
            history.push('/home');
        }
        // eslint-disable-next-line
    }, [errors, isAuthenticated]);

    const emailEl = useRef();
    const passwordEl = useRef();
    const nameEl = useRef();

    const validateInput = (email, password, name) => {
        const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!emailRegx.test(email)) {
            M.toast({ html: 'Please enter a valid Email Address' });
        }
        else if (password.trim().length === 0) {
            M.toast({ html: 'Password cannot contain only Spaces' });
        }
        else if (mode === 'register' && name.trim().length === 0) {
            M.toast({ html: 'Please Enter a Name' });
        } else return true;
    }

    const resetForm = () => {
        emailEl.current.value = '';
        passwordEl.current.value = '';
        if (mode === 'register') nameEl.current.value = '';
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const email = emailEl.current.value;
        const password = passwordEl.current.value;
        const name = mode === 'login' ? '' : nameEl.current.value;

        if (!validateInput(email, password, name)) {
            setLoading(false);
            return;
        }
        const userInput = {
            email,
            password,
            name
        }
        if (mode === 'login') {
            loginUser(userInput);
        } else {
            registerUser(userInput);
        }
        resetForm();
    }
    return (
        <div className="container z-depth-1">
            <div className="row">
                <h4 className="center red-text" style={{ textTransform: 'capitalize' }}>{mode}</h4>
                <form onSubmit={handleSubmit} className="col s12">
                    {
                        mode === 'register' ? (<div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input ref={nameEl} type="text" className="validate" />
                                <label htmlFor="icon_prefix">Name</label>
                            </div>
                        </div>) : (<></>)
                    }
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input ref={emailEl} type="email" className="validate" />
                            <label htmlFor="icon_prefix">Email Address</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">security</i>
                            <input minLength="4" ref={passwordEl} type="password" className="validate" />
                            <label htmlFor="icon_prefix">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn green waves-effect waves-light" type="submit">{loading ? 'Loading ...' : mode === 'login' ? 'login' : 'register'}
                                <i className="material-icons right">send</i>
                            </button>
                            <button onClick={() => { setMode(mode === 'login' ? 'register' : 'login') }} type="button" className="btn teal" style={{ marginLeft: '10px' }}>Switch to {mode === 'login' ? 'register' : 'login'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auths: state.auths
})

export default connect(mapStateToProps, { registerUser, loginUser, clearErrors })(Auth);
