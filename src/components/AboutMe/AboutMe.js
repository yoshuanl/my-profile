import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutMe.css';

import profilePic from '../../assets/images/profile-pic.png'

const AboutMe = () => {
    return (
        <Container>
            <Row >
                <Col xs={12} md={6}>
                    <img className="ProfilePic" src={profilePic} alt="Me Smiling"/>
                </Col>
                <Col xs={12} md={6}>
                    <div className="Intro">
                        Hello! I am Scully from USC.<br />
                        I love to build stuffs that interact with people and help make their life better.<br />
                        My pre-pandemic favorite outdoor activity is beach cleaning. And now I enjoy hiking with my family during weekends or staying at home practicing yoga.<br />
                        I am now a graduate student majoring in Applied Data Science and will graduate in December 2021.
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default AboutMe;