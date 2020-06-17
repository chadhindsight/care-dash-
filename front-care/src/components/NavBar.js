import React, {useState }from 'react';
import { Link, Redirect } from 'react-router-dom';
import actions from '../services/index';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const logOut = async () => {
        await actions.logout()
        props.userSet({ email: null, createdAt: null, updatedAt: null, _id: null }) //FIX 
        return <Redirect to='/target' />
    }

    return (
        <>
            <MDBNavbar id="nav" color="indigo" dark expand="md" >
               <Link to='/'> <MDBNavbarBrand>
                    <strong className="white-text">Care-Dash</strong>
                </MDBNavbarBrand></Link>
                <MDBNavbarToggler onClick={()=> setIsOpen(!isOpen)} />
                 <MDBCollapse id="navbarCollapse3"  isOpen={isOpen} navbar> 
                    <MDBNavbarNav left onClick={() => setIsOpen(!isOpen)} > 
                        <MDBNavItem className="nav-item" >
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem >
                            <MDBNavLink to="/">Signout</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem >
                            <MDBNavLink to="/login">Login</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem >
                            <MDBNavLink to="/signup">Signup</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem >
                            <MDBNavLink to="/order"><FontAwesomeIcon icon={faCartPlus}/></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            {/* <MDBFormInline waves>
                            </MDBFormInline> */}
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            {/* <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/" onClick={logOut}>Logout</Link>
            <Link to="/order">View Cart</Link> */}
        </>
    );
};

export default NavBar;
