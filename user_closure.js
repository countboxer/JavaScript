// Example code - called by closure.js
// Written on 2019-07-17

function User() {
    let firstName = "Will";
    let lastName = "Smith";
    return {
        getFirstName : function () {
            console.log(firstName);
        },
        getLastName: function () {
            console.log(lastName);
        },
        showFullName :function () {
            console.log(firstName + " " + lastName);
        }
    }
}
module.exports = User;