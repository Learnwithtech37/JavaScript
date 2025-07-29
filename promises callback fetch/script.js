// with arrow functions
function name(name,abc){
    console.log("helo",name);
    abc(y,1)
}

let xyz = ()=>{
    console.log("new function");
}

let z= (c,fun)=>{
    console.log("It is Z function",c);
    fun()
}

let y = (z,a)=>{
    console.log("It is Y function",a);
    z(3,xyz)
}

let x = (y,a)=>{
console.log("It is X function",a);
y(z,2)
}

// name("abc",x)


//promises

let randomNumber = Math.random()
let P = new Promise((resolve,reject)=>{
    if(randomNumber<0.3){
        resolve("Random Number is Generated")
    }
    else if(randomNumber>0.3 && randomNumber<0.6) {
        reject("test")
    }
    else{
        reject("Random Number is not Generated")
    }
})

// P.then((msg)=>{
//     console.log(msg,randomNumber);
// }).catch((msg)=>{
//     console.log(msg,randomNumber);
// })
// console.log(P); 


//fetch 

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then((data)=>{
    // cratecard(data.title,data.url)
    console.log(data);
})
    

function cratecard(title,url){
    //create a element
    //add styles by deafault or with ClassName
    //Add image Tag for img and attach URL in src
    //Append Childs in Parent Element
}



function sum(a,b){
    console.log(a+b);
}
let k= 6;
let m= 4
// sum(k,m)


//with functions
function callback(A){
    console.log("It is a Callback Function");
    A(B,1)
}

function abc(name,fun){
    console.log("Name:",name);
    fun(A)
}

function A(B,b){
    console.log("it is function-A",b);
    B(C,2)
}
function B(C,c){
    console.log("it is function-B",c);
    C(3)
}
function C(d){
    console.log("it is function-C",d);
}

// abc("Hero",callback)

