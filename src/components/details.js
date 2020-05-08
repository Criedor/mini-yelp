import React, { useState } from 'react';
import { Map, TileLayer } from "react-leaflet";
import restaurant_image from '../img/restaurant.jpg'
import '../App.css';



function Details (props) {
const [lat, setLat] = useState(0)
const [lon, setLon] = useState(0)

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
     {/* <div className="map">
            <Map center={[lat, lon]} zoom={13} zoomControl={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        </Map>
    </div> */}
    </>
    );
  }
  
  export default Details;