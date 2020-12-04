import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import FilteredList from "./FilteredList";
import ReactDOM from 'react-dom';
import RangeRover from "./range\ rover.png"
import Mercedes from "./mercedes.png"
import Honda from "./honda.jpg"
import Toyota from "./toyota\ corolla.jpg"
import Lexus from "./lexus.png"
import Bmw from "./bmw.png"
import Nissan from "./nissan\ leaf.jpg"
import Hyundai from "./hyundai\ accent.jpg"
import Tesla from "./tesla.png"
import Porsche from "./porsche\ cayenne.png"
import Kia from "./kia\ rio.png"
import Chevrolet from "./chevrolet\ sonic.png"




{/*create product list as an array of objects of {key:value} pairs*/}
const productList = [

 { name: "Range Rover", id: 12, type: "Luxury", img: RangeRover, price: 70000, size: "SUV"},
 { name: "Mercedes Benz", id: 1, type: "Luxury", img: Mercedes, price: 40000, size: "Small"},
 { name: "Honda Civic", id: 2, type: "Affordable", img: Honda, price: 20000, size: "Small"},
 { name: "Toyota Corolla", id: 3, type: "Affordable", img: Toyota, price: 19000, size: "Small"},
 { name: "Lexus", id: 4, type: "Luxury", img: Lexus, price: 39000, size: "SUV"},
 { name: "BMW X5", id: 5, type: "Luxury", img: Bmw, price: 410000, size: "SUV"},
 { name: "Nissan Leaf", id: 6, type: "Affordable", img: Nissan, price: 30000, size: "Small"},
 { name: "Hyundai Accent", id: 7, type: "Affordable", img: Hyundai, price: 15000, size: "Small"},
 { name: "Tesla Model X", id: 8, type: "Luxury", img: Tesla, price:80000, size: "Small"},
 { name: "Porsche Cayenne", id: 9,  type: "Luxury", img: Porsche, price: 50000, size: "SUV"},
 { name: "Kia Rio", id: 10, type: "Affordable", img: Kia, price: 15100, size: "Small"},
 { name: "Chevrolet Sonic", id: 11, type: "Affordable", img: Chevrolet, price: 16000, size: "Small"},

];



class App extends React.Component {
  render() {
  return (
    <div className="App">
    <h1> CAR SHOP</h1>
    {/*create an instance of the FilteredList component that takes in productList*/}
      <FilteredList items = {productList}/>
    </div>
  );
}
}

export default App;
