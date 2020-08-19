import React, { Component, Fragment } from 'react';
// import SearchBox from './SearchBox'
import Cardist from './CardList'
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            SearchBox: '',
            newRobots: robots
        }
    }

    onSearchChange = (event) => {
        event.preventDefault();
        this.setState({ SearchBox: event.target.value })
    }

    render() {
        console.log(this.state.SearchBox);
        return (
            <Fragment>
                <h3>Robo Friends</h3>
                <input type="search" placeholder="Search Friends" onChange={this.onSearchChange} />
                <div className='cards'>
                    <Cardist robots={ this.state.newRobots } />
                </div>

            </Fragment>
        )
    }
}

export default App;