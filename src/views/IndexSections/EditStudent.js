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
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col, Navbar
} from "reactstrap";

class EditStudent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            studentId:"",
            firstname:"",
            lastname:"",
            degreeProgram:"",
            dob:""

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

  componentDidMount(){
      this.getEditDetails();
  }

  getEditDetails(){
    let studentId = this.props.match.params.studentId;
    axios.get(`http://localhost:8080/api/students/${studentId}`)
    .then(response=>{
        this.setState({
            studentId: response.data.studentId,
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            degreeProgram: response.data.degreeProgram,
            dob: response.data.dob,
        })
    })
    .catch(error=>console.log(error))
}

    editStudent(datainput){
        axios.request({
            method:"put",
            url:`http://localhost:8080/api/students/${this.state.studentId}`,
            data: datainput
        }).then(response=>{
            console.log(response)
            this.props.history.push("/students");
        }).catch(err => console.log(err))
    }

  onSubmit(e){
      
    const newStudent={
        studentId: this.state.studentId,
        firstname: this.refs.firstname.value,
        lastname: this.refs.lastname.value,
        degreeProgram: this.refs.degreeProgram.value,
        dob: this.refs.dob.value
    }
    this.editStudent(newStudent)    
    e.preventDefault();

  }



  handleInputChange(e){
      const target = e.target;
      const value = target.value;
      const firstname = value.firstname;
      const lastname = value.instructor;
      const degreeProgram = value.degreeProgram;
      const dob = value.dob;

      this.setState({
          [firstname]:value,
          [lastname]:value,
          [degreeProgram]:value,
          [dob]:value

      })
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
    const style={color:"white"}
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
                Register a student now
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
                  <CardTitle tag="h4" style={style}>Edit Student</CardTitle>
                </CardHeader>
                <CardBody>
                <Form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.firstnameFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <input
                        type="text" name="firstname" ref="firstname" placeholder="First Name" placeholder={this.state.firstname} onChange={this.handleInputChange}
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
                        type="text" name="lastname"  ref="lastname" placeholder="lastname" placeholder={this.state.lastname} onChange={this.handleInputChange}
                        onFocus={e => this.setState({ instructorFocus: true })}
                        onBlur={e => this.setState({ instructorFocus: false })}
                        style={styleObject}

                      />

                    </InputGroup>
                    <select style={selectstyle} type="text" name="degreeProgram" ref="degreeProgram" >
                        <option value="Undergraduate Program">Undergraduate Program</option>
                        <option value="Graduate Program">Graduate Program</option>
                    </select>
                    <InputGroup>
                    <input  style={selectstyle} type="date" id="start" name="dob" ref="dob"  value={this.state.dob}
                        ></input>
                    </InputGroup>
                    
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

export default EditStudent;
