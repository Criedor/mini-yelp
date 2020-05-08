import React, { useState } from 'react';
import Search from './components/search'
import Overview from './components/overview'
import Details from './components/details'
import { Switch, Route, useHistory} from "react-router-dom";
import './App.css';

function App() {
const [data, setData] = useState([
   {restaurant: {id: "1", name: "Restaurant 1", city_id: "city Id 1", comment_id: "comment_id 1"}, comment: {id: "1", text: "text", date: "date"}, city: {id: "1", name:"name"}, restaurant_has_tag: {id_restaurant: "1", id_tag:"1"}, tag: { id: "1", name: "name 1"}},
   {restaurant: {id: "2", name: "Restaurant 2", city_id: "city Id 2", comment_id: "comment_id 2"}, comment: {id: "2", text: "text", date: "date"}, city: {id: "2", name:"name"}, restaurant_has_tag: {id_restaurant: "2", id_tag:"2"}, tag: { id: "2", name: "name 2"}},
   {restaurant: {id: "3", name: "Restaurant 3", city_id: "city Id 3", comment_id: "comment_id 3"}, comment: {id: "3", text: "text", date: "date"}, city: {id: "3", name:"name"}, restaurant_has_tag: {id_restaurant: "3", id_tag:"3"}, tag: { id: "3", name: "name 3"}}
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








  return (
    <>
      <div className="wrapper">
      <h1>YELP!mini</h1>
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
