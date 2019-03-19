'use strict';
var outputC = document.getElementById('C');

outputC.innerHTML = 'Przeliczmy stopnie Celcjusza na Fahrenheit'+'<br><br>';

var buttonC = document.getElementById('c-f-button');

buttonC.addEventListener('click', function(){
  
    var temp = window.prompt('Podaj temperaturę w stopniach Celcjusza:');
  var temp2 = parseFloat(temp);
  if ((temp === null) || (temp === "") || ((temp.replace(/\s/g,'').length === 0))) {
    outputC.innerHTML = 'Hej, ale wpisz coś?!'
  } else if(isNaN(temp2)) {
	  outputC.innerHTML = 'Niestety! '+temp+' nie jest liczbą!'+'<br><br>';
  } 
  else{
    var tempF = temp2 * 9/5 + 32;
    if(temp2 <= 0) {
      outputC.innerHTML = temp2+' stopni Celcjusza to w przeliczeniu '+tempF+' stopni Farhenheita'+'<br><br>'+'W tej temperaturze woda jest lodem.'+'<br><br>';
    } 
    else if ((temp2 > 0) && (temp < 100)) {
      outputC.innerHTML = temp2+' stopni Celcjusza to w przeliczeniu  '+tempF+' stopni Farenheita'+'<br><br>'+'W tej temperaturze woda jest płynna.'+'<br><br>';
    }
    else if (temp2 >= 100) {
      outputC.innerHTML = temp2+' stopni Celcjusza to  '+tempF+' stopni Farenheita'+'<br><br>'+'W tej temperaturze woda jest w stanie parą wodną.'+'<br><br>';
    }
  }
});

var outputF = document.getElementById('F');

outputF.innerHTML = 'Przeliczymy stopnie Celcjusza na Farenheit'+'<br><br>';

var buttonF = document.getElementById('f-c-button');

buttonF.addEventListener('click', function(){
 var temp = window.prompt('Podaj temperaturę w stopniach Celcjusza:');
  var temp3 = parseFloat(temp);
  if ((temp === null) || (temp === "") || ((temp.replace(/\s/g,'').length === 0))) {
    outputF.innerHTML = 'Hej, ale coś musisz wpisać?!'
  } else if(isNaN(temp3)) {
	  outputF.innerHTML = 'Niestety! '+temp+' nie jest liczbą!'+'<br><br>';
  } 
  else{
    var tempC = (5/9) * (temp3-32);
    if(temp3 <= 33.8) {
      outputF.innerHTML = temp3+' stopni Farhenheita to w przeliczeniu to w przeliczeniu to '+tempC+' stopni Celcjusza'+'<br><br>'+'W tej temperaturze woda jest lodem.'+'<br><br>';
    } 
    else if ((temp3 > 33.8) && (temp3 < 100)) {
      outputF.innerHTML = temp3+' stopni Farhenheita to w przeliczeniu to w przeliczeniu to '+tempC+' stopni Celcjusza'+'<br><br>'+'W tej temperaturze woda jest płynna.'+'<br><br>';
    }
    else if (temp3 >= 100) {
      outputF.innerHTML = temp3+' stopni Farhenheita to w przeliczeniu to w przeliczeniu to  '+tempC+' stopni Celcjusza'+'<br><br>'+'W tej temperaturze woda jest w parą wodną.'+'<br><br>';
    }
  }
});
