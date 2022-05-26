import React from 'react'
import styles from './style.module.css'

import { Navbar, Container, Nav, Button } from 'react-bootstrap'

export default function PageNav() {
    return (
        <Navbar variant="light" expand="lg" className={styles.navbar_bg} fixed="top">
            <Container className={styles.navbar_container}>
                <Navbar.Brand href="/">
                    <div className={styles.navbar_logo}></div>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link
                        className={styles.navbar_link} href="#ourservices">
                        Our Services
                    </Nav.Link>
                    <Nav.Link
                        className={styles.navbar_link} href="#whyus">
                        Why Us
                    </Nav.Link>
                    <Nav.Link
                        className={styles.navbar_link} href="#testimonial">
                        Testimonial
                    </Nav.Link>
                    <Nav.Link
                        className={styles.navbar_link} href="#faq">
                        FAQ
                    </Nav.Link>
                    <Button variant="success" className={styles.navbar_button}>
                        Register
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    )
}
