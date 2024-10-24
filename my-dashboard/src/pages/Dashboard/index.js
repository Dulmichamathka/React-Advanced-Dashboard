import React from 'react'
import DashboardBox from './components/dashboardBox';
import { FaCircleUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { IoTimerOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { HiDotsVertical } from "react-icons/hi";
import { Chart } from "react-google-charts";

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { IoEyeSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import skirt from "../../assets/images/skirt.jpg";
import blouse from "../../assets/images/blouse.png";
import blousejacket from "../../assets/images/blousejacket.png";
import Pagination from '@mui/material/Pagination';

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];


export const chartoptions = {
  backgroundColor: 'transparent',
  chartArea: { width: '100%', height: '100%', }, // Adjust the chart area size
  legend: { position: 'right', alignment: 'center' }, // Optional: Move legend to avoid chart overlap
};

const Dashboard = () => {

  
    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [catBy, setCatBy] = useState('');
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

    const tablerows =[
      {id:"1" ,number:"#1", img:skirt},
      {id:"2" ,number:"#2", img:blouse},
      {id:"3" ,number:"#3", img:blousejacket},
      {id:"4" ,number:"#4", img:skirt},
      {id:"5" ,number:"#5", img:blouse},
      {id:"6" ,number:"#6", img:blousejacket},
      {id:"7" ,number:"#7", img:skirt},
      {id:"8" ,number:"#8", img:blouse},
      {id:"9" ,number:"#9", img:blousejacket},
      {id:"10" ,number:"#10", img:blousejacket},

    ]
   

    const ITEM_HEIGHT = 48;

    return (
      <>
        <div className="right-content w-100" >
        
          <div className="row dashboardBoxWrapperRow">
            <div className="col-md-8">
                <div className="dashboardBoxWrapper d-flex">   
                        <DashboardBox color = {["#1da256" ,"#48d483"]} icon ={<FaCircleUser/>} grow={<TrendingUpIcon/>} />     
                        <DashboardBox color = {["#c012e2" ,"#eb64fe"]} icon = {<IoMdCart/>} grow={<TrendingDownIcon/>}/>
                        <DashboardBox color = {["#2c78e5" ,"#60aff5"]} icon = {<MdShoppingBag />} grow={<TrendingDownIcon/>}/>
                        <DashboardBox color = {["#e1950e" ,"#f3cd29"]} icon = {<GiStarsStack/>} grow={<TrendingUpIcon/>}/>         
              </div>
            </div>

            <div className="box-row col-md-4 ">
              <div className="box graphBox">


                 <div className="d-flex align-items-center w-100 bottomElement">
                  <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                  
                  <div className="ms-auto">
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

               <h3 className="text-white font-weight-bold pl-10">$3,787,681.00</h3>
               <p>$3,578.90 in last month</p>
                  
               <Chart
                    chartType="PieChart"
                    data={data}
                    options={chartoptions}
                    width="100%" // Set to 100% for responsiveness
                    height="300px" // Increase the height for better display
                  />


              </div>
            </div>
          </div>
          
          <div className="card shadow border-0 p-3">
            <h3 className='hd'>Best Selling Products</h3>

            <div className="row cardFilters">
              <div className="menu col-md-3">
                <h4>Show by</h4>
                
                <FormControl size="small" className='w-100'>
                <Select
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                 
                  className='w-100'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
              </div>

              <div className="menu col-md-3">
              <h4>CATEGORY BY</h4>
              <FormControl size="small" className='w-100'>
                <Select
                  value={catBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  labelId="demo-select-small-label"
                  className='w-100'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
              </div>

              <div className="menu col-md-3">
                <h4>BRAND BY</h4>
                
                <FormControl size="small" className='w-100'>
                <Select
                  value={showBy}
                  onChange={(e) => setShowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  labelId="demo-select-small-label"
                  className='w-100'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
              </div>

      



            </div>

            <div className="table-responsive mt-3 align-middle">
               <table className="table table-bordered">
                <thead className='thead-dark'>
                  <tr>
                    <th>UID</th>
                    <th style={{width:'230px'}}>PRODUCT</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th>PRICE</th>
                    <th>STOCK</th>
                    <th>RATING</th>
                    <th>ORDER</th>
                    <th>SALES</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                
                <tbody>

                {
                  tablerows.map((tablerow,index) => 
                  <tr key={index}
                      style={{ backgroundColor: index % 2 === 0 ? '#b2b1b1' : '#e0e0e0' }}>
                  <td>{tablerow.number}</td>
                  <td>
                     <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src={tablerow.img}  className='w-100'/>
                        </div>
                      </div>
                      <div className="info">
                          <h6>Tops and skirt set for Female...</h6>
                          <p>Women's exclusive summer Tops and skirt 
                            set for female Tops and skirt set</p>
                      </div>
                     </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div >
                        <del className="old">$19.00</del>
                        <span className="new text-danger">$21.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td >$38k</td> 
                  <td ms-0>
                    <div className="actions d-flex align-items-center align">
                        <Button className='secondary' color="secondary"><IoEyeSharp/></Button>
                        <Button className='success' color="success"><FaPencil/></Button>
                        <Button className='error ' color="error" ><MdDelete/></Button>
                    </div>
                  </td>            
                </tr> )
                }
                  

                  
                 

                </tbody>
               </table> 


              <div className="d-flex tableFooter">

                  <p>showing <b>10</b> of <b>60</b> results </p>
                  <Pagination className='change' count={10} color="primary" 
                  showFirstButton showLastButton /> 
              </div>

            </div>

          </div>

        </div>
      </>
    )
}

export default Dashboard