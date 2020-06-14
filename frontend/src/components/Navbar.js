import React, { Component } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBFormInline,
    MDBBtn, MDBIcon, MDBContainer,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from "../assets/sitelogo.jpg"


class Navbar extends Component {constructor(props) {
    super(props);
    this.state = {
        collapse: false,
    };
    this.onClick = this.onClick.bind(this);
}

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const bgBlack = {backgroundColor: '#000000'}
        const container = {height: 1300}
        return(
            <div>
                <Router>
                    <header>
                        <MDBNavbar style={bgBlack}dark expand="md" scrolling fixed="top">
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem >
                                        <MDBBtn color="primary"  a href="/">Home</MDBBtn>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBBtn color="primary"  a href="/categories">Categories</MDBBtn>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarBrand href="/">
                                    <strong>ULTIMATE GAMER</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBBtn color="primary"  a href="/login">Login</MDBBtn>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBBtn color="primary"  a href="/register">Sign Up</MDBBtn>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </header>
                </Router>
            </div>
        );
    }
}

export default Navbar;