import { useParams } from "react-router-dom";

import { activation } from "../../utils/AuthAPI";

function Activation() {

    const {uid, token} = useParams()
    async function handeClick(){
        if(uid && token) {
            const data = {
                "uid": uid,
                "token": token
            }

            const response = await activation(data)
            console.log(response)
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-page-header">
                <h2>Activate your Account!</h2>
            </div>
            <br />
            <hr />
            <br />
            <div className="form-button">
                <button onClick={handeClick}>Activate</button>
            </div>
        </div>
    )    
}

export default Activation