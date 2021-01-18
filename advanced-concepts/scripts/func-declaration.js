function fn1(val) {
    console.log(val);

    // retour explicite
    //return val * 2;

    // sans retour explicite
    // return undefined;
}

var fn2 = function(val) { 
    console.log(val);
    //return null;
};

var body = "console.log(val)";
var fn3 = new Function("val", body);

fn1("function declaration")
fn2("function expression");
fn3("function constructor");

fn2.userName = "Chris";

/*
Copie de fonction par référence
var fn4 = fn2;
fn4.userName = "Majda"; // écriture
fn2.userName => "Majda" // lecture

fn2.getUserName = function() { console.log(this.userName) }
fn2.getUserName() => "Chris"
*/