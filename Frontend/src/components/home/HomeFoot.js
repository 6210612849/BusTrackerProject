import React, { useEffect, useState, useRef } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
function HomeFoot() {
    return (
        // <Navbar fixed="bottom" bg="light" variant="light" >

        //     <Navbar.Brand style={{ "marginLeft": "auto" }}>Supersonixz </Navbar.Brand>

        //     <Navbar.Text className="text-right ">
        //         © {new Date().getFullYear()} Supersonixz Contact:  nuttakit.khongKaew@gmail.com
        //     </Navbar.Text>
        // </Navbar>
        <footer className="bg-light mt-auto">
            <Container fluid>
                <Row>
                    <Col xs={12} sm={4} className="text-center text-sm-left">

                    </Col>
                    <Col xs={12} sm={4} className="text-center">

                    </Col>
                    <Col xs={12} sm={4} className="text-center text-sm-right">
                        <Navbar.Text className="text-right ">
                            © {new Date().getFullYear()} Supersonixz Contact:  nuttakit.khongKaew@gmail.com
                        </Navbar.Text>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}
export default HomeFoot;