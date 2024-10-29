import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../../../components/SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import profile from "../../../assets/images/profile.jpg"


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import { FaShieldAlt } from "react-icons/fa";
import { MyContext } from "../../../App";
import UserAvatarImgComponent from "../components/userAvatarImg";




const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationDrop, setisOpennotificationDrop] = useState(null);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationDrop);

  const context = useContext(MyContext);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpennotificationsDrop = (event) => {
    setisOpennotificationDrop(event.currentTarget);
  };

  const handleClosenotificationsDrop = () =>{
    setisOpennotificationDrop(false)
  }




  return (
    <>
      <header className="d-flex align-items-center">
        <div className='container-fluid w-100'>
          <div className="row d-flex align-items-center">
            {/* Logo Wrapper */}
            <div className="col-sm-2 part1">
              <Link to={'/'} className="d-flex align-items-center logo">
                <img src={logo} alt="Logo" />
                <span className="img-name">HOTASH</span>
              </Link>
            </div>

            {/* Menu Button */}
            <div className="col-sm-3 d-flex align-items-center part2 ">
                 <Button className="rounded-circle me-3" onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)} >
                  {
                    context.isToggleSidebar === false ? <MdMenuOpen/> : <IoMenu/>
                  }
                  </Button>
                 <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                  <Button className="rounded-circle me-3"  onClick={() => context.setThemeMode(!context.themeMode)}> <MdOutlineLightMode/></Button>

                  <Button className="rounded-circle me-3" ><MdOutlineShoppingCart/></Button>
                  <Button className="rounded-circle me-3" ><MdOutlineEmail/></Button>
                  

            <div className="dropdownWrapper position-relative">
              <Button className="rounded-circle me-3" 
                    onClick={handleOpennotificationsDrop}><FaRegBell/></Button>
                    <Menu
                            anchorEl={isOpennotificationDrop}
                            className="notifications dropdown-list"
                            id="notifications"
                            open={openNotifications}
                            onClose={handleClosenotificationsDrop}
                            onClick={handleClosenotificationsDrop}
                            slotProps={{
                              paper: {
                                elevation: 0,
                                sx: {
                                  overflow: 'visible',
                                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                  mt: 1.5,
                                  '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                  },
                                  '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                  },
                                },
                              },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                          >
                            <div className="head ">
                              <h4>Notifications</h4>
                            </div>
                          
                       <div className="scroll">
                       <MenuItem onClick={handleClosenotificationsDrop}>
                              <div className=" d-flex align-items-center ">
                                <div>
                                    <UserAvatarImgComponent img={profile}/>
                                </div> 

                                <div className="dropdownInfo">

                                  <h4><span>
                                    <b>Niluka </b>added to her favourite list 
                                    <b> accepted your request</b>
                                  </span></h4>

                                  <p className="text-sky">
                                    few second ago
                                  </p>                 

                                </div>
                                    
                              </div>
                            </MenuItem>
                            
                            <MenuItem onClick={handleClosenotificationsDrop}>
                              <div className=" d-flex align-items-center ">
                                <div>
                                      <div className="userImg">
                                            <span className="rounded-circle">
                                                    <img src={profile} alt="" />
                                              </span>  
                                        </div>
                                </div> 

                                <div className="dropdownInfo">
                                  <h4><span>
                                    <b>Niluka </b>added to her favourite list 
                                    <b> accepted your request</b>
                                  </span></h4>

                                  <p className="text-sky">
                                    few second ago
                                  </p>
                                

                                </div>
                                    
                              </div>
                            </MenuItem>

                            <MenuItem onClick={handleClosenotificationsDrop}>
                              <div className=" d-flex align-items-center ">
                              <div>
                                    <div className="userImg">
                                          <span className="rounded-circle">
                                                  <img src={profile} alt="" />
                                            </span>  
                                      </div>
                              </div> 

                                <div className="dropdownInfo">
                                  <h4><span>
                                    <b>Niluka </b>added to her favourite list 
                                    <b> accepted your request</b>
                                  </span></h4>

                                  <p className="text-sky">
                                    few second ago
                                  </p>
                                

                                </div>
                                    
                              </div>
                            </MenuItem>

                            <MenuItem onClick={handleClosenotificationsDrop}>
                              <div className=" d-flex align-items-center ">
                              <div>
                                    <div className="userImg">
                                          <span className="rounded-circle">
                                                  <img src={profile} alt="" />
                                            </span>  
                                      </div>
                              </div> 

                                <div className="dropdownInfo">
                                  <h4><span>
                                    <b>Niluka </b>added to her favourite list 
                                    <b> accepted your request</b>
                                  </span></h4>

                                  <p className="text-sky">
                                    few second ago
                                  </p>
                                

                                </div>
                                    
                              </div>
                            </MenuItem>

                            <MenuItem onClick={handleClosenotificationsDrop}>
                              <div className=" d-flex align-items-center ">
                              <div>
                                    <div className="userImg">
                                          <span className="rounded-circle">
                                                  <img src={profile} alt="" />
                                            </span>  
                                      </div>
                              </div> 

                                <div className="dropdownInfo">
                                  <h4><span>
                                    <b>Niluka </b>added to her favourite list 
                                    <b> accepted your request</b>
                                  </span></h4>

                                  <p className="text-sky">
                                    few second ago
                                  </p>
                                

                                </div>
                                    
                              </div>
                            </MenuItem>
                            <MenuItem onClick={handleClosenotificationsDrop}>
                              <div className=" d-flex align-items-center ">
                              <div>
                                    <div className="userImg">
                                          <span className="rounded-circle">
                                                  <img src={profile} alt="" />
                                            </span>  
                                      </div>
                              </div> 

                                <div className="dropdownInfo">
                                  <h4><span>
                                    <b>Niluka </b>added to her favourite list 
                                    <b> accepted your request</b>
                                  </span></h4>

                                  <p className="text-sky">
                                    few second ago
                                  </p>
                                

                                </div>
                                    
                              </div>
                            </MenuItem>

                            <MenuItem onClick={handleClosenotificationsDrop}>
                              <div className=" d-flex align-items-center ">
                              <div>
                                    <div className="userImg">
                                          <span className="rounded-circle">
                                                  <img src={profile} alt="" />
                                            </span>  
                                      </div>
                              </div> 

                                <div className="dropdownInfo">
                                  <h4><span>
                                    <b>Niluka </b>added to her favourite list 
                                    <b> accepted your request</b>
                                  </span></h4>

                                  <p className="text-sky">
                                    few second ago
                                  </p>
                                

                                </div>
                                    
                              </div>
                            </MenuItem>


                            <MenuItem onClick={handleClosenotificationsDrop}>
                              <div className=" d-flex align-items-center ">
                              <div>
                                    <div className="userImg">
                                          <span className="rounded-circle">
                                                  <img src={profile} alt="" />
                                            </span>  
                                      </div>
                              </div> 

                                <div className="dropdownInfo">
                                  <h4><span>
                                    <b>Niluka </b>added to her favourite list 
                                    <b> accepted your request</b>
                                  </span></h4>

                                  <p className="text-sky">
                                    few second ago
                                  </p>
                                

                                </div>
                                    
                              </div>
                            </MenuItem>


                            <MenuItem onClick={handleClosenotificationsDrop}>
                              <div className=" d-flex align-items-center ">
                              <div>
                                    <div className="userImg">
                                          <span className="rounded-circle">
                                                  <img src={profile} alt="" />
                                            </span>  
                                      </div>
                              </div> 

                                <div className="dropdownInfo">
                                  <h4><span>
                                    <b>Niluka </b>added to her favourite list 
                                    <b> accepted your request</b>
                                  </span></h4>

                                  <p className="text-sky">
                                    few second ago
                                  </p>
                                

                                </div>
                                    
                              </div>
                            </MenuItem>
                       </div>

                      <div className="button px-2 pt-1  w-100">
                          <Button className="btn-blue w-100">
                                  View all notifications
                          </Button>
                      </div>

                    </Menu>


             
            </div>

            {
              context.isLogin === true ? 
              <Link to = {'/login'}>
                <Button className="btn-blue btn-lg btn-round"> Sign In </Button>
              </Link> 
              :

              <div className="myAccWrapper">
                 <Button className="myAcc d-flex align-items-center " onClick={handleOpenMyAccDrop}>
                    <div>
                         <UserAvatarImgComponent img={profile}/>
                    </div>

                 <div className="userInfo">
                    <h4>Dulmi Chamthaka</h4>
                    <p className="mb-0">@chamathka</p>
                  </div>

                  </Button>

                  <Menu
                              anchorEl={anchorEl}
                              className="MyAcc"
                              id="account-menu"
                              open={openMyAcc}
                              onClose={handleCloseMyAccDrop}
                              onClick={handleCloseMyAccDrop}
                              slotProps={{
                                paper: {
                                  elevation: 0,
                                  sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                      width: 32,
                                      height: 32,
                                      ml: -0.5,
                                      mr: 1,
                                    },
                                    '&::before': {
                                      content: '""',
                                      display: 'block',
                                      position: 'absolute',
                                      top: 0,
                                      right: 14,
                                      width: 10,
                                      height: 10,
                                      bgcolor: 'background.paper',
                                      transform: 'translateY(-50%) rotate(45deg)',
                                      zIndex: 0,
                                    },
                                  },
                                },
                              }}
                              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                            
                              <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                  <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                My Account
                              </MenuItem>
                              <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                  <FaShieldAlt  />
                                </ListItemIcon>
                                Settings
                              </MenuItem>
                              <MenuItem onClick={handleCloseMyAccDrop}>
                                <ListItemIcon>
                                  <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                              </MenuItem>

                  </Menu>




            </div>
            }

           



            



            </div>

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
