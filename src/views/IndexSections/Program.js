import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import EachProgram from './EachProgram';



export default class Program extends Component{
    constructor(){
        super();
        this.state = {
            programs: [],


        }
    }

componentDidMount(){
this.getProgram();

}

getProgram(){
    axios.get("http://localhost:8080/api/programs")
    .then(response=>{
        //setting the state to the json data, consoling it with a callback function
        this.setState({programs:response.data},()=>{
            

        }
            
            )
    })
}

//fetching Data method

render(){
    const programs = this.state.programs

        return(
            
               <EachProgram   programProp={programs}  />
            )
        }
}
