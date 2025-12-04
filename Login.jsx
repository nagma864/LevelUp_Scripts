import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import{useNavigate}from "react-router-dom";
function Lgin() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const  navigate =useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await axios.post('http://localhost;3001/login', { name, email, password });
        console.log(response.data);
  
      } catch (error) {
        console.error("Error:", error);
        then(result=>console.log(result))
        navigate('/Login')
      }
    };
  
    return (
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/login">Already have an account? Login</Link>
      </div>
    );

        

    
}

export default Login;