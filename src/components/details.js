import React from 'react';
import '../App.css';


function Details (props) {
  
console.log(props.match.params.id)
    return (
     <div className="details">
        {props.data
            .filter(restaurant =>
                props.match.params.id
                ? restaurant.restaurant.id === props.match.params.id
                : restaurant
            )
            .map(restaurant => (
                <>
                <div className="restaurant" key={restaurant.restaurant.id+restaurant.restaurant.name}>
                <h2>{restaurant.restaurant.name}</h2>
                <p>{restaurant.tag.id_tag}</p>
                <p>{restaurant.comment.text}</p>
            </div>
            </>
            ))}
     </div>
    );
  }
  
  export default Details;