import React, { useEffect } from 'react'

const clickoutHook = (ref,callbackfunc) => {
  useEffect(()=>{
    function handleClickoutside(e){
       if(ref.current && !ref.current.contains(e.target)){
          callbackfunc()
       }
    }
    document.addEventListener("click",handleClickoutside)
    return ()=>{
        document.removeEventListener("click",handleClickoutside)
    }
  },[ref,callbackfunc])
}

export default clickoutHook
