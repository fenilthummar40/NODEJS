import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock authentication (Replace with real authentication logic)
    if (email === "user@example.com" && password === "password") {
      navigate("/Dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="l-1">
        <div className="main-3">
      <form className="l-11"
        onSubmit={handleSubmit} 
       
      >
        <h2 className="l-111" >Login</h2>
        <div className="la-1">
          <label className="la-11" >Email</label>
          <input className="la-111"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
           
            required
          />
        </div>
        <div className="la-1">
          <label  className="la-11">Password</label>
          <input className="la-111" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          
            required
          />
        </div>
        <p className="laa-1"><a href="/SingupForm">SingupForm</a></p>
        <button className="laa-11"
          type="submit" 
       
        >
          Login
        </button>
      </form>
    </div>  
    </div>
  );
};

export default LoginForm;
