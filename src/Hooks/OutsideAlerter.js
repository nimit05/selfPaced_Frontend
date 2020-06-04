import {useRef , useState, useEffect} from 'react'

const OutsideAlerter = () => {
    const ref = useRef(null)
    const [open,setOpen] = useState(false)

  const handleOutsideClick = (event) => {
      if(ref.current && !ref.current.contains(event.target)) setOpen(false)
  }

  const handleKeyPress = (event ) => {
    if(event.key == 'Escape') setOpen(false)
}



 useEffect(() => {
    document.addEventListener("click",handleOutsideClick,true)
    document.addEventListener("keydown",handleKeyPress,true)
    return () => {
        document.removeEventListener("click",handleOutsideClick,true)
        document.removeEventListener("keydown",handleKeyPress,true)
    }
 },[ref])

    return {open,setOpen,ref}
}

export default OutsideAlerter;