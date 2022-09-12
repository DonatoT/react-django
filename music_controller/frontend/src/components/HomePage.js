import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    Redirect,
    BrowserRouter
} from "react-router-dom";
import CreateRoomPage from './CreateRoomPage';
import HomePage2 from './HomePage2';
import RoomJoinPage from './RoomJoinPages';


export default class HomePage extends Component {

     constructor(props){
        super(props);

     }
     
  render() {
    return  (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage2/>}/>
                <Route path="join" element={<RoomJoinPage/>} />
                <Route path="Create" element={<CreateRoomPage/>} />
            </Routes>
        </BrowserRouter>
    )
    
  }
}
