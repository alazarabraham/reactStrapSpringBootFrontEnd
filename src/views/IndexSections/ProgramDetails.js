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

export default class ProgramDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            programDetails:'',
            
      iconTabs: 1,
      textTabs: 4
        }
    }

  componentDidMount(){
    this.getIndividualProgram();
}
getIndividualProgram(){
    let programid = this.props.match.params.programId
    axios.get( `http://localhost:8080/api/programs/${programid}`)
    .then(response=>{
        //setting the state to the json data, consoling it with a callback function
        this.setState({programs:response.data},()=>{
            this.setState({programDetails: response.data}, ()=> {
            })

        }
            
            )
    })
    .catch(err=> console.log(err))
}

onDelete(){
    let programId = this.state.programDetails.programId;
    console.log(programId)
    axios.delete(`http://localhost:8080/api/programs/${programId}`)
    .then(response=>{
        this.props.history.push("/programs");
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
        <h1 style={textalign}>Program Details</h1>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
            
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                    <NavItem>
                      <Link to={"/addprogram"}>
                        <i className="fas fa-plus-circle" />
                        Add Program
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
                            <th>Program Id</th>

                            <th> Name</th>
                            <th> Instructor</th>
                            <th> Semester</th>
                            <th> Level</th>

                            
                        </thead>
                        <tbody>
                            <td>{this.state.programDetails.programId}</td>

                            <td>{this.state.programDetails.programName}</td>
                            <td>{this.state.programDetails.instructor}</td>
                            <td>{this.state.programDetails.semester}</td>
                            <td>{this.state.programDetails.level}</td>
                                
                            

                        </tbody>
                    </Table>
                           

                            <Link to={`/editprogram/${this.state.programDetails.programId}`}><Button class="btn-block">Edit</Button></Link>

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

