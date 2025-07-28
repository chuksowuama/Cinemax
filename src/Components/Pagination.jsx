import React from "react";

const Pagination = ({currentpage,totalPage,onpageChange}) => {
    const Pages= Array.from({length:totalPage},(_,index)=>index+1)
  return (
    <div className="my-10 flex justify-center">
      <ul className="flex gap-3">
       {
        Pages.length<2?"":Pages.map((page)=>(
          <li onClick={()=>onpageChange(page)}
          className={currentpage===page?"px-4 py-2 bg-gray-800 rounded cursor-pointer":"px-4 py-2 bg-gray-700 rounded cursor-pointer"}
          >
            {page}
          </li>
        ))
       }
      </ul>
    </div>
  );
};

export default Pagination;