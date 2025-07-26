document.addEventListener("DOMContentLoaded",function(){
const ggp= document.getElementById("ggp");
const gp= document.getElementById("gp");
const parent= document.getElementById("parent");
const child= document.getElementById("child");
const New = document.querySelector(".new")


ggp.addEventListener("click",function(){
    console.log("GGP clicked");
    ggp.style = "background-color:black"
    event.stopPropagation()

})
gp.addEventListener("click",function(){
    console.log("GP clicked");
    gp.style = "background-color:blue"
    event.stopPropagation()


})
parent.addEventListener("click",function(){
    console.log("Parent clicked");
    parent.style = "background-color:red"

    event.stopPropagation()

})
child.addEventListener("click",function(){
    console.log("child clicked");
    child.style = "background-color:green"
    event.stopPropagation()

})

New.addEventListener("click",function(event){
event.target.classList.toggle("cls")

})







})
