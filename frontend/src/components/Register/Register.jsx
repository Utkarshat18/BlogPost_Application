import { Link , useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";

const Register = () => {
    const navigate=useNavigate();
  const [registerinfo, setregisterinfo] = useState({
    name: "",
    role: "user",
    email: "",
    password: "",
  });

  const handlechange=(e)=>{
    const {name,value}=e.target;
    console.log(name,value);
    const copyregisterinfo={...registerinfo};
    copyregisterinfo[name]=value;
    setregisterinfo(copyregisterinfo);
  }

  const handleregister=async(e)=>{
    e.preventDefault();
    const {name,role,email,password}=registerinfo;
    console.log(registerinfo)
    if(!name || !role || !email || !password)
    {
        alert("Please fill all the fields");
        return;
    }
    try{
        const url="http://localhost:8000/auth/register"
        const response=await fetch(url,{
            method:"POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(registerinfo)
        });

        const result=await response.json();
        const{success,message}=result;
        if(success)
        {
            alert(message);
            navigate("/login");
        }else{
            alert(message);
        }
    }catch(err){
        alert("Facing some issue");
        return;
    }
  }
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <p className="register-message">
          Create an account to start your reading 🤓!
        </p>
        <form onSubmit={handleregister}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={registerinfo.name}
              onChange={handlechange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={registerinfo.email}
              onChange={handlechange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={registerinfo.password}
              onChange={handlechange}
              placeholder="Enter a password"
              required
            />
          </div>

          <button type="submit" className="btn-register">
            Register
          </button>
        </form>

        <p className="register-message">
          Already have an account? Please <Link to="/login">Login</Link> here
        </p>
      </div>
    </div>
  );
};

export default Register;
