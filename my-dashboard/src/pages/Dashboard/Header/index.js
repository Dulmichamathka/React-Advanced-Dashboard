import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Button from '@mui/material/Button';
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
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { FaShieldAlt } from "react-icons/fa";




const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };


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
            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                 <Button className="rounded-circle me-3" ><MdMenuOpen/></Button>
                 <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                  <Button className="rounded-circle me-3">
                    <MdOutlineLightMode/>
                  </Button>

                  <Button className="rounded-circle me-3" ><MdOutlineShoppingCart/></Button>
                  <Button className="rounded-circle me-3" ><MdOutlineEmail/></Button>
                  <Button className="rounded-circle me-3" ><FaRegBell/></Button>


            <div className="myAccWrapper">
                  <Button className="myAcc d-flex align-items-center " onClick={handleOpenMyAccDrop}>
                    <div className="userImg">
                      <span className="rounded-circle">
                          <img src={profile} alt="Profile" />
                      </span>
                    </div>

                 <div className="userInfo">
                    <h4>Dulmi Chamthaka</h4>
                    <p className="mb-0">@chamathka</p>
                  </div>

                  </Button>

               <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
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



            </div>

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
