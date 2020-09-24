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
import React from "react";
import classnames from "classnames";
import {Link} from 'react-router-dom'
import axios from 'axios';
import IndexNavbar from '../../components/Navbars/IndexNavbar'

// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,Table,
   CardImg, CardText,
  CardTitle, CardSubtitle, Button
} from "reactstrap";

export default class StudentDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            studentDetails:'',
            
      iconTabs: 1,
      textTabs: 4
        }
    }

  componentDidMount(){
    this.getIndividualStudent();
}
getIndividualStudent(){
    let studentid = this.props.match.params.studentId
    axios.get( `http://localhost:8080/api/students/${studentid}`)
    .then(response=>{
        //setting the state to the json data, consoling it with a callback function
        this.setState({students:response.data},()=>{
            this.setState({studentDetails: response.data}, ()=> {
            })

        }
            
            )
    })
    .catch(err=> console.log(err))
}

onDelete(){
    let studentId = this.state.studentDetails.studentId;
    console.log(studentId)
    axios.delete(`http://localhost:8080/api/students/${studentId}`)
    .then(response=>{
        this.props.history.push("/students");
    })
    .catch(error=>console.log(error))
}
  render() {
    const textalign={
      textAlign:"center",
      color:"#e14eca"

    }
    return (
                  <div className="section section-signup">

              <IndexNavbar />
              <img alt="..." className="path" src={require("assets/img/path3.png")} />

              <div className="wrapper">

              <div className="section section-tabs">

        <Container>
        <h1 style={textalign}>Students Details</h1>

          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
            
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                    <NavItem>
                      <Link to={"/addstudent"}>
                        <i className="fas fa-plus-circle" />
                        Add Student
                      </Link>
                      
                    </NavItem>
                    
                      
                    </NavItem>
                    
                   
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1">
                    <Table>
                        <thead>
                            <th> Id</th>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Level</th>
                            <th>Date of Birth</th>
                            <th>Program Id</th>


                            
                        </thead>
                        <tbody>
                            <td>{this.state.studentDetails.studentId}</td>

                            <td>{this.state.studentDetails.firstname}</td>
                            <td>{this.state.studentDetails.lastname}</td>
                            <td>{this.state.studentDetails.degreeProgram}</td>
                            <td>{this.state.studentDetails.dob}</td>
                            <td><Link to={`/program/${this.state.studentDetails.progId}`}>{this.state.studentDetails.progId}</Link></td>

                            

                        </tbody>
                    </Table>
                           

                            <Link to={`/editstudent/${this.state.studentDetails.studentId}`}><Button class="btn-block">Edit</Button></Link>

                                <Button class="btn-block" onClick={this.onDelete.bind(this)}>Delete</Button>
               
                    </TabPane>
                  
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
           
          </Row>
        </Container>
                        
      </div>
    </div>
  </div>
    );
  }
}

