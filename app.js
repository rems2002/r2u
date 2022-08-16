const playerName = "jm";
const playerPoints =  1000;
const playerHansome = false;
const playFat = "Little bit";
//player[0] == name
//player[1] == point

const player = {
    name: "jmra", 
    points: 10, 
    fat: true, 
};
console.log(player);
player.name = "leon";
console.log(player);

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy[2]);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);

console.log(player);
player.lastName = "potato";
player.points = player.points + 15;
console.log(player); 


function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age );
}

sayHello("jm", 19);
sayHello("B", 20);
sayHello("C", 21);

function plus(a, b){
    console.log(a + b);
}

function divide(a, b){
    console.log(a / b);
}
plus(60, 8);
divide(30, 5);


const players = {
    name: "jm", 
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you ");
    },
};

console.log(players.name);
players.sayHello("TE");

/*const calculater = {
    add: function(a, b){
         console.log(a + b);
    }, 
    minus: function(a, b){
        console.log(a - b);
    }, 
    divide: function(a, b){
        console.log(a / b);
    }, 
    multiply: function(a, b){
        console.log(a * b);
    }, 
    powerof: function(a, b){
        console.log(a** b);
   }, 
};
calculater.add(6, 2); 
calculater.minus(6, 2); 
calculater.divide(6, 2); 
calculater.multiply(6, 2); 
calculater.powerof(6, 2); */


const calculator ={
    add:function(a, b){
        return(a + b);
    }, 
    minus:function(a, b){
        return(a -b);
    }, 
    multiply:function(a, b){
        return(a*b);
    }, 
    divide:function(a, b){
        return(a/b);
    }, 
    powerof:function(a, b){
        return(a**b);
    }
}

const addResult = calculator.add(10, 5);
const minusResult = calculator.minus(addResult, 5);
const multiplyResult = calculator.multiply(minusResult, 5);
const divideResult = calculator.divide(multiplyResult, 5);
const powerofResult = calculator.powerof(divideResult, 5);

console.log(addResult);
console.log(minusResult);
console.log(multiplyResult);
console.log(divideResult);
console.log(powerofResult);