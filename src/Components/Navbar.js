import React from 'react'
import {IoIosMenu} from "react-icons/io";
import {Link} from 'react-router-dom';


function Navbar() {
    return (
       <>
       <div className="navbar">
           <Link to="#" className='menu-bars'></Link>
           <IoIosMenu/>
       </div>
       </>
    )
}

export default Navbar
