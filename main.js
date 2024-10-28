// Import modules
const { items, getItems } = require('./module1');
const { user } = require('./module2');

// Display results to console
console.log("Items:", items);            // Display the array
console.log("Formatted Items:", getItems()); // Display formatted items
console.log("User Info:", user);          // Display the user object
