import React,{useState} from "react";
import axios from "axios";

const Dashboard =({token,displayDashboard})=>{
    const [joke,setJoke] = useState("");


    function getJoke()
    {
        axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
            headers:{
                "authorization":`Bearer ${token}`
            }
        })
        .then(response=>{
            // console.log("joke",response.data.data.message);
            setJoke(response.data.data.message);
        })
        .catch(err=>console.log(err.response.data.message))
    }

    return(
        <div>
            {
                displayDashboard && (
                <div>
                    <h1>Dashboard</h1>
                    <button onClick={getJoke}> Get joke </button>
                    {
                        joke && <div className="jokeContainer">{joke}</div>
                    }
                </div>
             )
            }
            
        </div>
    );
}
export default Dashboard;