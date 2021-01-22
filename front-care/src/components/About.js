import React from "react";
import {Link} from 'react-router-dom'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBCardText, MDBCardTitle } from "mdbreact";

const About = () => {
    return (
        <MDBContainer className="mt-5 text-center">
            <MDBRow style={{ marginTop: '12%' }}>
                <MDBCol>
                    <MDBJumbotron>
                        <MDBCardBody>
                            <MDBCardTitle className="h2">
                            About Us                
                </MDBCardTitle>
                            <p className="blue-text my-4 font-weight-bold">
                                Medication For All
              </p>
                            <MDBCardText>
                                CareDash offers free same-day delivery and low prices on your medications. 
                                In these times of economic uncertainty, coronavirus, and other potentially serious illnesses, 
                                CareDash comes to your door to keep you safe.No more waiting in line. 
                                Schedule your delivery via our wbesite, phone call, or text and get your medication that same day.
                          </MDBCardText>
                            <hr className="my-4" />
                            <div className="pt-2">
                                <Link to="/signup">
                                <MDBBtn
                                    color="indigo"
                                    className="waves-effect"
                                >
                                        Get Started <MDBIcon icon="laptop-medical" />
                                </MDBBtn>
                                </Link>
                            </div>
                        </MDBCardBody>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default About;