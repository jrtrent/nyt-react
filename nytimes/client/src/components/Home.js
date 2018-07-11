import React, { Component } from "react";
import API from "../utils/API";
import {Col, Row, Container } from "../components/Grid";
import {List, ListItem} from "../components/List";
import {Input, TextArea, FormBtn} from "../components/Form"
import SaveBtn from "./SaveBtn";

class Home extends Component {
    state = {
        results: [],
        title: "",
        numOfRecords: "",
        startDate: "",
        endDate:"",
    };
    hanldeInputChange = event =>{
        const {name, value} =event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleFormSubmit = event => {
        event.preventDefault();
        const query = this.buildQueryURL(this.state.title, this.state.startDate, this.state.endDate);
        API.getArticle(query)
        .then(res=> {
            this.setState({results:res.data.response.docs});
        })

    }
    buildQueryURL = (searchTem,startYear,endYear) => {
        let queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += "?api-key=9b8936ce2b1a44cf83ef4f5aa61b3418"
        queryURL += "&q=" +searchTem;
        if (parseInt(startYear)) {
            queryURL += "&begin_date=" +startYear + "0101";
        }
        if (parseInt(endYear)) {
            queryURL += "&end_date=" +endYear + "0101";
        }
        return queryURL;
    
    }

    saveArticle= (index) => {
        const articleToSave ={
            title: this.state.results[index].headline.main,
            link: this.state.results[index].web_url,
            date:this.state.results[index].pub_date
        }
        API.saveArticle(articleToSave)
        .then(res => {
            console.log(res);
        })
    }


    render() {
        return (
          <Container>
            <Row>
            <Col size="md-3"></Col>
              <Col size="md-6">
              <form>
              <Input
                    name="title"
                    placeholder="Title (required)"
                    onChange={this.hanldeInputChange}
                    value = {this.state.title}
                    />

                    <Input
                    name="startDate"
                    placeholder="Starting year"
                    onChange = {this.hanldeInputChange}
                    value={this.state.startDate}
                    />
                    <Input
                    name="endDate"
                    placeholder="Ending year"
                    onChange = {this.hanldeInputChange}
                    value={this.state.endDate}
                    />


                    <FormBtn
                    onClick = {this.handleFormSubmit}
                    >submit </FormBtn>
                    </form>
              </Col>
              </Row>
              <Row>
              <Col size="md-3"></Col>
              <Col size="md-6 sm-12">
                
                {(this.state.results.length) ? (
                  <List>
                    {this.state.results.map((result, index)=> {
                        return(
                      <ListItem>
                         <p>results.headline.main}</p>
                        <SaveBtn onClick={() => this.saveArticle(index)} />
                        <p>{result.pub.data} </p>
                         <a href={result.web_url}> {result.web.url} </a>
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
    
    export default Home;

   

