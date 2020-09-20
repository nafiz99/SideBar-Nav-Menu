import React,{useState} from 'react'
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {SideBarData} from './SideBarData'
import './Navbar.css'


function Navbar() {
    const[sidebar,setSideBar]=useState(false)
    const showSideBar=()=>setSideBar(!sidebar)
    
    return (
       <>
       <div className="navbar">
           <Link to="#" className='menu-bars'></Link>
           <IoIcons.IoIosMenu onClick={showSideBar}/>
       </div>
       <nav className={sidebar?'nav-menu-active':'nav-menu'}>
           <ul className='nav-menu-items'>
               <li className='nav-bar-toggle'>
                   <Link to='#' className='menu-bars'>
                       <AiIcons.AiOutlineCloseCircle/>

                   </Link>
                   {SideBarData.map((item,index)=>{
                       return (
                           <li key={index} className={item.cName}>
                               <Link to={item.path}>
                                   {item.icon}
                                   <span>{item.title}</span>
                               </Link>
                           </li>
                       )
                   })}
               </li>
           </ul>
       </nav>
       </>
    )
}

export default Navbar
