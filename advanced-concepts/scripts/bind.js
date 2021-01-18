var user1 = {
    firstName: 'Roberto',
    lastName: 'Baggio',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var user2 = {
    firstName: 'Sofia',
    lastName: 'Loren',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var greeting = function(term, punct) {
    console.log(term + ' ' + this.firstName + punct);
}

// bind retourne une fonction
// "verrouillée" (locker) à un contexte d'exécution
// on peut décider d'ajouter des "remplissage" d'arguments
// à la création de ce lien
var morningGreet = greeting.bind(user1, 'Bonjour');
var eveningGreet = greeting.bind(user1, 'Bonsoir');

morningGreet('?');
eveningGreet('!');

morningGreet.call(user2, ';'); // Bonjour Roberto; no rebinding

