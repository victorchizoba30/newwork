import React from 'react';
import Card from '../Card/Card';
// import { robots } from './robots';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((item) => {
                    return <Card key={item.id} name={item.name} email={item.email} username={item.username} />
                })
            }
        </div>
    );

};




// return(
//     <div>
//         <Card name={robots[0].name} email={robots[1].email} phone='08101111111' />
//         <Card name={robots[1].name} email={robots[2].email} phone='09101111111' />
//         <Card name={robots[2].name} email={robots[3].email} phone='07101111111' />
//         <Card name={robots[3].name} email={robots[4].email} phone='08101111111' />
//         <Card name={robots[4].name} email={robots[5].email} phone='09101111111' />
//         <Card name={robots[5].name} email={robots[6].email} phone='07101111111' />
//     </div>
// )


export default CardList;