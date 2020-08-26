import React, { Component } from 'react';
import CardList from '../components/CardList/CardList';
import './app.css';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox/SearchBox';
import Homepage from '../components/Homepage/Homepage';

class App extends Component {
    constructor() {
        super();
        this.state = {
            SearchBox: '',
            robots: robots,
            isSignedIn: true
        }
    }

    onSearchChange = (event) => {
        event.preventDefault();
        this.setState({ SearchBox: event.target.value })
    }

    isSignedIn = (event) => {
        this.setState({ isSignedIn: false })
    }

    render() {
        console.log(this.state.robots);
        const filteredRobots = this.state.robots.filter((item) => {
            return (
                item.name.toLowerCase().includes(this.state.SearchBox.toLowerCase())
            )
        });

        return (
            <div className="App">
                <h1 className="f1">RoboFriends</h1>
                {
                    this.state.isSignedIn ?
                        <Homepage isSignedIn = {this.isSignedIn} /> : null
                }
                <SearchBox onSearchChange={this.onSearchChange} />
                {
                    !filteredRobots.length ? <h1>NO RESULT FOUND</h1> : null
                }
                <div className='cards'>
                    <CardList robots={filteredRobots} />
                </div>
            </div>
        )
    }
}

export default App;