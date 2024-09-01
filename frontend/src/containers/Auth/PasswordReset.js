import React from "react";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import validateForm from "../../utils/validateForm";


function PasswordReset() {

    const [email, setEmail] = useState('')
    const [focusEmail, setFocusEmail] = useState(false)
    const [touchedEmail, sertTouchedEmail] = useState(false)
    const [firstTouchEmail, setFirstTouchEmail] = useState(false)

    const [errors, setErrors] = useState({})

    useEffect(()=> {
        setErrors(validateForm(null, email))
    }, [email])


    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="password-reset-page page-middle">

            <div className="password-reset-header">
                <h2>Password Reset</h2>
            </div>

            <form onSubmit={handleSubmit} className="form password-reset-form"> 

                <div className="email-input">

                    <div className="form-label">
                        <label htmlFor="email">Enter your email: </label>
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
                            && errors.email
                            && <FontAwesomeIcon icon={faCircleExclamation}/>
                        }
                    </div>

                    {
                        touchedEmail
                        && focusEmail
                        && firstTouchEmail  
                        && errors.email
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

                <button>Submit</button>

            </form>

        </div>
    )
}

export default PasswordReset