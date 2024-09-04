import { useState, useEffect } from "react";
import { resendActivation } from "../../utils/AuthAPI";
import { useLocation } from "react-router-dom";


function ActivationNotification(){

    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(10);
    const location = useLocation()
    const email = location?.state?.email
    console.log(email)

    async function resendEmail() {
        const data = {
            "email": email,
        }
        try {
            const response = await resendActivation(data)
            console.log(response)
        }catch(error) {
            console.log("In Activation Notification", error)
        }
    }

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div className="auth-page">
            <div className="auth-page-header">
                <h2>Notification on Your Account</h2>
            </div>
            <hr />
            <div className="">
                <p>We have sent you an email with activation link.</p>
                <p>Please go to your email box and activate your account!</p>
            </div>
            <div className="auth-page-footer">
                <p>Didn't you get the email? Condsider checking your spam box.</p>
                <p>You can request to resend the email in every 2 minutes:</p>
                <div className="">
                    { minutes === 0 && seconds === 0
                        ? <button onClick={resendEmail}>Resend</button>
                        : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ActivationNotification