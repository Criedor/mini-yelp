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
            <div className="restaurant" key={restaurant.restaurant.id+restaurant.restaurant.name} onClick={()=>props.onHandleClick(restaurant.restaurant.id)}>
                <div className="text">
                <h2 >{restaurant.restaurant.name}</h2>
                <h3>Tags: {restaurant.tag.name}</h3>
                </div>
                <img src={restaurant_image} alt="logo"></img>
            </div>
            </>))
        : <></> }
     </div>
    );
  }
  
  export default Overview;