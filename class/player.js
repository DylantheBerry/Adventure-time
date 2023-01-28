const { Food } = require('./food');
const Room = require('./room')

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // for (let i = 0; i < this.currentRoom.items.length; i++) {
        //     let item = this.currentRoom.items[i]
        //     // console.log("In the loop")
        //     if (itemName === item.name) {
        //         console.log("Conditional", item)
        //         return this.items.push(itemName)
        //     }
        // }
        // Picks up an item from the current room into the player's inventory
        let item = this.currentRoom.getItemByName(itemName)
        if (item !== undefined) {
            this.items.push(item)
        }
    }

    dropItem(itemName) {
        // Drops an item the player is holding into their current room
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i]
            // console.log('loop', item.name)
            if (itemName === item.name) {
                // console.log('if', item)
                this.currentRoom.items.push(item)
                this.items.splice(this.items.indexOf(item), 1)
            }
        }
    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items
        // console.log(this.items)
        // if (this.items.isFood) {
        //     // console.log(itemName)
        //     this.items.splice(this.items.indexOf(itemName), 1)
        // }
        this.items.forEach((el, i) => {
            if (el instanceof Food && el.name === itemName) {
                this.item.splice(i, 1)
            }
        })
        // Your code here
    }

    getItemByName(name) {
        // Retrieves an item from a player's inventory by item name
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name) {
                return this.items.splice(i, 1)[0]
            }
        }
    }
}

module.exports = {
    Player,
};
