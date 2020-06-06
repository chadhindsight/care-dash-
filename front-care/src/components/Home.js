import React, { Component } from 'react';
import SearchBar from './search/SearchBar';
import actions from '../services/index'
import { MDBBtn } from "mdbreact";

const Home = (props) => {
    
     
    //Show confirmation when user submits order
        return (
            <div>
                <SearchBar getResults={props.getResults} showInfo={props.showInfo} />
            </div>
        );
}

export default Home;