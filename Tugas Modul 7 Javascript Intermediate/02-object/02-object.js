///2
function getObjectValue(obj, path) {
    if (path.includes(".")) {
        let value = path.split(".")
        let element = obj
        for (let i = 0; i < value.length; i++) {
            element = element[value[i]]
        }
        if (typeof element !== 'undefined') {
            return element
        } else {
            return null
        }
    } else {
        return obj[path]
    }
}

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
            origin: "lampung",
            roastProfile: "medium to dark",
            ratio: 1
        },
        milk: {
            brand: "susu murni",
            isVegan: false,
            ratio: 5
        }
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)