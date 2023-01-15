const message = function(){
    console.log("Hello!!");
}

setTimeout(message,3000);

setTimeout(()=>{
    console.log("Good Morning");
}, 2000)