import React from 'react'
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const SideBarData=[{
    title:'Home',
    path:'/',
    icon:<AiIcons.AiFillHome/>,
    cName:'nav-text'
},
{
    title:'Reports',
    path:'/reports',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
},
{
    title:'Products',
    path:'/products',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
},
{
    title:'Team',
    path:'/team',
    icon:<IoIcons.IoMdPeople/>,
    cName:'nav-text'
},
{
    title:'Messages',
    path:'/messages',
    icon:<IoIcons.IoIosFolderOpen/>,
    cName:'nav-text'
},
{
    title:'Support',
    path:'/support',
    icons:<AiIcons.AiOutlineCloud/>,
    cName:'nav-text'
}
]