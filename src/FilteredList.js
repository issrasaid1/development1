import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import DisplayList from "./DisplayList";


class FilteredList extends Component {
  constructor(props) {
    super(props);
    //need to keep track of variables as a state
    this.state = {
    shoppingList: [],
    type: "All",
    size: "All",
    sort: "All",
    items: this.props.items,
    totalPrice: 0
    };
  }

  //function takes in an item, makes a copy of the shoppingList array and adds the item to that copied array
  //set the shoppingList to copyArray and update the totalPrice/state
  onAggregatorAdd = itemId => {
    const copyArray = [...this.state.shoppingList, itemId];
    this.setState({shoppingList: copyArray, totalPrice: this.state.totalPrice + itemId.price });

  };


 //helper method that checks if the item is in the array
  handleCheck = val => {
      return this.state.shoppingList.some(item => val.name === item.name);
  }

  //removes item from the list by filtering with the specific item and only return things that are not that item
  //decrememnt the price/update state
  onAggregatorRemove= itemId => {
    if (this.state.totalPrice > 0 && this.state.shoppingList.length && this.handleCheck(itemId)) {
    const items = this.state.shoppingList.filter((item) => {
     return item.id !== itemId.id});
    this.setState({shoppingList: items, totalPrice: this.state.totalPrice - itemId.price });
}
  };

  //sets the state to the selected type, function passed to the onSelect event handler of HTML buttons
  onSelectFilterType = event => {
    this.setState({ type:  event.target.value });
  };

  //sets the state to the selected size, function passed to the onSelect event handler of HTML buttons
  onSelectFilterSize = event => {
    this.setState({ size: event.target.value });
  };

  // creating a type filtering condition
  //checking if the item’s type property matches the type state so that only the items that match the filter type is returned
  matchesFilterType = item => {
    if(this.state.type === "All"){
      return true;
    }
    else if(this.state.type === item.type) {
      return true;
    }
    else {
      return false;
    }
  }

  // creating a size filtering condition
  //checking if the item’s size property matches the type state so that only the items that match the filter size is returned
  matchesFilterSize = item => {
    if(this.state.size === "All") {
      return true;
    }
    else if(this.state.size === item.size) {
      return true;
    }
    else {
      return false;
    }
  }

  //sets the state to the selected sorting method, function passed to the onSelect event handler of HTML buttons
  onSort = event => {
    this.setState({ sort: event.target.value });
  };

  //sorts items from low to high price
  sortOptions = (item1, item2) => {
    if (this.state.sort === "All") {
      return 0;
    }
    else if (this.state.sort === "price") {
      return item1.price - item2.price;
    }
  }

container = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
};



  render() {
    return (
      //set up drop down menu for filtering and sorting
    <div>
    <form style = {this.container}>
    <div style = {this.container}>
    <InputLabel>Filter Size:</InputLabel>
    <Select onChange={this.onSelectFilterSize}  defaultValue={"All"}>

    <MenuItem value={"All"}>All</MenuItem>
    <MenuItem value={"Small"}>Small</MenuItem>
    <MenuItem value={"SUV"}>SUV</MenuItem>
    </Select>
    </div>

    <div style = {this.container}>
    <InputLabel>Filter Type:</InputLabel>
    <Select onChange={this.onSelectFilterType} defaultValue={"All"}>

    <MenuItem value={"All"}>All</MenuItem>
    <MenuItem value={"Luxury"}>Luxury</MenuItem>
    <MenuItem value={"Affordable"}>Affordable</MenuItem>
    </Select>

    <div style = {this.container}>
    <InputLabel>Sort by:</InputLabel>
    <Select onChange={this.onSort}  defaultValue={"All"}>

    <MenuItem value={"All"}>All</MenuItem>
    <MenuItem value={"price"}>Price</MenuItem>

    </Select>

</div>

  </div>

    </form>


    <div class="itemsDisplayList">
    {/*filter and sort product list; pass in aggregator functions*/}
    <DisplayList items={this.state.items.filter(this.matchesFilterSize).filter(this.matchesFilterType).sort(this.sortOptions)} onAggregatorAdd={this.onAggregatorAdd} onAggregatorRemove={this.onAggregatorRemove} />
    </div>
    <div class="aggregator">
    <h2 style = {{color: 'navy'}}>Shopping Cart:</h2>
    <h3> Total Cost = ${Math.abs(this.state.totalPrice.toFixed(2))}</h3>
    {/*pass in aggregator functions to displaylist*/}
    <DisplayList items={this.state.shoppingList} onAggregatorAdd={this.onAggregatorAdd} onAggregatorRemove={this.onAggregatorRemove}></DisplayList>
    </div>
    </div>
  );
  }
}

export default FilteredList;
