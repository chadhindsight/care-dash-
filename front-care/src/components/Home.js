import React, { Component } from 'react';
import SearchBar from './search/SearchBar';
import actions from '../services/index'
import { MDBBtn } from "mdbreact";
import {ReactComponent as Doc} from '../assets/doc.svg'

const Home = (props) => {
    // TODO: add a loader/spinner. While the results 
     
    //Show confirmation when user submits order
        return (
            <div>
                <SearchBar getResults={props.getResults} showInfo={props.showInfo} />
                <Doc style={{ position: 'relative', zIndex: '-1', marginTop: '-5%', width: '80%'}}/>
            </div>
        );
}

export default Home;