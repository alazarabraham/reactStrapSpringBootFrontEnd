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
   
  render() {
    return (
            <>
              <IndexNavbar />
              <img alt="..." className="path" src={require("assets/img/path3.png")} />

              <div className="wrapper">

              <div className="section section-tabs">
            
                        
      </div>
    </div>
  </>
    );
  }
}

