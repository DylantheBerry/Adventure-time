const { Item } = require('./item')
// const Player = require('./player')

class Food extends Item {
    constructor(name, description, isFood = true) {
        super(name, description)
        this.isFood = isFood
    }
}

// Create an edible `Food` class that inherits from the `Item` class

// Your code here


module.exports = {
    Food,
}
