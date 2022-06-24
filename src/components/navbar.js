import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Navbar.css'
import { GrFormClose } from 'react-icons/gr'
import { BiMenu } from 'react-icons/bi'
import NavUsuario from "./NavUsuario";
import Separador from './Separador'
export default function Navbar(){
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return(
    <>
      <div className="navbar shadow-lg">
        <Link to='#' className="menu-bars navbar-open">
          <div className="menu-btn">
            <BiMenu onClick={showSidebar} />
          </div>
        </Link>
      </div>
      <nav className={sidebar? 'nav-menu active':'nav-menu'}>
        
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to='#' className="menu-bars">
              <GrFormClose />
            </Link>
          </li>
          <li>
            <NavUsuario></NavUsuario>
            <Separador></Separador>
          </li>
          {SidebarData.map((e, index)=>{
            return (
              <Link to={e.path}>
                <li key={index} className={e.class}>
                    <div className="flex flex-row">{e.icon}<span className="ml-2">{e.title}</span></div>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <div className={sidebar? 'dark active':'dark'} onClick={showSidebar}></div>
    </>
  );
}