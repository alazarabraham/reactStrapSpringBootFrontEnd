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
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import Program from "views/IndexSections/Program";
import ProgramDetails from "views/IndexSections/ProgramDetails";
import AddProgram from "views/IndexSections/AddProgram";
import EditProgram from "views/IndexSections/EditProgram";


import Student from "views/IndexSections/Student";
import StudentDetails from "views/IndexSections/StudentDetails";
import AddStudent from "views/IndexSections/AddStudent";
import EditStudent from "views/IndexSections/EditStudent";

import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* Program */}

      <Route exact path="/" component={Index}  />
      <Route exact path="/programs" component={Program}  />
      <Route exact path="/program/:programId" component={ProgramDetails}/>
      <Route exact path="/addprogram" component={AddProgram}/>
      <Route exact path="/editprogram/:programId" component={EditProgram}/>
      {/* Student */}
      <Route exact path="/students" component={Student}  />
      <Route exact path="/student/:studentId" component={StudentDetails}/>
      <Route exact path="/addstudent" component={AddStudent}/>
      <Route exact path="/editstudent/:studentId" component={EditStudent}/>


    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
