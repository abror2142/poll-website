import React from "react";
import {useLoaderData} from "react-router-dom";

import axios from "../utils/axios";


export async function loader(){
    const url = "api/home/"
    let resp = null
    try {
        resp = await axios.get(url)
    } catch (error){
        console.log(error)
    }
    return resp
}


function Home(){
    const data = useLoaderData()
    return (
        <div>
        </div>
    )
}

export default Home