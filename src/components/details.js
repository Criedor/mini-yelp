import React, { useState } from 'react';
import { Map, TileLayer } from "react-leaflet";
import restaurant_image from '../img/restaurant.jpg'
import '../App.css'
import 'leaflet/dist/leaflet.css';


function Details (props) {
const [lat, setLat] = useState(50)
const [lon, setLon] = useState(6)
const position = [lat, lon]

    return (
    <>
     <div className="details">
        {props.data
            .filter(restaurant =>
                props.match.params.id
                ? restaurant.restaurant.id === props.match.params.id
                : restaurant
            )
            .map(restaurant => (
            <>
                <div className="details2" key={restaurant.restaurant.id+restaurant.restaurant.name}>
                    <img src={restaurant_image} alt="logo"></img>
                    <h2>{restaurant.restaurant.name}</h2>
                    <p>Tags: {restaurant.tag.name}</p>
                    <p>Comments: {restaurant.comment.text}</p>,
                </div>
            </>
            ))}
     </div>
    </>
    );
  }
  
  export default Details;