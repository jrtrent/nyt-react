import React, { Component } from "react";
import API from "../utils/API";
import {Col, Row, Container } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn"; 
import {List, ListItem} from "../components/List";
import {Input, TextArea, FormBtn} from "../components/Form"

class Saved extends Component {
    state = {
        results:[]
    }
    componentDidMount() {
        this.loadArticles();
      };
    
      loadArticles = () => {
        API.getSavedArticles()
          .then(res => this.setState({ results: res.data }))
          .catch(err => console.log(err));
      };

      deleteArticle= (id) => {
          API.deleteArticle(id)
          .then(this.loadArticles())
          .catch(err => console.log(err))
      }

      render() {
        return (
        <Container fluid>
            <Row>
            <Col size="md-3"></Col>
              <Col size="md-6">
              {(this.state.results.length) ? (
                  <List>
                {this.state.results.map((result, index) => {
                    return (
                        <ListItem>
                            <p> {result.title} </p>
                            <p> {result.date} </p>
                            <a href={result.link}>{result.link}</a>
                            <DeleteBtn onClick={() => this.deleteArticle(result._id)} />
                            </ListItem>
                    );
                })}
                </List>
               
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
         </Container>
        );
      }
    }
    
    export default Saved;
    
