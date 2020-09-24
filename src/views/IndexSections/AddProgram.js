/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import IndexNavbar from '../../components/Navbars/IndexNavbar'
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  InputGroupAddon,
  InputGroupText,
  Container,
  Row,
  Col, Navbar
} from "reactstrap";
import { InputGroup,DropdownButton,Dropdown } from 'react-bootstrap';


class AddProgram extends React.Component {
  state = {};
  addProgram(newProgram){
      
    axios.request({
        method:"post",
        url:"http://localhost:8080/api/programs",
        data: newProgram
    }).then(response=>{
        this.props.history.push("/programs");
    }).catch(err => console.log(err))
}


onSubmit(e){
    
  const newProgram={
      
      programName: this.refs.programName.value,
      instructor: this.refs.instructor.value,
      semester: this.refs.semester.value + " " + new Date().getFullYear(),
      level: this.refs.level.value

  }
  console.log(newProgram)
  this.addProgram(newProgram)    
  e.preventDefault();

}
  render() {
      const styleObject= {
        fontFamily: 'inherit',
        border: 0,
        borderBottom: '2px solid $gray',
        outline: 0,
        fontSize: '1.3re',
        color: 'white',
        padding: '7px 0',
        background: 'transparent',
        transition: 'border-color 0.2s',
        outline: 'none',
        boxShadow: 'none'
    }
    const style={
        color:"white"
    }

    const selectstyle={
        width: "100%",
        height: "50px",
        fontSize: "100%",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "0",
        border: "none",
        borderBottom:" white",
        color: "white",
        background: "#1f2251",
        padding: "10px",
        appearance: "none",
        padding: "10px"
    }
      
    return (
      <div className="section section-signup">
        <img alt="..." className="path" src={require("assets/img/path5.png")} />

        <IndexNavbar/>

        <Container>
            
          
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
              <p className="text-white mb-3">
                Register a program now
              </p>
              <div className="btn-wrapper">
                
              </div>
               </h3>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4" style={style}>Add Program</CardTitle>
                </CardHeader>
                <CardBody>
                <Form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.programNameFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <input
                        type="text" name="programName" ref="programName" placeholder="Program Name"
                        style={styleObject}
                      
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.instructorFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-instructor-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <input
                        type="text" name="instructor"  ref="instructor" placeholder="Instructor"
                        onFocus={e => this.setState({ instructorFocus: true })}
                        onBlur={e => this.setState({ instructorFocus: false })}
                        style={styleObject}

                      />
                    </InputGroup>
                    <select style={selectstyle} type="text" name="semester" ref="semester" placeholder="Semester">
                        <option value="Spring ">Spring {new Date().getFullYear()}</option>
                        <option value="Summer ">Summer {new Date().getFullYear()}</option>
                        <option value="Fall ">Fall {new Date().getFullYear()}</option>

                    </select>
                    <select style={selectstyle} type="text" name="level" ref="level" placeholder="Degree Program">
                        <option value="Undergraduate Program">Undergraduate Program</option>
                        <option value="Graduate Program">Graduate Program</option>
                    </select>
            
                    <Button  type="submit" className="btn-round" color="primary" size="lg">Submit</Button>
                   
                  </Form>

                 
                </CardBody>
                <CardFooter>
                  
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddProgram;
