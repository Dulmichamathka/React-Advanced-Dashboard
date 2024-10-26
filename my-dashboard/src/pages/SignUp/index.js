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
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TiHome } from "react-icons/ti";



const SignUp = () => {

  const [inputIndex, setInputIndex] =useState(null);
  const context = useContext(MyContext);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword,setIsShowConfirmPassword] = useState(false)

  useEffect (()=>{
    context.setIsHideSidebarAndHeader(true);
    window.scrollTo(0,0);
  }, [])

  const focusInput = (index) =>{
    setInputIndex(index)
  }

  

  return (
    <>

    <img src={background}  className='loginPatern'/>
      <section className="loginSection signUpSection">

        <div className="row">
            <div className="col-md-8 d-flex align-items-center flex-column part1 justify-content-center">
                 <h1>BEST UX/UI FASHION <span className="text-sky">ECOMMERCE DASHBOARD</span>  & ADMIN PANEL</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                  the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


            <div className='w-100 mt-4' >
               <Link to={'/'}><Button className='btn-blue btn-lg btn-big'><TiHome/>Go to Home</Button></Link>  
            </div>


        </div>

            <div className="col-md-4 pr-0">
                  
        <div className="loginBox">

                  <div className="logo text-center">
                        <img src={logo} width="60px" />
                        <h5 className="fw-bold mt-2">
                          Register a new account
                        </h5>
                      </div>
                  <div className="wrapper mt-3 card border p-5">

                <form >  

                    <div className={`form-group  position-relative ${inputIndex === 1 && 'focus'} `}>
                      <span className='icon'><FaUserCircle/></span> 
                      <input type="text" className="form-control" 
                      placeholder= "enter your name" onFocus={() => focusInput(1)} onBlur={ () =>setInputIndex(null)} autoFocus/>
                    </div>

                    <div className={`form-group  position-relative ${inputIndex === 2 && 'focus'} `}>
                      <span className='icon'><FaEnvelope/></span> 
                      <input type="text" className="form-control" 
                      placeholder= "enter your email " onFocus={() => focusInput(2)} onBlur={ () =>setInputIndex(null)}/>
                    </div>
                    

                    <div className={`form-group position-relative ${inputIndex === 3 && 'focus'} `}>
                      <span className='icon'><RiLockPasswordFill/></span> 
                      <input type={`${isShowPassword === true ? 'text' : 'password'  }`} className="form-control" 
                      placeholder= "enter your password" onFocus={() => focusInput(3)} onBlur={ () =>setInputIndex(null)}/>


                      <span className="toggleShowPassword" onClick={() => setIsShowPassword(!isShowPassword)}>

                        {
                          isShowPassword === true ?  <FaEye/> : <IoEyeOff/>
                        }
                        
                      </span>

                    </div>

                    <div className={`form-group position-relative ${inputIndex === 4 && 'focus'} `}>
                      <span className='icon'><IoShieldCheckmarkSharp/></span> 
                      <input type={`${isShowConfirmPassword === true ? 'text' : 'password'  }`} className="form-control" 
                      placeholder= "confirm your password" onFocus={() => focusInput(4)} onBlur={ () =>setInputIndex(null)}/>


                      <span className="toggleShowPassword" onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>

                        {
                          isShowConfirmPassword === true ?  <FaEye/> : <IoEyeOff/>
                        }
                        
                      </span>

                    </div>

                    <FormControlLabel  control={<Checkbox />} label="I agree to the all terms & conditions" />


                    <div className="form-group mt-2">
                      <Button className ="btn-blue btn-lg w-100 btn-big">Sign Up</Button>
                    </div>
                    
                    <div className="form-group mt-2 text-center mb-0">
                  
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

                      <span className="text-center d-block mt-5">
                          Already Have an Account?
                          <Link to ={'/login'} className='link color'>Sign In</Link>
                      </span>

                    </div>
              
                  </div>
            </div>
        </div>

    </section>

    </>
  )
}

export default SignUp