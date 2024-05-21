import React from "react";
import "./sign.css";

function page() {
  return (
    <div>
      <img className="mt-[20px] ml-[10px]" src="logo.png"/>
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input name="" type="text" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input name="" type="password" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
       
        <p>
          Don't have an account?{" "}
          
          <a href="" className="a2">
            Sign up!
          </a>
         
        </p>
       
      </div>
    </div>
  );
}

export default page;
