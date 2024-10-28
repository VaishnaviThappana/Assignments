// Array of items
const items = ["apple", "banana", "cherry"];

// Function to get items as a string
function getItems() {
    return items.join(", ");
}

// Export array and function
module.exports = { items, getItems };
