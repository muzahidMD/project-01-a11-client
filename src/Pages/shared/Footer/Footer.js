import { faCopyright, faLocationDot, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className=' mt-5 mb-0 footer' >
            <div className='container py-4  '>
                <Container>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <img
                                            alt=""
                                            src="https://i.ibb.co/9nTdDH5/logo.png"
                                            width="130px"
                                            className="d-inline-block align-top"
                                        />
                                    </div>
                                    <div>
                                        <p className='footer-title'>EG-GROCERY</p>
                                        <p className='footer-title'>Warehouse</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <FontAwesomeIcon className='footer-icon' icon={faLocationDot} />
                                    </div>
                                    <div>
                                        <p className='footer-title'>Address</p>
                                        <h6>Uttara , Dhaka-1230</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <FontAwesomeIcon className='footer-icon' style={{ color: '#00896F' }} icon={faPhone} />
                                    </div>
                                    <div>
                                        <p className='footer-title'>Contact Us</p>
                                        <h6>+880155555555</h6>
                                        <h6>+880188888888</h6>
                                        <h6>+880122222222</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='py-3 bg-dark'>
                <p className='text-light m-0 text-center'>copyright <FontAwesomeIcon icon={faCopyright} /> 2022</p>
            </div>

        </div>
    );
};

export default Footer;