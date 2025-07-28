import React, { useEffect, useState } from "react";
import logo from "../assets/cinemaxLogo.png";
import { navItems } from "../assets/Data";
import { Link, Links } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SearchBar from "./SearchBar";
const Navigation = () => {
  const [opendropmenu, setOpenderopMenu] = useState(false);
  const[togglebtn,setTogglebtn]=useState(false)
  const mobile=useMediaQuery({query:"(min-width:375px)"})
  const tablet=useMediaQuery({query:"(min-width:768px)"})

  function handleOpendrop(navId) {
    setOpenderopMenu((prev) => ({ [navId]: !prev[navId] }));
  }
  function handleToggle(){
    setTogglebtn(!togglebtn)
    setOpenderopMenu(false)
  }

  return (
    <div className="fixed w-full z-60 left-0 top-0 bg-bgroundcolor flex justify-between items-center px-5 py-2">
        <Link to="/">
        <div className="flex gap-1.5 items-center relative">
        <img src={logo} alt="" className="w-7 h-7" />
        <h3 className="text-2xl">Cinemax</h3>
      </div>
        </Link>
       <span onClick={handleToggle} className="text-white md:hidden cursor-pointer"><i class={togglebtn?"fa-solid fa-bars":"fa-solid fa-xmark"}></i></span>
        <nav className={tablet?"flex gap-2.5 items-center z-50":`mobilenav ${togglebtn?"":"hidenav"}`} >
           <ul className={tablet?"flex gap-2.5 items-center  mt-4.5":"Navlist"}>
        {navItems.map((item) => (
          <li className="relative cursor-pointer p-1.5 ">
            {item.children ? (
              <p onClick={() => handleOpendrop(item.id)}>{item.label}{opendropmenu[item.id]?"":"v"}</p>
            ) : (
              <Link to={item.path}>
                <p onClick={handleToggle}>{item.label}</p>
              </Link>
            )}
            {opendropmenu[item.id] ? <ul className={tablet?"mt-2 absolute":"static ml-15 mt-2 z-50"}>
              {
                item.children.map(child=>(
                  <Link to={child.path}><p onClick={handleToggle} className="md:hover:text-Accent sm:hover:text-black hover:font-bold" >{child.label}</p></Link>
                ))
              }
            </ul> : ""}
          </li>
        ))}
      </ul>
        </nav>
        <SearchBar/>
    </div>
  );
};

export default Navigation;
