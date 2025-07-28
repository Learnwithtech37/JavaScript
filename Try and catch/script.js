document.addEventListener("DOMContentLoaded",function(){
    
let UserName = document.getElementById("UserName")
let Password = document.getElementById("password")
let btn = document.getElementById("btn")
let msg = document.querySelector(".msg")


function checkUserName(Name){
    if( Name!==data ){
        throw new Error("UserName is Incorrect")
    }
}

function ChecKpassword(Password){
 if( Password !== data ){
        throw new Error("Password is Incorrect")
    }
}


btn.addEventListener("click",function(){

    try {
        //UserName and Password
        if(UserName.value =="" && Password.value == "" ){
            throw new Error("Enter UserName and Password")
        }

        //UserName
        if(UserName.value == ""){
            throw new Error("Enter UserName")
        }
        else{
            if(UserName.value !== "karthik"){
            throw new Error("UserName is Incorrect")}
        }

        //Password
        if(Password.value == ""){
            throw new Error("Enter Password")
        }
        else{
            if( Password.value !== "12345" ){
            throw new Error("Password is Incorrect")
        }
        }
        
    //All Ok
    msg.innerText = ""
    console.log("login success");
    } catch (error) {
        msg.innerText = error.message
    }
    finally{
        console.log("finally");
    }
})


})



