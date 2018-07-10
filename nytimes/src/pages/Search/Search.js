import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import {Col, Row, Container } from "../../components/Grid";
import {List, ListItem} from "../../components/List";
import {Input, TextArea, FormBtn} from "../../components/Form";

class Search extends Component {
  state ={
    articles: []
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6" >
          <Jumbotron>
            NYTIMES
          </Jumbotron>
            <form>
              <Input name="Topic" placeholder="Topic (required)" />
              <Input name="Start Year" placeholder="start year (optional)" />
              <Input name="End Year" placeholder="end year (optional)" />
              <FormBtn>Submit</FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
            <Jumbotron>
              Results
            </Jumbotron>
            </Col>
            </Row>
      
          </Container>
          
        
    )
  }
}

export default Search;
