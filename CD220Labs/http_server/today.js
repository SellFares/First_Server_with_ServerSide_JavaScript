 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    const { DateTime } = require("luxon");
    let aestTime = DateTime.now().setZone("Australia/Brisbane").toLocaleString(DateTime.DATETIME_MED);
    return aestTime; // Return the formatted date and time
    //v2
};
