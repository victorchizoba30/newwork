import React from 'react';
import './Card.css';

// using classes
// class Card extends React.Component{

//     render(){
//         return(
//             <div className='card'>
//                 <div>
//                     <img src={`https://robohash.org/set_set5/${this.props.name}`} alt='' />
//                 </div>
//                 <h4>{this.props.name}</h4>
//                 <p>{this.props.email}</p>
//                 <p>{this.props.phone}</p>
//             </div>
//         )
//     }
// };


// using normal function

const Card = (props) => {
    return(
        <div className='card'>
            <div>
                <img src={`http://robohash.org/set_set5/${props.name}`} alt='' />
            </div>
            <h4>{props.name}</h4>
            <p>{props.email}</p>
            <p>{props.username}</p>
        </div>
    )
}

export default Card;