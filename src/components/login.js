import React, {useState} from "react";
import axios from "axios";

// 8:19
const Login=({setToken,setShowForm,setDisplayDashboard})=>{
    const [user,setUser] = useState({email:"",password:""});
    const [message, setMessage] = useState("");
    const [displayLogin,setDisplayLogin] = useState(true);
    const [codeStatus,setCodeStatus] = useState(true);

function updateUser(e){
    setUser({...user,[e.target.name]:e.target.value});
}

async function implementLogin(e){
    e.preventDefault();

 try{
    const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login",{
    email:user.email,password:user.password,
    })
    setMessage(response.data.message);
    // console.log(response.data.message);
    setToken(response.data.data.token);
    // console.log(response.data.data.token);
    setDisplayDashboard(true); 
    setDisplayLogin(false);
    setCodeStatus(true);
}
    
catch(error){
        console.log("error",error.response.data.message);
            setMessage(error.response.data.message);
            setDisplayLogin(false);
            setCodeStatus(false);
    }
 }
    return(
<div>

    {displayLogin ? (<div className="LoginForm">
            <h1>Login page</h1>
            <form className="login-form" onSubmit={implementLogin}>
               <input type="email" name="email" placeholder="Email" onChange={updateUser}/>
               <input type="password" name="password" placeholder="Password" onChange={updateUser}/>
               <button type="submit">Submit</button>
               <p>do not have account <i style={{color:"blue", cursor:"pointer"}} onClick={()=>{setShowForm(true);setDisplayLogin(false);setCodeStatus(true)}}>Sign up</i></p>
            </form>
        </div>):(!codeStatus && <div> <h3>{message}</h3> <button onClick={()=>{setDisplayLogin(true)}}>Login page</button></div>) } 
</div>
        
    );
}
export default Login;