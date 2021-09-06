//console.log(document.getElementById("tt"));

//console.log(document instanceof HTMLDocument);

//function sayhello(){
 //   console.log(document.getElementById("name").value);
//}

//function sayhello(){
  // var name= document.getElementById("name").ariaValueMax;
  // var message = "<h2>hello"+name+"!</h2>";
//}
function sayhello(){
   var name= document.getElementById("name").value;
    var message = "<h2>hello"+name+"!</h2>";
    document
    .getElementById("ci")
    .innerHTML=message;
    
 }
 