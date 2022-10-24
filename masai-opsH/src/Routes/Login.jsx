import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_SUCCESS } from "../Context/actionTypes";
import { AppContext } from "../Context/AppContext";




function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [state,dispatch] = useContext(AppContext)
  const navigate = useNavigate()

  const loginUser=(e)=>{

      e.preventDefault()
      
    fetch("https://reqres.in/api/login",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({
            email:email,
            password:password
          })
        }).then((res)=>res.json())
          .then((res)=>{
                dispatch({type:LOGIN_SUCCESS,payload:{token:res.token}})
                navigate("/dashboard")
          })
          .catch((err)=>console.log(err))
  }


  return (
    <div>
      <form data-testid="login-form" onSubmit={loginUser} >
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" value={email}
             onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input data-testid="password-input" type="password"value={password}
              onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
