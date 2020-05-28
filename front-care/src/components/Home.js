import React, { Component } from 'react';
import SearchBar from './search/SearchBar';
import actions from '../services/index'

const Home = (props) => {
    
     
    //Show confirmation when user submits order
        return (
            <div>
                Home Page
                <SearchBar getResults={props.getResults} showInfo={props.showInfo} />
                <button onClick={() => props.displayRankedMeds()}>Show Cart</button>
            </div>
        );
}

export default Home;