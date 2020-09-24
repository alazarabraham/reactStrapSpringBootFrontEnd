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
  Table,
  NavLink,
} from "reactstrap";

export default class EachStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentProp:props.students,

      iconTabs: 1,
      textTabs: 4
    };
  }
  
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {

    return (
        <div className="section section-basic" id="basic-elements">

        <img alt="..." className="path" src={require("assets/img/path2.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />
      <IndexNavbar />

      <div className="section section-tabs">
      <div class="squares square1"></div>
        <Container>
          
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
            
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <Link to={"/addstudent"}>
                        <i className="fas fa-plus-circle" />
                        Add Student
                      </Link>
                      
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
                        <th>Last Name</th>
                        <th>Level </th>
                        <th>Date of Birth</th>
                    </thead>
                    <tbody>
                        {this.props.studentProp.map((student,studentId)=>{
                            return(
                                <tr key={studentId}>
                                    <td>{student.studentId}</td>
                                    <td><Link to={`student/${student.studentId}`}>{student.firstname}</Link></td>
                                    <td>{student.lastname}</td>
                                    <td>{student.degreeProgram}</td>
                                    <td>{student.dob}</td>

                                </tr>
                            )
                        })}
                    </tbody>

                </Table>
                    </TabPane>
                  
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
           
          </Row>
        
        </Container>
      </div>
      </div>
    );
  }
}

