import React from 'react';
//import styled from "styled-components"
import axios from "axios"
import './App.css';


export default class App extends React.Component {
state={
  vehicles:[]
}
  
getVehicles = async () => {
  const response = await axios.get(
    "https://swapi.dev/api/vehicles/"
  );
  this.setState({ vehicles: response.data.results});
  console.log(response.data.results);
};

componentDidMount() {
  this.getVehicles();
}


render(){

 
const vehicleList = this.state.vehicles.map((vehicle)=>{
  return (
  <div>
    {vehicle.name}
  </div>
  )
})


  


  return (
    <div>
      <h1>Star Wars</h1>
        <h3>Veículos</h3>
       
        {vehicleList}
      
     
    </div>
  );
}
}

