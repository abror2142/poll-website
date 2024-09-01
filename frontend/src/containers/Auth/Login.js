import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import validateForm from "../../utils/validateForm";
import { createJWT } from "../../utils/AuthAPI";

function Login() {

    const [username, setUsername] = useState('')
    const [focusUsername, setFocusUsername] = useState(false)
    const [touchedUsername, setTouchedUsername] = useState(false)
    const [firstTouchUsername, setFirstTouchUsername] = useState(false)

    const [password, setPassword] = useState('')
    const [focusPassword, setFocusPassword] = useState(false)
    const [touchedPassword, setTouchedPassword] = useState(false)
    const [firstTouchPassword, setFirstTouchPassword] = useState(false)

    const [errors, setErrors] = useState({})
    const [showErrors, setShowErrors] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    useEffect(()=> {
        setErrors(validateForm(username, null, password, null))
    }, [username, password])


    async function handleSubmit(e) {
        e.preventDefault()
        setShowErrors(true)
        setSubmitting(true)

        const data = {
            "username": username,
            "password": password
        }

        const response = await createJWT(data)
        console.log(response)

        setSubmitting(false)
    }

    return (
        <div className="login-page page-middle">
            <div className="login-header">
                <h2>Login</h2>
            </div>

            <form onSubmit={handleSubmit} className="form login-form"> 

                <div className="username-input">

                    <div className="form-label">
                        <label htmlFor="username">Username: </label>
                    </div>

                    <div className="username-field">
                        <input 
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={() => {
                                setFocusUsername(true)
                                setTouchedUsername(true)
                            }}
                            onBlur={() => {
                                setFocusUsername(false)
                                setFirstTouchUsername(true)
                            }}  
                        />

                        {
                            touchedUsername
                            && !focusUsername
                            && errors.username
                            && showErrors
                            && <FontAwesomeIcon icon={faCircleExclamation}/>
                        }
                    </div>

                    {
                        touchedUsername
                        && focusUsername
                        && firstTouchUsername  
                        && errors.username
                        && showErrors
                        && <div className="error-box">
                            <ul>
                                {
                                    errors.username.map((error, index) => {
                                        return (
                                            <li key={'error' + index}>{error}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                     }  

                </div>

                <div className="password-input">

                    <div className="form-label">
                        <label htmlFor="password">Password: </label>
                    </div>

                    <div className="password-field">
                        <input 
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => {
                                setFocusPassword(true)
                                setTouchedPassword(true)
                            }}
                            onBlur={() => {
                                setFocusPassword(false)
                                setFirstTouchPassword(true)
                            }}  
                        />

                        {
                            touchedPassword
                            && !focusPassword
                            && errors.password
                            && <FontAwesomeIcon icon={faCircleExclamation}/>
                        }
                    </div>

                    {
                        touchedPassword
                        && focusPassword
                        && firstTouchPassword  
                        && errors.password
                        && <div className="error-box">
                            <ul>
                                {
                                    errors.password.map((error, index) => {
                                        return (
                                            <li key={'password-error-' + index}>{error}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                     }  

                </div>

                <button disabled={submitting}>Login{submitting && '...'}</button>

            </form>

            <div className="login-footer">
                <p>Don't have an Account? <Link to='/signup'>Sign Up</Link> here.</p>
                <p>Forget your Password? <Link to='/password-reset'>Reset</Link> here.</p>
            </div>
        </div>
    )
}

export default Login