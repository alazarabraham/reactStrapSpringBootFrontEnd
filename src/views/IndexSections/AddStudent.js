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
import ReactDatetime from "react-datetime";

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
  Dropdown,
  Col, Navbar,
 UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class AddStudent extends React.Component {
  constructor(props){
    super(props);
    this.state={
        programs:[]
    }
}

componentDidMount(){
this.getPrograms();
}
getPrograms(){
axios.get( `http://localhost:8080/api/programs`)
.then(response=>{
    //setting the state to the json data, consoling it with a callback function
    this.setState({programs:response.data},()=>{
        this.setState({programs: response.data}, ()=> {
        })

    }
        
        )
})
.catch(err=> console.log(err))
}



  addStudent(newStudent){
      
    axios.request({
        method:"post",
        url:"http://localhost:8080/api/students",
        data: newStudent
    }).then(response=>{
        this.props.history.push("/students");
    }).catch(err => console.log(err))
}


onSubmit(e){
    
  const newStudent={
      
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      degreeProgram: this.refs.degreeProgram.value,
      dob: this.refs.dob.value,
      progId: this.refs.progId.value



  }
  console.log(newStudent)
  this.addStudent(newStudent)    
  e.preventDefault();

}

  
  render() {
    console.log(this.state.programs)
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
                  <CardTitle tag="h4" style={style}>Add Student</CardTitle>
                </CardHeader>
                <CardBody>
                <Form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.studentNameFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <input
                        type="text" name="firstname" ref="firstname" placeholder="First Name" required
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
                        type="text" name="lastname"  ref="lastname" placeholder="Last Name" required
                        onFocus={e => this.setState({ lastnameFocus: true })}
                        onBlur={e => this.setState({ lastnameFocus: false })}
                        style={styleObject}

                      />
                    </InputGroup>
               
                    <select style={selectstyle} type="text" name="degreeProgram" ref="degreeProgram" placeholder="Degree Program" required>
                        <option value="Undergraduate Program">Undergraduate Program</option>
                        <option value="Graduate Program">Graduate Program</option>
                    </select>
                    <input  style={selectstyle} type="date" id="start" name="dob" ref="dob"   required></input>
                    
                    
                    {/* ProgramDrowdown */}
                    <select style={selectstyle} type="progId" id="progId" name="progId" ref="progId"  placeholder="Program Name" required>
                    <option value="" disabled selected>Select Program</option>

                    {this.state.programs.map((program,programId)=>{
                            return(
                                   
                                    <option key={programId} value={program.programId}>{program.programName}</option>
                                  

                            )
                        })}
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

export default AddStudent;
