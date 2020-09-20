import React,{useState} from 'react'
import {IoIosMenu} from "react-icons/io";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {Link} from 'react-router-dom';


function Navbar() {
    const[sidebar,setSideBar]=useState(false)
    const showSideBar=()=>setSideBar(!sidebar)
    
    return (
       <>
       <div className="navbar">
           <Link to="#" className='menu-bars'></Link>
           <IoIosMenu onClick={showSideBar}/>
       </div>
       <nav className={sidebar?'nav-menu-active':'nav-menu'}>
           <ul className='nav-menu-items'>
               <li className='nav-bar-toggle'>
                   <Link to='#' className='menu-bars'>
                       <AiOutlineCloseCircle/>

                   </Link>
               </li>
           </ul>
       </nav>
       </>
    )
}

export default Navbar
