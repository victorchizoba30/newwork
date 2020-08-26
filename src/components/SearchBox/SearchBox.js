import React from 'react';
import './Searchbox.css'

const SearchBox = (props) => {
    return ( 
            <div className="pa2 input">
                <input
                    type="search"
                    placeholder="Search"
                    className="pa3 ba b--green bg-lightest-blue weed"
                    onChange={props.onSearchChange}
                />
            </div>
    )
}

export default SearchBox;