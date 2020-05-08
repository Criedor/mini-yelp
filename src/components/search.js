import React from 'react';
import '../App.css';


function Search(props) {
  

    return (
     <div className="search">
     <form onSubmit={(e)=>props.onHandleSubmit(e)}>
         <input type="text" name="find_tag" placeholder="Burger, Asia, Vegan,..."></input>
         <input type="text" name="find_pos" placeholder="City, Country"></input>
         <button>Search</button>
     </form>
     </div>
    );
  }
  
  export default Search;