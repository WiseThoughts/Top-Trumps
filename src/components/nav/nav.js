import { Link } from "react-router-dom";
import React from "react";
import { Wrapper, NavbarItems, Logo, } from "./nav.styled";
import "./nav.css";
import logo from "../images/wisethoughts blue-redpink.png";




const Nav = () => {


    return (

    <Wrapper className="sizing">
        <Logo src={logo} />
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/profile"><NavbarItems>Profile</NavbarItems></Link>
        <Link className="navBarLinks" to="/listing"><NavbarItems>Listing</NavbarItems></Link>
    </Wrapper>
);
};

export default Nav;

