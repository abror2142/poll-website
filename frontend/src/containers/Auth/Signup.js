import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faPenToSquare, faRightToBracket, faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

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
        try {
            const response = await signup(data)
            console.log(response)
            navigate('/activation-notification', {state: {email: email}})
        } catch (error) {
            console.log("In Signup", error)
        }finally{
            setSubmitting(false)
        }
    }
    
    return (
        <div className="auth-page">
            
            <div className="auth-page-header">
                <div >
                    <FontAwesomeIcon className="header-icon" icon={faPenToSquare} />
                </div>
                <h2>Signup</h2>
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
                            && <FontAwesomeIcon className="error-icon" icon={faCircleExclamation}/>
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
                        <label htmlFor="email">Email: </label>
                    </div>

                    <div className="input-field">
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
                            && <FontAwesomeIcon className="error-icon" icon={faCircleExclamation}/>
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
                                            <li key={'email-error-' + index}>
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

                <div className="input-box">

                    <div className="input-label">
                        <label htmlFor="re-password">Confirm Password:</label>
                    </div>

                    <div className="input-password-field">
                        <div className="input-field">
                            <input 
                                id="re-password"
                                type={showPassword ? "text" : "password"}
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
                        touchedRePassword
                        && focusRePassword
                        && firstTouchRePassword  
                        && (errors.rePassword.length > 0)
                        && <div className="error-box">
                            <ul>
                                {
                                    errors.rePassword.map((error, index) => {
                                        return (
                                            <li key={'confirm-password-error-' + index}>
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
                    <button disabled={submitting}>Submit{submitting && '...'}</button>
                </div>
            </form>

            <div className="auth-page-footer">
                <p>Already have an Account? <Link to='/login'>Login <FontAwesomeIcon icon={faRightToBracket} /></Link> .</p>
            </div>

        </div>
    )
}

export default Signup