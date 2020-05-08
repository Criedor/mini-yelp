import React from 'react';
import '../App.css';
import restaurant_image from '../img/restaurant.jpg'


function Overview (props) {
  
    console.log(props.data)
    return (

     <div className="overview">
        {props.data.length > 1 ? props.data.map((restaurant)=> ( 
            <>
            {console.log(restaurant)}
            <div className="restaurant" key={restaurant.restaurant.id+restaurant.restaurant.name}>
                <img src={restaurant_image} alt="logo"></img>
                <h2 onClick={()=>props.onHandleClick(restaurant.restaurant.id)}>{restaurant.restaurant.name}</h2>
                <h3>Tags: {restaurant.tag.name}</h3>
                <p>Comments: {restaurant.comment.text}</p>
            </div>
            </>))
        : <></> }
     </div>
    );
  }
  
  export default Overview;