import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import validateForm from "../../utils/validateForm";
import { signup } from "../../utils/AuthAPI";

function Signup() {

    const [username, setUsername] = useState('')
    const [focusUsername, setFocusUsername] = useState(false)
    const [touchedUsername, setTouchedUsername] = useState(false)
    const [firstTouchUsername, setFirstTouchUsername] = useState(false)

    const [email, setEmail] = useState('')
    const [focusEmail, setFocusEmail] = useState(false)
    const [touchedEmail, sertTouchedEmail] = useState(false)
    const [firstTouchEmail, setFirstTouchEmail] = useState(false)

    const [password, setPassword] = useState('')
    const [focusPassword, setFocusPassword] = useState(false)
    const [touchedPassword, setTouchedPassword] = useState(false)
    const [firstTouchPassword, setFirstTouchPassword] = useState(false)

    const [rePassword, setRePassword] = useState('')
    const [focusRePassword, setFocusRePassword] = useState(false)
    const [touchedRePassword, setTouchedRePassword] = useState(false)
    const [firstTouchRePassword, setFirstTouchRePassword] = useState(false)

    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)


    useEffect(()=> {
        setErrors(validateForm(username, email, password, rePassword))
    }, [username, email, password,rePassword])


    async function handleSubmit(e) {
        e.preventDefault()

        setSubmitting(true)

        const data = {
            "username": username,
            "email": email,
            "password": password,
            "re_password": rePassword
        }
        const response = await signup(data)
        console.log(response)
        setSubmitting(false)
    }
    
    console.log(errors)
    return (
        <div className="signup-page">
            <div className="signup-header">
                <h2>Sign Up</h2>
            </div>

            <form onSubmit={handleSubmit} className="form signup-form"> 

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
                            && (errors.username.length > 0)
                            && <FontAwesomeIcon icon={faCircleExclamation}/>
                        }
                    </div>

                    {
                        touchedUsername
                        && focusUsername
                        && firstTouchUsername  
                        && (errors.username.length > 0)
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

                <div className="email-input">

                    <div className="form-label">
                        <label htmlFor="email">Email: </label>
                    </div>

                    <div className="email-field">
                        <input 
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => {
                                setFocusEmail(true)
                                sertTouchedEmail(true)
                            }}
                            onBlur={() => {
                                setFocusEmail(false)
                                setFirstTouchEmail(true)
                            }}  
                        />

                        {
                            touchedEmail
                            && !focusEmail
                            && (errors.email.length > 0)
                            && <FontAwesomeIcon icon={faCircleExclamation}/>
                        }
                    </div>

                    {
                        touchedEmail
                        && focusEmail
                        && firstTouchEmail  
                        && (errors.email.length > 0)
                        && <div className="error-box">
                            <ul>
                                {
                                    errors.email.map((error, index) => {
                                        return (
                                            <li key={'email-error-' + index}>{error}</li>
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
                            && (errors.password.length > 0)
                            && <FontAwesomeIcon icon={faCircleExclamation}/>
                        }
                    </div>

                    {
                        touchedPassword
                        && focusPassword
                        && firstTouchPassword  
                        && (errors.password.length > 0)
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

                <div className="re-password-input">

                    <div className="form-label">
                        <label htmlFor="re-password">Confirm Password:</label>
                    </div>

                    <div className="re-password-field">
                        <input 
                            id="re-password"
                            onChange={(e) => setRePassword(e.target.value)}
                            onFocus={() => {
                                setFocusRePassword(true)
                                setTouchedRePassword(true)
                            }}
                            onBlur={() => {
                                setFocusRePassword(false)
                                setFirstTouchRePassword(true)
                            }}  
                        />

                        {
                            touchedRePassword
                            && !focusRePassword
                            && (errors.rePassword.length > 0)
                            && <FontAwesomeIcon icon={faCircleExclamation}/>
                        }
                    </div>

                    {
                        touchedRePassword
                        && focusRePassword
                        && firstTouchRePassword  
                        && (errors.rePassword.length > 0)
                        && <div className="error-box">
                            <ul>
                                {
                                    errors.rePassword.map((error, index) => {
                                        return (
                                            <li key={'rePassword-error-' + index}>{error}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                     }  

                </div>

                <button
                    disabled={submitting}
                >Submit</button>

            </form>

            <div className="signup-footer">
                <p>Already have an Account? <Link to='/login'>Login</Link> here.</p>
            </div>
        </div>
    )
}

export default Signup