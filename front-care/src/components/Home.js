import React from 'react';
import SearchBar from './search/SearchBar';
import { ReactComponent as Doctors } from '../assets/doc.svg'

const Home = (props) => {
    //Show confirmation when user submits an order
    return (
        <div>
            <SearchBar getResults={props.getResults} showInfo={props.showInfo} />
            <Doctors style={{ position: 'relative', zIndex: '-1', marginTop: '-5%', width: '80%' }} />
        </div>
    );
}

export default Home;