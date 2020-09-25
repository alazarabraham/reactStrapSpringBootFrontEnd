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

// reactstrap components
import { Container,Button } from "reactstrap";
import { Link } from 'react-router-dom'
class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
  
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Student Registration</h1>
            <h3 className="d-none d-sm-block">
              
            </h3>
            <Link to="/programs">
              <Button color="primary" type="button">
                  Programs
              </Button>
            </Link>
            <Link to="/students">
              <Button color="primary" type="button">
                  Students
              </Button>
            </Link>
            
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
