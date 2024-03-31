// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield")
    
});

function destructivelyAppendCat(name) {
    cats.push(name)    
}

function destructivelyPrependCat(name2) {
    cats.unshift(name2)    
}

function destructivelyRemoveLastCat(name3) {
    cats.pop(name3)
}

function destructivelyRemoveFirstCat(name4) {
    cats.shift(name4)
}

function appendCat(name5) {

    return [...cats, name5]
        
}

function prependCat(name6) {

    return [name6 ,...cats ]
        
}

function removeLastCat() {

    return cats.slice(0, -1)
}


function removeFirstCat() {

    return cats.slice(1);
}


