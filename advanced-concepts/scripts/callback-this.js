document.addEventListener('DOMContentLoaded', function() {

    var logo = document.querySelector('#logo');

    logo.addEventListener('click', function() {
        console.log('clicked');
    })

})

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
    // fermeture (closure) permettant de mémoriser la valeur
    // contextuelle de this avant départ pour la call stack
    var that = this; // copie (référence) de this
    setTimeout(function() {
        console.log(that.firstName + ' ' + that.lastName);
    }, 3000)
}

fullName.call(user1); // => Roberto Baggio
fullName.call(user2); // => Sofia Loren

var fullName = function() {
    // conversation de la valeur de this grâce au "verrou"
    // que procure la méthode bind (cf scripts/bind.js)
    setTimeout(function() {
        console.log(this.firstName + ' ' + this.lastName);
    }.bind(this), 4000)
}

fullName.call(user1); // => Roberto Baggio
fullName.call(user2); // => Sofia Loren
