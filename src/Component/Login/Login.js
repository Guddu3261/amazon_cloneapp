import React ,{useState}from 'react';
import "./Login.css";
import { Link ,useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate = useNavigate()

  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(auth=>{
      navigate("/")
    }).catch((error)=>{
      alert(error.message)
    })

  }
  const register=(e)=>{
    e.preventDefault();
 auth.createUserWithEmailAndPassword(email,password)
 .then((auth)=>{
  // it successfully register
  if(auth){
    navigate("/")
    console.log("Successfully register")
  }
  console.log(auth)
 }).catch((error)=>{
      alert(error.message)
      // console.log(error.message)
 })
  }
  return (
    <div className='login' >
       <Link to="/">
       <img
      className="login_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="#"
      />
       </Link>
       <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />

          <h5>Password</h5>
            <input
              type='password'
              value={password}
              onChange={e=>setPassword(e.target.value)}
              />
              <button className='login_signInButton'
              type="submit"
              onClick={signIn}
              >Sign in</button>
        </form>
        <p>
          By signing-in your agree to amazon's
          Conditions of USe & Sale.Please see 
          our privacy Notice,our Cookies Notice
          and our Interest-Based Ads Notice
        </p>
        <button className="login_registerButton"
          onClick={register}
         >Create your amazon account</button>
       </div>
        
    </div>
  )
}

export default Login;
