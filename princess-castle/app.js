// let randomNumber = (Math.floor(Math.random()));

class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = false;
    }

    setName() {
        // let namePicked = (randomNumber * 2);
        let namePicked = Math.floor(Math.random()* 2);

        if(namePicked == 0) {
            this.name = "Mario"
        } else {
            this.name = "Luigi"
        }
    }
// if player gets hit by the enemy 
    gotHit() {
        if(this.status == "powered up") {
            this.status = "big"
        } else if(this.status == "big") {
            this.status = "small"
        } else if(this.status == "small") {
            this.status = "dead"
        }
    }

    // recieved power up
    gotPowerUp() {
        if(this.status == "small"){
            this.status = "big"
        } else if (this.status == "big") {
            this.status = "powered up"
        } else if(this.status == "powered up") {
            this.hasStar = true;
        }
    }

    addCoin() {
        this.totalCoins = this.totalCoins + Number(1)
    }

    print() {
        if(this.hasStar == true) {
            console.log("Congratulations! You got a star!")
        } 
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n`) 
    }
}

const newPlayer = new Player("new player", 0, "big", false);

newPlayer.setName();
// selects gotHit, gotPowerup or addCoin
function randomRange() {
    // let chooseEvent = (randomNumber * 3);
    let chooseEvent = Math.floor(Math.random ()* 3);

    if(chooseEvent == 0) {
        newPlayer.gotHit();
    } else if(chooseEvent == 1) {
        newPlayer.gotPowerUp();
    } else if(chooseEvent == 2) {
        newPlayer.addCoin();
    }
    newPlayer.print();
}
let timer
function startGame () {
    timer = setInterval(() => {
        if (newPlayer.status == "dead") {
            clearInterval(timer);
        } else {
            randomRange();
        }
    }, 2000)
}

startGame();