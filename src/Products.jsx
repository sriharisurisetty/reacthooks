import { Link, Outlet } from "react-router-dom"

function products(){
    return(
    <>
    <nav>
    <Link to ="/products/featured">Featured</Link> 
    <br/>
    <Link to="/products/new">new </Link>
    </nav>
    <Outlet/>
    </>
    )
}

export default products