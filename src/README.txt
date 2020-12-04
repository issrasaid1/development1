Organization of components:
App.js contains the product list and passes it to FilteredList component.
FilteredList.js contains filtering/sorting/aggregator methods. DisplayList.js maps each product from App.js to an HTML element and displays the product cards.


How data is passed down through components:
Inside the return function in the App() function, I created an instance of the FilteredList component that takes in the productList.
I pass the productList to the FilteredList component as a prop. I pass in the aggregator and filter/sort methods into the DisplayList.


How the user trigger state changes:
When filtering and/or sorting, the user is able to trigger state changes depending on the selected state.
The eventKey from HTML buttons correlates to the event the state is set to.
In order to trigger state changes for the totalPrice variable or the shoppingList, the user must add or remove from the aggregator using buttons (onCLick).
