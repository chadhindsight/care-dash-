import React, { Component } from 'react';
import SearchBar from './search/SearchBar';
import actions from '../services/index'
import { MDBBtn } from "mdbreact";

const Home = (props) => {
    
     
    //Show confirmation when user submits order
        return (
            <div>
                Home Page
                <SearchBar getResults={props.getResults} showInfo={props.showInfo} />
                <MDBBtn onClick={() => props.displayRankedMeds()} color="primary">Go</MDBBtn>
            </div>
        );
}

export default Home;