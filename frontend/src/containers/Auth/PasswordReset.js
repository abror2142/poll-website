import React from "react";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";

import validateForm from "../../utils/validateForm";
import { resetPassword } from "../../utils/AuthAPI";

function PasswordReset() {

    const [email, setEmail] = useState('')
    const [focusEmail, setFocusEmail] = useState(false)
    const [touchedEmail, sertTouchedEmail] = useState(false)
    const [firstTouchEmail, setFirstTouchEmail] = useState(false)

    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)

    useEffect(()=> {
        setErrors(validateForm(null, email))
    }, [email])


    async function handleSubmit(e) {
        e.preventDefault()
        if(!errors.email){
            setSubmitting(true)
            
            const data = {
                "email": email
            }

            const response = await resetPassword(data)
            console.log(response)
            setSubmitting(false)
        }
    }

    return (
        <div className="auth-page">

            <div className="auth-page-header">
                <h2>Password Reset</h2>
            </div>

            <form onSubmit={handleSubmit} className="form auth-page-form"> 

                <div className="input-box">

                    <div className="input-label">
                        <label htmlFor="email">Enter your email: </label>
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
                            && <FontAwesomeIcon className="error-icon" icon={faCircleExclamation} />
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
                <div className="form-button">
                    <button disabled={submitting}>Send{submitting && 'ing Link...'}</button>
                </div>

            </form>

        </div>
    )
}

export default PasswordReset