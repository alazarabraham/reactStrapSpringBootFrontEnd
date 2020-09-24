import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import EachStudent from './EachStudent';



export default class Student extends Component{
    constructor(){
        super();
        this.state = {
            students: [],


        }
    }

componentDidMount(){
this.getStudent();

}

getStudent(){
    axios.get("http://localhost:8080/api/students")
    .then(response=>{
        //setting the state to the json data, consoling it with a callback function
        this.setState({students:response.data},()=>{
            

        }
            
            )
    })
}

//fetching Data method

render(){
    const students = this.state.students

        return(
            
               <EachStudent   studentProp={students}  />

            )
        }
}
