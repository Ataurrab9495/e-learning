import React from 'react'
import { FooterSection, FooterContainer, IconSection, SocialMedia, Facebook, Instagram, Twitter, Youtube, Linkedin, Location, Email, Call, Border } from '../Footer/FooterElement'
import { Row, Col, Form, FloatingLabel,Button } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterContainer>
                    <Row>
                        <Col md={6} sm={6} className="p-5">
                            <IconSection></IconSection>
                            <SocialMedia>
                                <Facebook className="me-2"></Facebook>
                                <Instagram className="me-2"></Instagram>
                                <Twitter className="me-2"></Twitter>
                                <Youtube className="me-2"></Youtube>
                                <Linkedin className="me-2"></Linkedin>
                            </SocialMedia>
                            <div className="mt-3 mb-3">
                                <p className="text-white">Copyright © 2021 Created By IBU All Rights Reserved.</p>
                            </div>
                            <div className="mt-3 mb-3">
                                <p className="text-white"><Location></Location> Brainware University
                                    Barasat, West Bengal-712245.</p>
                            </div>
                            <div className="mt-3 mb-3">
                                <p className="text-white"><Call></Call>+91-1234-567-890</p>
                            </div>
                            <div className="mt-3 mb-3">
                                <p className="text-white"><Email></Email>xyz@elearning.com</p>
                            </div>
                        </Col>
                        <Col md={6} sm={6} className="d-flex flex-column justify-content-center align-items-center">
                            <div className="">
                                <h1 className="text-white">Our NewsLetter</h1>
                                <Border></Border>
                                <div className="pt-3 text-white fs-5">Enter Your Email to get our News and updates.</div>
                                <Form className="pt-3">
                                    <>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </>
                                    <Button variant="outline-warning" className="fs-5">Submit</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </FooterContainer>
            </FooterSection>
        </>
    )
}

export default Footer