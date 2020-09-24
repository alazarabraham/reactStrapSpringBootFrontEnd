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
  CardTitle
} from "reactstrap";

export default class EachProgram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programProp:props.programs,
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
    const textalign={
      textAlign:"center",
      color:"#e14eca"
    }
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
      <h1 style={textalign}>Programs</h1>

        <Container>
          <Row>

            <Col className="ml-auto mr-auto" md="10" xl="6">
            
              <Card>

                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <Link to={"/addprogram"}>
                        <i className="fas fa-plus-circle" />
                        Add Program
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
                        <th> Name</th>
                        <th>Instructor</th>
                        <th>Semester </th>
                        <th>Level</th>
                    </thead>
                    <tbody>
                        {this.props.programProp.map((program,programId)=>{
                            return(
                                <tr key={programId}>
                                    <td>{program.programId}</td>
                                    <td><Link to={`program/${program.programId}`}>{program.programName}</Link></td>
                                    <td>{program.instructor}</td>
                                    <td>{program.semester}</td>
                                    <td>{program.level}</td>

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

