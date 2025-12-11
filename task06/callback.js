/**
 * Create a Simple Callback Function
 * ------------------------------------------------------------------------
 *
  Write a function greet(name, callback), where callback prints a message using the name parameter.
 */

function greet(name, callback) {
    callback(name);
}

// Example callback function
function printMessage(name) {
    console.log("Hello, " + name + "!");
}
// Example usage:
greet("Alice", printMessage); // Hello, Alice!
