import React, { useContext, useEffect, useState } from 'react'
import logo from "../../assets/images/logo.png";
import background from "../../assets/images/background.webp"
import { MyContext } from '../../App';
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Google from '../../assets/images/Google.png';

const Login = () => {

  const [inputIndex, setInputIndex] =useState(null);
  const context = useContext(MyContext);
  const [isShowPassword, setIsShowPassword] = useState(false);

  useEffect (()=>{
    context.setIsHideSidebarAndHeader(true);
  },[])

  const focusInput = (index) =>{
    setInputIndex(index)
  }

  

  return (
    <>
    <img src={background}  className='loginPatern'/>
      <section className="loginSection">
        <div className="loginBox">

            <div className="logo text-center">
              <img src={logo} width="60px" />
              <h5 className="fw-bold mt-2">
                Login to Hatash
              </h5>
            </div>

            <div className="wrapper mt-3 card border p-5">
              <form >  

              <div className={`form-group  position-relative ${inputIndex === 0 && 'focus'} `}>
                <span className='icon'><FaEnvelope/></span> 
                <input type="text" className="form-control" 
                placeholder= "enter your email" onFocus={() => focusInput(0)} onBlur={ () =>setInputIndex(null)}
                autoFocus/>
              </div>
              

              <div className={`form-group position-relative ${inputIndex === 1 && 'focus'} `}>
                <span className='icon'><RiLockPasswordFill/></span> 
                <input type={`${isShowPassword === true ? 'text' : 'password'  }`} className="form-control" 
                placeholder= "enter your password" onFocus={() => focusInput(1)} onBlur={ () =>setInputIndex(null)}/>


                <span className="toggleShowPassword" onClick={() => setIsShowPassword(!isShowPassword)}>

                  {
                    isShowPassword === true ?  <FaEye/> : <IoEyeOff/>
                  }
                  
                </span>

              </div>
              <div className="form-group">
                <Button className ="btn-blue btn-lg w-100 btn-big">Sign In</Button>
              </div>
              
              <div className="form-group mt-2 text-center mb-0">
                <Link to={'/forgot-password'} className='link'>
                    FORGOT PASSWORD
                </Link>

                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                    <span className="line"></span>
                    <span className="txt">or</span>
                    <span className="line"></span>
                </div>

                <Button variant="outlined" className='w-100 btn-lg btn-big loginWithGoogle'>
               
                <img src={Google} width= '25px' /> &nbsp; Sign In With Google
                </Button>
              </div>
  

              </form>

            </div>

            <div className="wrapper mt-3 card border p-3 footer ">
              <span className="text-center">
                  Don't have an account?
                  <Link to ={'/signUp'} className='link color'>Register</Link>
              </span>

            </div>

        </div>
    </section>
    </>
  )
}

export default Login