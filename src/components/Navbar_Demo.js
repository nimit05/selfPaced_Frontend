import React,{useState} from "react";

const App = () => {
    return (
      
        <Navbar>
            <Navitem icon = "😋"></Navitem>
            <Navitem icon = "😋"></Navitem>
            <Navitem icon = "👨" name = "nimit05">
                <Dropdown />
            </Navitem>
        </Navbar>
      
    )
}

const Navbar = (props) => {
    return(
        <nav className = "navbar">
            <ul className = "navbar-nav">{props.children}</ul>
        
        </nav>
    )
}

const Navitem = (props) => {

const [open,setOpen] = useState(false);

  return(
      <li className = "nav-item">
      
        <a href ="#" className = "icon-button" onClick = {() => setOpen(!open)}>
       
            {props.icon}
        </a>
        
        {open && props.children}
        <span className= "name" >{props.name}</span>
      </li>
  )
}

const Dropdown = () => {

    function Dropdownitem(props) {
        return (
            <a className = "menu-item" >
                <span className = "icon-button">{props.left}</span>
                {props.children}
            </a>
        )
    }
    return(
        <div className = "dropdown"> 
        <Dropdownitem left = "👨" ><span onClick = {() => window.location.href = "/myprofile"} >My Profile</span></Dropdownitem>
        <Dropdownitem left = "👨" >My </Dropdownitem>
        
        </div>
    )
}

export default App;