import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import validateForm from "../../utils/validateForm";


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

    const {uid, token} = useParams()

    useEffect(()=> {
        setErrors(validateForm(null, null, password, rePassword))
    }, [password,rePassword])

    async function handleSubmit(e) {
        e.preventDefault()

        const data = {
            "uid": uid,
            "token": token,
            "new_password": password,
            "re_new_password": rePassword,
        }

        // send data
    }

    return (
        <div className="pass-res-confirm-page page-middle">
            <div className="pass-res-confirm-header">
                <h2>Set New Password</h2>
            </div>

            <form onSubmit={handleSubmit} className="form pass-res-confirm-form"> 

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
                            && errors.rePassword
                            && <FontAwesomeIcon icon={faCircleExclamation}/>
                        }
                    </div>

                    {
                        touchedRePassword
                        && focusRePassword
                        && firstTouchRePassword  
                        && errors.rePassword
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

                <button>Submit</button>

            </form>

        </div>
    )
}

export default PasswordResetConfirm