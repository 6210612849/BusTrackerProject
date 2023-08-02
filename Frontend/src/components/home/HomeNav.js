import React, { useEffect, useState, useRef } from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import { animated, useSpring, to } from '@react-spring/web'
import { Modal } from "react-bootstrap";
import TocIcon from '@mui/icons-material/Toc';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function HomeNav(props) {
    const { Console, toggleDrawer } = props
    const [toggleClicked, setToggleClicked] = useState();


    const [show, setShow] = useState(false);
    const [navbarSticky, setNavbarSticky] = useState(false);


    const [isJumping, setIsJumping] = useState(false);
    const [dinoCount, setDinoCount] = useState(0);
    const jumpAnimation = useSpring({
        to: { y: isJumping ? -50 : 0 },

        onRest: () => setIsJumping(false)
    });

    const returnAnimation = useSpring({
        to: { y: isJumping ? 50 : 0 },

        delay: 200
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {

                setNavbarSticky(true);

            } else {
                setNavbarSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handToggle = () => {
        if (toggleDrawer) {
            console.log("why", toggleClicked('left', true))
            toggleClicked('left', true)
        }
        else {
            console.log("why bro", toggleDrawer)
        }

    }
    const Anchor = 'left';
    return (

        <Navbar bg="light" expand="lg" sticky={navbarSticky ? "top" : false}
        >
            <Navbar hidden={Console}  >
                <Button >
                    <TocIcon sx={{ fontSize: 50 }} onClick={Console ? null : toggleDrawer('left', true)

                    }  >aaaaa</TocIcon>
                </Button>
            </Navbar>
            <Container>

                <Navbar.Brand >
                    <animated.div
                        style={{

                            transform: to(
                                [jumpAnimation.y, returnAnimation.y],
                                (jumpY, returnY) => `translateY(${jumpY + returnY}px)`
                            )
                        }}

                    >
                        <Image src='https://supersonixzdata.s3.ap-southeast-1.amazonaws.com/home/Banner/image-removebg-preview+(5).png' height="80px" onClick={() => {
                            setIsJumping(true); setDinoCount(dinoCount + 1); if (dinoCount == 9) {
                                setDinoCount(0);
                                setShow(true);
                            }
                        }}></Image>
                    </animated.div>


                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="p-2">

                        <Nav.Link as={Link} className='mx-2' to='/' >
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} className='mx-2' to="/map">
                            Map</Nav.Link>
                        {/* <Nav.Link className='mx-2' href="manga">Manga</Nav.Link> */}
                        {/* <Nav.Link className='mx-2' href="blog">Blog</Nav.Link> */}
                        <Nav.Link as={Link} className='mx-2' to="/console">Console</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
                <Modal classname=" text-center mx-auto" show={show} onHide={() => setShow(false)}>

                    <Modal.Body className='mx-auto' style={{ "width": "auto" }} >
                        <img src="https://supersonixzdata.s3.ap-southeast-1.amazonaws.com/home/Banner/dino.gif" alt="gif" />
                    </Modal.Body>

                </Modal>
            </Container>


        </Navbar >

    )

}

export default HomeNav;