import { NavLink } from "react-router-dom";

const navBarStyles = ({ isActive }) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal',
        fontSize: isActive ? '20px' : '16px',
        color: isActive ? 'blue' : 'black',
        textDecoration: isActive ? 'none' : 'underline'
    }
}

function NavBar() {
    return(
        <nav>
        <NavLink style ={navBarStyles} to="/">Home</NavLink >
        <br/>
        <NavLink style ={navBarStyles} to="/homeDetails">HomeDetails</NavLink >
        <br/>
        <NavLink style ={navBarStyles} to="/about">About</NavLink >
        <br/>
        <NavLink style ={navBarStyles} to="/products">Products</NavLink >
        <br/>
        <NavLink style ={navBarStyles} to="/profile">Profile</NavLink >
        </nav>
    )
  
}
export default NavBar