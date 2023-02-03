import React, {useState, useEffect} from 'react'
import "../styles/login.css"
import {Link, useNavigate} from "react-router-dom"
// import { toast } from 'react-toastify'
import Axios from "axios";
import { toast } from 'react-toastify';


function Login() {

  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");



  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8800/login", {
      phone_number: phone_number,
      password: password,
      

    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0]);

        localStorage.setItem("user",JSON.stringify(response.data[0]));
        console.log(response.data[0])

        toast.success("welcome to Bonka")
        navigate('/profile');
        
      }
    });
   
  };

  useEffect(() => {
    Axios.get("http://localhost:8800/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].phone_number);
      }
    });
  }, []);

  return (
    <>
    {
      <div className='auth'>
        <h1>
          Login
        </h1>
        <form>
        <input
          required
          type="number"
          onChange={(e) => {
            setPhone_number(e.target.value);
          }}
          placeholder="phone number"
          name="phone_number"
          
        />
        <input
          required
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          name="password"
          
        />
        <button onClick={login}>Log In</button>
          <p>{loginStatus}</p>
          <span>
            No Account yet? <Link to='/signup'>Register</Link>
          </span>
        </form>
    </div>
  }
    </>
  )
}

export default Login