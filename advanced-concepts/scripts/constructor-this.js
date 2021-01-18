function Greeting() {
    console.log(this);
}

Greeting(); // => window (objet global)

new Greeting(); // => Greeting

function User(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var user1 = new User('Roberto', 'Baggio');
var user2 = new User('Sofia', 'Loren');

/*
user1
user2

User('Alain', 'Delon'); // sans l'opérateur new, this est résolu (bound) dans le contexte de window
window.firstname; // => Alain

*/