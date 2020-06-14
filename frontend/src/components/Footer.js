import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Ultimate Gamer</h5>
                        <p>
                            Contact : +(94) 123456789
                        </p>
                        <p>
                        Visit : 25/A, Millenium Ave, Colombo 5
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Ultimate Gamer
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;