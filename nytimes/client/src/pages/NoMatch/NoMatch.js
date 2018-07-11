import React, { Component } from "react";
import API from "../../utils/API";
import {Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";


const NoMatch = () => (
    <Container>
        <Row>
            <Jumbotron>
                Page Not Found
                </Jumbotron>
            </Row>
            </Container>
            
);

export default NoMatch