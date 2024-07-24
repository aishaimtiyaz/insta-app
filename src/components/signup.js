import React, {useState} from "react";
import axios from "axios";

const SignUp=({setToken,showForm,setShowForm,setDisplayDashboard})=>{

const [user,setUser] = useState({name:"",email:"",password:"",confirm_password:""});
const [message, setMessage] = useState("");
const [codeStatus,setCodeStatus] = useState(true);


function updateUser(e){
    setUser({...user,[e.target.name]:e.target.value});
}

async function implementSignUp(e){
    e.preventDefault();
    try
    {
       const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
        name:user.name, email:user.email,password:user.password,
       })
       console.log("sucess",response.data.message);
       setShowForm(false);
       setDisplayDashboard(true);
       setToken(response.data.data.token);
       setCodeStatus(true);
    }
    catch(error){
        console.log("error",error.response.data.message);
        
            setMessage(error.response.data.message);
            setShowForm(false);
            setCodeStatus(false);
       
    }
}

    return(

        <div>{
                showForm ? (
                <div className="SignUpForm">
                    <h1>Sign Up Form</h1>
                    <form className="signup-form" onSubmit={implementSignUp}>
                    <input type="text" name="name" placeholder="Name" onChange={updateUser}/>
                    <input type="email" name="email" placeholder="Email" onChange={updateUser}/>
                    <input type="password" name="password" placeholder="Password" onChange={updateUser}/>
                    <input type="password" name="confirm_password "placeholder="Confirm Password" onChange={updateUser}/>
                    <button type="submit">Submit</button>
                    </form>
                </div>
               )  : (!codeStatus && <div> <h3>{message}</h3> <button onClick={()=>{setShowForm(true)}}>SignUp page</button></div>)
      } 
      </div>
        
    );
}
export default SignUp;

