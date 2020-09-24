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

class EditProgram extends React.Component {
    constructor(props){
        super(props);
        this.state={
            programId:"",
            programName:"",
            instructor:"",
            semester:"",
            level:""

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

  componentDidMount(){
      this.getEditDetails();
  }

  getEditDetails(){
    let programId = this.props.match.params.programId;
    axios.get(`http://localhost:8080/api/programs/${programId}`)
    .then(response=>{
        this.setState({
            programId: response.data.programId,
            programName: response.data.programName,
            instructor: response.data.instructor,
            semester: response.data.semester,
            level: response.data.level,
        })
    })
    .catch(error=>console.log(error))
}

    editProgram(datainput){
        axios.request({
            method:"put",
            url:`http://localhost:8080/api/programs/${this.state.programId}`,
            data: datainput
        }).then(response=>{
            console.log(response)
            this.props.history.push("/programs");
        }).catch(err => console.log(err))
    }

  onSubmit(e){
      
    const newProgram={
        programId: this.state.programId,
        programName: this.refs.programName.value,
        instructor: this.refs.instructor.value,
        semester: this.refs.semester.value + " " + new Date().getFullYear(),
        level: this.refs.level.value
    }
    this.editProgram(newProgram)    
    e.preventDefault();

  }



  handleInputChange(e){
      const target = e.target;
      const value = target.value;
      const programName = value.programName;
      const instructor = value.instructor;
      const semester = value.semester;
      const level = value.level;

      this.setState({
          [programName]:value,
          [instructor]:value,
          [semester]:value,
          [level]:value
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

        <img alt="..." className="path" src={require("assets/img/path2.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />
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
                  <CardTitle tag="h4" style={style}>Edit Program</CardTitle>
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
                        type="text" name="programName" ref="programName"defaultValue={this.state.programName} onChange={this.handleInputChange} required
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
                        type="text" name="instructor"  ref="instructor" defaultValue={this.state.instructor} onChange={this.handleInputChange} required
                        onFocus={e => this.setState({ instructorFocus: true })}
                        onBlur={e => this.setState({ instructorFocus: false })}
                        style={styleObject}

                      />

                    </InputGroup>
                    <select style={selectstyle} type="text" name="semester" ref="semester" defaultValue={this.state.semester} required>
                        <option value="Spring ">Spring {new Date().getFullYear()}</option>
                        <option value="Summer ">Summer {new Date().getFullYear()}</option>
                        <option value="Fall ">Fall {new Date().getFullYear()}</option>

                    </select>
                    <select style={selectstyle} type="text" name="level" ref="level" defaultValue={this.state.level} required>
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

export default EditProgram;
