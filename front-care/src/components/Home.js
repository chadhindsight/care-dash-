import React, { Component } from 'react';
import SearchBar from './search/SearchBar';
import actions from '../services/index'

class Home extends Component {
    state = {
        medications: null
    }
    async componentDidMount() {
        let results = await actions.rankedMeds(1)
        this.setState({medications: results.data.meds})
        console.log(results)
        this.displayRankedMeds()
    }
    
    displayRankedMeds = ()=> {
            return this.state.medications.map(drug => {
                return (
                    <li>
                        <h2>{drug.name}</h2>
                        <h4>{drug.rating}</h4>
                    </li>
                )
            })
    }
    //Show confirmation when user submits order
    render() {
        console.log(this.state)
        return (
            <div>
                Home Page
                <SearchBar getResults={this.props.getResults} showInfo={this.props.showInfo} />
                {this.displayRankedMeds()}
            </div>
        );
    }
}

export default Home;