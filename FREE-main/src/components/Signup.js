import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import pdt1 from "./Images/Rectangle 1.png"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        // <div className="login">

        //     <h1>Signup</h1>

        //     <form action="POST">
        //         <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
        //         <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        //         <input type="submit" onClick={submit} />

        //     </form>

        //     <br />
        //     <p>OR</p>
        //     <br />

        //     <Link to="/">Login Page</Link>

        // </div>
        <div>
        <div className="main-login">
          <div className="left-login">
            <h1> login<br />Welcome to proton crud</h1>
            <img src={pdt1} className="left-login-image" alt="login" />
          </div>
          <form action="POST">
          <div className="right-login">
            <div className="card-login">
              <h1>LOGIN</h1>
              <div className="textfield">
                <label htmlFor="usuario">Email</label>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
              </div>
              <div className="textfield">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
              </div>
           
               <input type="submit" onClick={submit} />
               
               <br />
             <p>OR</p>
            <br />
            
            <Link to="/"style={{color: 'White'}}>Login Page</Link>
            </div>
          </div>
          </form>
        </div>
      </div>
    )
}

export default Login