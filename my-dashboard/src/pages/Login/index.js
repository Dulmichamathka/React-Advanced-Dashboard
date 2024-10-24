import React from 'react'
import logo from "../../../assets/images/logo.png";

const Login = () => {
  return (
    <section className="loginSection">
        <div className="loginBox">
            <div className="logo text-center">
              <img src={logo} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Login