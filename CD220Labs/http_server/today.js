// Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    // old method
    // return new Date(aestTime);             // Return the formatted date and time
    // new method
    return aestTime = new Date(aestTime);     // Convert that string back into a Date object
}

// Export Function  :   Use module.exports to export a function named getDate from the module.

// Date Formatting  :   Inside the getDate function, get the current date and time using new Date().toLocaleString(“en-US”, {timeZone: “Australia/Brisbane”}). This formats the date and time according to the timezone “Australia/Brisbane”.

// Return Value     :   Return the formatted date and time using return aestTime;.

