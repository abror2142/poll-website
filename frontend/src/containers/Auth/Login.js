import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faLock, faXmark, faEye, faEyeSlash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

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
    const [showPassword, setShowPassword] = useState(false)

    useEffect(()=> {
        setErrors(validateForm(username, null, password, null))
    }, [username, password])


    async function handleSubmit(e) {
        e.preventDefault()
        if(errors.username || errors.password){
            setShowErrors(true)
        } else {
            setSubmitting(true)

            const data = {
                "username": username,
                "password": password
            }

            const response = await createJWT(data)
            console.log(response)

            setSubmitting(false)
        }
    }

    return (
        <div className="auth-page">

            <div className="auth-page-header">
                <div>
                    <FontAwesomeIcon className="header-icon" icon={faLock} />
                </div>
                <h2>Login</h2>
            </div>

            <form onSubmit={handleSubmit} className="form auth-page-form"> 

                <div className="input-box">

                    <div className="input-label">
                        <label htmlFor="username">Username: </label>
                    </div>

                    <div className="input-field">
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
                            && showErrors
                            && <FontAwesomeIcon className="error-icon" icon={faCircleExclamation}/>
                        }
                    </div>

                    {
                        touchedUsername
                        && focusUsername
                        && firstTouchUsername  
                        && (errors.username.length > 0)
                        && showErrors
                        && <div className="error-box">
                        <ul>
                            {
                                errors.username.map((error, index) => {
                                    return (
                                        <li key={'username-error-' + index}>
                                            <div className="error-list-item">
                                                <FontAwesomeIcon className="error-x-icon" icon={faXmark} />
                                                <p>{error}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                     }  

                </div>

                <div className="input-box">

                    <div className="input-label">
                        <label htmlFor="password">Password: </label>
                    </div>

                    <div className="input-password-field">
                        <div className="input-field">
                        <input 
                            id="password"
                            type={showPassword ? "text" : "password"}
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
                            && showErrors
                            && <FontAwesomeIcon className="error-icon" icon={faCircleExclamation}/>
                        }
                        </div>
                        <div className="show-password-box">
                            {
                                showPassword
                                ? <FontAwesomeIcon className="show-password-icon" icon={faEyeSlash} onClick={() => setShowPassword(false)}/>
                                : <FontAwesomeIcon className="show-password-icon" icon={faEye} onClick={() => setShowPassword(true)}/>
                            }
                        </div>
                    </div>

                    {
                        touchedPassword
                        && focusPassword
                        && firstTouchPassword  
                        && (errors.password.length > 0)
                        && showErrors
                        && <div className="error-box">
                            <ul>
                                {
                                    errors.password.map((error, index) => {
                                        return (
                                            <li key={'password-error-' + index}>
                                                <div className="error-list-item">
                                                    <FontAwesomeIcon className="error-x-icon" icon={faXmark} />
                                                    <p>{error}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                     }  

                </div>
                <div className="form-button">
                    <button disabled={submitting}>Login{submitting && '...'}</button>
                </div>

            </form>

            <div className="auth-page-footer">
                <p>Don't have an Account? <Link to='/signup'>Signup <FontAwesomeIcon icon={faPenToSquare} /></Link> here.</p>
                <p>Forget your Password? <Link to='/password-reset'>Reset</Link> here.</p>
            </div>
        </div>
    )
}

export default Login