//Direct Method
let movie={
  hero:"Bala Krishna",
  Director:"Lord Boya",
  Movie:["Akanda",'Legend'],
  Dialog:function(){
    return("Dont trouble the trouble, trouble troubles you. Im not the trouble Im the truth")
  }
}
// console.log(movie.Dialog());

// -----------------------------------------------------
//Using Constructor
function Person(name,age){
  this.name = name
  this.age = age
  this.Fun = function(name){
    return("It is Function",this.name);
  }
}

let P1 = new Person("abc",10);
let P2 = new Person("xyz",20);
// console.log(P1.Fun(),P2);

//--------------------------------------------------------

//Using Class
class Vechicle{
  constructor(a,b){
     this.a = a
     this.b = b
  }

  something(){
    console.log(`${this.a} is working`);
    return (`${this.a} is working`);
  }
}

let v1 = new Vechicle("hero","zero")
// console.log(v1.something());


//-----------------------------------------------------------------
//Abstraction
function bike(color,cost){
  this.color = color;
  this.cost = cost

  let nxtprice = 200
  this.details = function(){
    console.log(this.color, this.cost);
  }

  this.nxtYrPrice = function(){
    console.log(nxtprice+this.cost);
  }
}

let b1= new bike("black",2000)
// b1.details()
b1.nxtprice = 500
// b1.nxtYrPrice()


//-----------------------------------------------------------------
// Encapsulation example
class persons {
    constructor() {
        let name
        let age
    }
    setName(name){
      this.name = name
    }
    setAge(age){
      this.age = age
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
}
// let person1 = new persons()
// person1.setAge(10)
// person1.setName("Hero")
// console.log(person1.getName())
// console.log(person1.getAge())

// ----------------------------------------------------------------------

// Inheritance example
class Animals{
  eat(){
    console.log(`${this.name} is Eating`);
  }

  sleep(){
    console.log(`${this.name} is Sleeping`);
  }
}

class Lion extends Animals{
  name = "Lion"
  hunt(){
    console.log(`${this.name} is hunting`);
  }
}
class Tiger extends Animals{
  name = "Tiger"
  running(){
    console.log(`${this.name} is running`);
  }
}
class Crow extends Animals{
  name = "Crow"
  flying(){
    console.log(`${this.name} is Flying`);
  }
}

let tiger = new Lion()
// tiger.hunt()


//-------------------------------------------------------------

function callPerson(Place){
  Place.behaviour()
}

const atHome = {
  behaviour: function(){
    console.log("Good");
  }
}

const atClg = {
  behaviour : function(){
    console.log("as Student");
  }
}

const withFrnds = {
  behaviour: function(){
    console.log("In chill mood");
  }
}

callPerson(atHome)





//-------------------------------------------------------
// Async/Await

async function fetchData() {
  console.log("work");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}
// fetchData();


//-----------------------------------------
//Async with Delay
function delay(ms){
  return new Promise(reslove=>{setTimeout(reslove,ms)})
}

async function run() {
  console.log("before Delay");
  await delay(3000)
  console.log("After Delay");
}

// run()


