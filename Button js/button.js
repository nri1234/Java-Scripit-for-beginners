'use strict';


var output = document.getElementById('greeter-output');


output.innerHTML = 'Click the button! I want to say hello! '+'<br><br>'+output.innerHTML; 


var button = document.getElementById('greeter-button');
button.addEventListener('click', function() {
 var userName = window.prompt('What is your name?');
  if(userName){
    output.innerHTML = 'Hello '+userName+'!' + '<br><br>'; 
  }
  else{
      output.innerHTML = 'Hello Stranger '+'!' + '<br><br>'; 
   
  }
}); 