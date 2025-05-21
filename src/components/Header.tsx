import { NavLink } from "react-router-dom";

const Header=()=>{
return(
<header>
    <h3>Fatima</h3>
    <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/menu'}>About</NavLink>
        <NavLink to={'/product'}>About</NavLink>
    </nav>
</header>
)
}
export default Header;