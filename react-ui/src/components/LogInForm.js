import React, {Component} from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Redirect } from "react-router-dom";
import Title from "./Title"
import "./LogInForm.css"

export default class logInClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: "",
      }
    };
  }

  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
      return (
        <Container className="Form-container">
           <Title name= "Sign In."></Title>
          <Row>
           <Col sm={12} align="center">
           <form onSubmit={this.login}>
                <label>
                  <input 
                  className ="InputFields" 
                  type="text" 
                  name="user_id"
                  placeholder= "ID" 
                  onChange={this.handleFormChange} />
                </label>
                <br></br>
                <label>
                  <input 
                  className ="InputFields" 
                  name="user_password"
                  type="password" 
                  placeholder= "password" 
                  onChange={this.handleFormChange} />
                </label>
                <br></br>
                <input 
                className ="SubmitButton" 
                type="submit" 
                value="Sign In!" />
            </form>
           </Col>
          </Row>
        </Container>
      );
    }
  }
  
