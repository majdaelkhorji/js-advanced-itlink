var firstName = 'Alain', lastName = 'Deloin';
var user1 = {firstName: 'Roberto', lastName: 'Baggio'};
var user2 = {firstName: 'Sofia', lastName: 'Loren'};

var fullName = function() {
    console.log(this.firstName + ' ' + this.lastName);
}

fullName(); // => Alain Deloin
fullName.call(user1); // => Roberto Baggio
fullName.call(user2); // => Sofia Loren

var fullName = function() {
    setTimeout(function() {
        console.log(this.firstName + ' ' + this.lastName);
    }, 2000)
}

// Perte du this binding en raison de l'utilisation
// interne de la call stack pour le traitement
// de la callback de setTimeout (asynchrone)
fullName.call(user1); // => Alain Deloin
fullName.call(user2); // => Alain Deloin


var fullName = function() {
    // callback: arrow function (ES6)
    // implicit this binding
    setTimeout(() => {
        console.log(this.firstName + ' ' + this.lastName)
    }, 3000)
}

fullName.call(user1); // => Alain Deloin
fullName.call(user2); // => Alain Deloin