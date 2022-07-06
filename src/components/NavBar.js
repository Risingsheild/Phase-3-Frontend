import {NavLink} from "react-router-dom"
function NavBar(){

    return (
        <div className="navBar">
            <NavLink to='/' className="links">HOME</NavLink>
            <NavLink to='/add-a-beer' className="links">New Beer Form</NavLink>
        </div>
    )
}

export default NavBar