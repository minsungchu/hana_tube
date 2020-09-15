import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "./Navigation.css";
import Button from 'react-bootstrap/Button'

// 신촌하나교회
// 조이챈트
// 하나무브먼트
// 하나워쉽무브먼트
// 방배하나교회
// 수원하나교회
function Navigation() {
    return (
        <div className="container" expand="lg">
            <Navbar className="justify-content-center" variant="light" bg="light">
                <Nav variant="tabs" defaultActiveKey="/" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink} to="/" exact><i className="home fas fa-home"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink} to="/schana">신촌하나교회</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink} to="/joychant">조이챈트</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink} to="/tbd1">TBD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={NavLink} to="/tbd2">TBD</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navigation;

//<Link to="/"><Button variant="outline-success" size="lg" block><i className="home fas fa-home"></i></Button></Link>
//<Button variant="outline-success" size="lg" block><Link to="/schana">신촌하나교회</Link></Button>
//<Button variant="outline-success" size="lg" block><Link to="/joychant">조이챈트</Link></Button>
//<Button variant="outline-success" size="lg" block><Link to="/TBD1">TBD</Link></Button>
//<Button variant="outline-success" size="lg" block><Link to="/TBD2">TBD</Link></Button>