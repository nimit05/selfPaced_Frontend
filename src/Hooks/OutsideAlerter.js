import React,{useRef , useState, useEffect} from 'react'

const OutsideAlerter = () => {
    const ref = useRef(null)
    const [open,setOpen] = useState(false)

  const handleOutsideClick = (event) => {
      if(ref.current && !ref.current.contains(event.target)) setOpen(false)
  }

 useEffect(() => {
    document.addEventListener("click",handleOutsideClick,true)
    return () => {
        document.removeEventListener("click",handleOutsideClick,true)
    }
 },[ref])

    return {open,setOpen,ref}
}

export default OutsideAlerter;