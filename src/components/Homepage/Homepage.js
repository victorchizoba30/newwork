import React from 'react';
import './Homepage.css';

const Homepage = (props) => {
    return (
        <div className="homepage bg-lightest-blue">
            <button
                className="pa3 ba b--green bg-white pointer"
                onClick={props.isSignedIn}
            >Login</button>
            <button
                className="pa3 ba b--green bg-white pointer"
                onClick={props.isSignedIn}
            >Signup</button>
        </div>
    )
}

export default Homepage;