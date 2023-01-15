let myname = {
    firstname:'Atul',
    lastname: 'Vishwakarma'
};
(function(){
    console.log(myname.firstname, myname.lastname);
})(myname);
setTimeout(function(){
    console.log("Code will execute after 5 sec");
},5000);
