import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import validateForm from "../../utils/validateForm";
import { resetPasswordConfirm } from "../../utils/AuthAPI";

function PasswordResetConfirm() {

    const [password, setPassword] = useState('')
    const [focusPassword, setFocusPassword] = useState(false)
    const [touchedPassword, setTouchedPassword] = useState(false)
    const [firstTouchPassword, setFirstTouchPassword] = useState(false)

    const [rePassword, setRePassword] = useState('')
    const [focusRePassword, setFocusRePassword] = useState(false)
    const [touchedRePassword, setTouchedRePassword] = useState(false)
    const [firstTouchRePassword, setFirstTouchRePassword] = useState(false)

    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const {uid, token} = useParams()
    const [submitting, setSubmitting] = useState(false)

    useEffect(()=> {
        setErrors(validateForm(null, null, password, rePassword))
    }, [password,rePassword])

    async function handleSubmit(e) {
        e.preventDefault()

        if(uid && token){
            setSubmitting(true)
            const data = {
                "uid": uid,
                "token": token,
                "new_password": password,
                "re_new_password": rePassword,
            }
            try {
            const response = await resetPasswordConfirm(data)
            console.log(response)
            } catch (error) {
                console.log(error)
            } finally{
                setSubmitting(false)
            }
        }

    }

    return (
        <div className="auth-page">
            <div className="auth-page-header">
                <h2>Set New Password</h2>
            </div>

            <form onSubmit={handleSubmit} className="form auth-page-form"> 

                <div className="input-box">

                    <div className="input-label">
                        <label htmlFor="password">New Password: </label>
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
                            && errors.password
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
                        <label htmlFor="re-password">Confirm New Password:</label>
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
                                && errors.rePassword
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
                    <button disabled={submitting}>Submit{submitting && "ting..."}</button>
                </div>
            </form>

        </div>
    )
}

export default PasswordResetConfirm