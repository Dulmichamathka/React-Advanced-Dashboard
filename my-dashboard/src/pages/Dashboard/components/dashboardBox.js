import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { IoTimerOutline } from "react-icons/io5";



const DashboardBox = (props) => {


        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        const options = [
          {item : 'Last Day'},
          {item : 'Last Week'},
          {item : 'Last Month'},
          {item : 'Last Year'},
        ];


        const ITEM_HEIGHT = 48;

        return (
        <Button className="dashboardBox" style={{
          backgroundImage :`linear-gradient(to right, ${props.color[0]} , ${props.color[1]})`
        }} >

          <span className="chart">{props.grow}</span>

          <div className="d-flex w-100">
            <div className="total-users col1">
              <h4 className="text-white">Total Users</h4>
              <span className="text-white">277</span>
            </div>

            <div className="user">
              <span className="icon">{props.icon}</span>
            </div>
          </div>

          
          <div className="d-flex align-items-center w-100 bottomElement">
            <h6 className="text-white mb-0 mt-0">Last Month</h6>
            
            <div className="ms-auto ">
                <Button className='ms-auto toggleIcon' onClick={handleClick}><HiDotsVertical/></Button>

                <Menu
                      id="long-menu"
                      MenuListProps={{
                        'aria-labelledby': 'long-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      slotProps={{
                        paper: {
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                          },
                        },
                      }}
                    >
                      {options.map((option, index) => (
                        <MenuItem key={index} selected={option.item === 'Last Day'} onClick={handleClose}>
                          {<IoTimerOutline />}{option.item}
                        </MenuItem>
                      ))}
                    </Menu>
            </div>

          </div>
          
      </Button>
  )
}

export default DashboardBox