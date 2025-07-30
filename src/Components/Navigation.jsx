import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/cinemaxLogo.png";
import { navItems } from "../assets/Data";
import { Link, Links } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SearchBar from "./SearchBar";
import clickoutHook from "./clickoutHook";
const Navigation = () => {
  const [opendropmenu, setOpenderopMenu] = useState({});
  const[togglebtn,setTogglebtn]=useState(false)
  const[openSearch,setOpenSearch]=useState(false)
  const clickout=useRef(null)
  const clickoutnavbar=useRef(null)
  const mobile=useMediaQuery({query:"(min-width:290px)"})
  const tablet=useMediaQuery({query:"(min-width:768px)"})

  function handleOpendrop(navId) {
    setOpenderopMenu((prev) => ({...prev,[navId]: !prev[navId] }));
  }
  function handleToggle(){
    setTogglebtn(!togglebtn)
    setOpenderopMenu({})
  }
  function removesearch(){
    setOpenSearch(!openSearch)
  }

  clickoutHook(clickout,()=>{
    setOpenderopMenu({})
  })

  clickoutHook(clickoutnavbar,()=>{
    if(mobile){
      setTogglebtn(false)
    }
  })

  return (
    <>
        <div className="fixed w-full z-50 left-0 top-0 backdrop-blur-md bg-bgroundcolor/90 shadow-md flex justify-between items-center px-6 py-3">  
     <span onClick={handleToggle} className="text-white md:hidden cursor-pointer z-50"><i class={togglebtn?"fa-solid fa-xmark":"fa-solid fa-bars"}></i></span>
        <Link to="/">
        <div className="flex gap-1.5 items-center relative z-50">
        <img src={logo} alt="" className="w-7 h-7" />
        <h3 className="text-2xl">Cinemax</h3>
      </div>
        </Link>

        <nav className={tablet?"flex gap-6 items-center z-50": mobile? `mobilenav ${togglebtn?"hidenav":""}`:"" } ref={clickoutnavbar} >
           <ul className={tablet?"flex gap-6 items-center  mt-4.5 z-50":"Navlist"} ref={clickout}>
        {navItems.map((item) => (
          <li className="relative cursor-pointer p-1.5 ">
            {item.children ? (
              <p onClick={() => handleOpendrop(item.id)}>{item.label}{opendropmenu[item.id]?"▲" : "▼"}</p>
            ) : (
              <Link to={item.path}>
                <p onClick={handleToggle}>{item.label}</p>
              </Link>
            )}
            {opendropmenu[item.id] ? <ul className={tablet?"mt-2 absolute bg-bgroundcolor rounded-lg shadow-lg p-2":"static ml-4 mt-2"} >
              {
                item.children.map(child=>(
                  <Link to={child.path}><p onClick={handleToggle} className="px-3 py-1.5 hover:text-Accent hover:bg-white/10 rounded transition" >{child.label}</p></Link>
                ))
              }
            </ul> : ""}
          </li>
        ))}
      </ul>  
      {mobile&&<h1 className="m-auto text-Accent font-bold">Bring Deals Abeg!!</h1>}
        </nav>
        <div onClick={()=>setOpenSearch(!openSearch)}><i class="fa-solid fa-magnifying-glass   text-white text-1xl hover:text-Accent"></i></div>
    </div>
       {
        openSearch&& <SearchBar remove={removesearch}/>
       }
    </>
  );
};

export default Navigation;
