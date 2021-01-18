/*
var greeting = function() {
    console.log("Bonjour");
}

dir(greeting);
greeting()
greeting.call()
greeting.apply()
*/

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

var greeting = function(term) {
    console.log(term + ' ' + this.firstName);
}

var greeting2 = function(term, punct) {
    console.log(term + ' ' + this.firstName + punct);
}

greeting.call(user1, 'Bonjour');
greeting.call(user2, 'Bonsoir');

greeting2.apply(user1, ['Bonjour', '?']);
greeting2.apply(user2, ['Bonsoir', '!']);

console.log(user1.fullName.call(user2));
