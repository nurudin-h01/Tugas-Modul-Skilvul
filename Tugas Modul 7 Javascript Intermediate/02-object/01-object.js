///1
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
        "coffee",
        "jamu temulawak",
        "tea"
    ],
    greeting: function() {
        console.log("hello world")
    }
}

/// EDIT HERE
person.name = "Muhammad Nurudin Hidayat"
person.favDrinks[1] = "tap water"
person.greeting = function(name) {
        console.log("hello", name)
    }
    /// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));