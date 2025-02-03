import { useState, useEffect } from "react";
import './SingupForm.css'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Load saved data from localStorage when component mounts
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Signup successful! Data saved in localStorage.");
  };

  return (
    <div className="s-1">
        <div className="main-2">
      <h2 className="s-11">Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="s-111">
          Name:
          <input className="s-1111" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label  className="s-111">
          Email:
          <input  className="s-1111" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label  className="s-111">
          Password:
          <input  className="s-1111" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <p className="sa-1"><a href="LoginForm">Login here</a></p>
        <button className="sa-11" type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;
