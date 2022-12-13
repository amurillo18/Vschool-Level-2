const name = "John"
// const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// task 1

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => ({ type: "carrot", name: carrot }))
}
// task2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) =>
        person.friendly
    )
}

// task 3

const doMathSum = (a, b) =>
     a + b

var produceProduct = (a, b) => a * b

// task 4
let firstName = "Jane";
let lastName = "Doe";
let age = 100;
const printString = (firstName, lastName,age) => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)

console.log(printString("Kat", "Stark", 40))

// task 5

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr) => arr.filter(animal => animal.type === "dog") 
         
 console.log(filterForDogs(animals))
 
 const welcome = (location, name) => (`Hi ${name}\nWelcome to ${location}.\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`) 

 console.log(welcome("Hawaii", "Janice"))