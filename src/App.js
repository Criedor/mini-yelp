import React, { useState } from 'react';
import Search from './components/search'
import Overview from './components/overview'
import Details from './components/details'
import { Switch, Route, useHistory} from "react-router-dom";
import './App.css';

function App() {
const [data, setData] = useState([
   {restaurant: {id: "1", name: "Restaurant 1", city_id: "Berlin", comment_id: "comment_id 1"}, comment: {id: "1", text: "This is a random comment for a restaurant...", date: "date"}, city: {id: "1", name:"name"}, restaurant_has_tag: {id_restaurant: "1", id_tag:"1"}, tag: { tag_id: "1", name: "Asian"}},
   {restaurant: {id: "2", name: "Restaurant 2", city_id: "Cologne", comment_id: "comment_id 2"}, comment: {id: "2", text: "This is a random comment for a restaurant...", date: "date"}, city: {id: "2", name:"name"}, restaurant_has_tag: {id_restaurant: "2", id_tag:"2"}, tag: { tag_id: "2", name: "Vegan"}},
   {restaurant: {id: "3", name: "Restaurant 3", city_id: "Trier", comment_id: "comment_id 3"}, comment: {id: "3", text: "This is a random comment for a restaurant...", date: "date"}, city: {id: "3", name:"name"}, restaurant_has_tag: {id_restaurant: "3", id_tag:"3"}, tag: { tag_id: "3", name: "Pizza"}},
   {restaurant: {id: "4", name: "Restaurant 4", city_id: "Rotenburg", comment_id: "comment_id 4"}, comment: {id: "4", text: "This is a random comment for a restaurant...", date: "date"}, city: {id: "4", name:"name"}, restaurant_has_tag: {id_restaurant: "4", id_tag:"4"}, tag: { tag_id: "4", name: "Human Flesh"}},
   {restaurant: {id: "2", name: "Restaurant 5", city_id: "Munich", comment_id: "comment_id 2"}, comment: {id: "5", text: "This is a random comment for a restaurant...", date: "date"}, city: {id: "5", name:"name"}, restaurant_has_tag: {id_restaurant: "5", id_tag:"5"}, tag: { tag_id: "5", name: "French"}},
   {restaurant: {id: "6", name: "Restaurant 6", city_id: "Peine", comment_id: "comment_id 6"}, comment: {id: "6", text: "This is a random comment for a restaurant...", date: "date"}, city: {id: "6", name:"name"}, restaurant_has_tag: {id_restaurant: "6", id_tag:"6"}, tag: { tag_id: "6", name: "Burger"}}
])

let history = useHistory() 



const handleSubmit =(e) => {
  e.preventDefault();
  console.log(e.target.children[0].value+" & "+e.target.children[1].value)
  history.push("/overview");
}

const handleClick =(id) => {
  history.push(`/details/${id}`);
}

const handleHome =() => {
  history.push(`/`);
  window.location.reload()  
}

  return (
    <>
      <div className="wrapper">
      <h1 onClick={handleHome}>YELP!mini</h1>
      <h4>by group 3</h4>
      <Search onHandleSubmit={handleSubmit}/>
      <Switch>
        <Route exact path="/overview">
          <Overview data={data} onHandleClick={handleClick}/>
        </Route>
        <Route
              path="/details/:id?"
              render={props => (
          <Details data={data} {...props}/>
          )}
          />
      </Switch>
      
      </div>
   </>
  );
}

export default App;
