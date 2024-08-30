import { useParams } from "react-router-dom";


function Activation() {

    async function handeClick(){
        const {uid, token} = useParams()
        const data = {
            "uid": uid,
            "token": token
        }
        // send data
    }

    return (
        <div className="activation-page">
            <h3>Click to Activate your Account!</h3>
            <button onClick={handeClick}>Activate</button>
        </div>
    )    
}

export default Activation