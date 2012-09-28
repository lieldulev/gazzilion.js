var g_version = document.getElementById('gaz_ver');
g_version.innerHTML = Gazzilion.VERSION;
var numbers = [13.2,1024.514,2950000,10930000000];
var numbers_big = [120500,2911111];
var numbers_mix1 = [1024.514];
var numbers_mix2 = [10900000000];

var results = document.getElementById('results_add_commas');
for(var i=0;i < numbers_mix1.length; i++){
  number = numbers_mix1[i];
  if(i != 0) {results.innerHTML += "\n";}
  results.innerHTML += 'Gazzilion.add_commas('+number+');    // "'+Gazzilion.add_commas(number) + '"' + "\n";
  results.innerHTML += 'Gazzilion.add_commas('+number+', 2); // "'+Gazzilion.add_commas(number, 2) + '"' + "\n";
  results.innerHTML += "\n"+'number = '+number+';'+"\n";
  results.innerHTML += 'number.add_commas();  // "'+ number.add_commas() + '"' + "\n";
  results.innerHTML += 'number.add_commas(2); // "'+ number.add_commas(2) + '"' + "\n";
}

var results = document.getElementById('results_K');
for(var i=0;i < numbers_big.length; i++){
  number = numbers_big[i];
  if(i != 0) {results.innerHTML += "\n";}
  results.innerHTML += 'Gazzilion.K('+number+');    // "'+Gazzilion.K(number)+ '"' + "\n";
  results.innerHTML += 'Gazzilion.K('+number+', 2); // "'+Gazzilion.K(number, 2)+ '"' + "\n";
  results.innerHTML += "\n"+'number = '+number+';'+"\n";
  results.innerHTML += 'number.K(); // "'+number.K()+ '"' + "\n";
  results.innerHTML += 'number.K(2); // "'+number.K(2)+ '"' + "\n";
}

var results = document.getElementById('results_M');
for(var i=0;i < numbers_big.length; i++){
  number = numbers_big[i];
  if(i != 0) {results.innerHTML += "\n";}
  results.innerHTML += 'Gazzilion.M('+number+');    // "'+Gazzilion.M(number)+ '"' + "\n";
  results.innerHTML += 'Gazzilion.M('+number+', 2); // "'+Gazzilion.M(number, 2)+ '"' + "\n";
  results.innerHTML += "\n"+'number = '+number+';'+"\n";
  results.innerHTML += 'number.M(); // "'+number.M()+ '"' + "\n";
  results.innerHTML += 'number.M(2); // "'+number.M(2)+ '"' + "\n";
}

var results = document.getElementById('results_B');
for(var i=0;i < numbers_mix2.length; i++){
  number = numbers_mix2[i];
  if(i != 0) {results.innerHTML += "\n";}
  results.innerHTML += 'Gazzilion.B('+number+');    // "'+Gazzilion.B(number)+ '"' + "\n";
  results.innerHTML += 'Gazzilion.B('+number+', 2); // "'+Gazzilion.B(number, 2)+ '"' + "\n";
  results.innerHTML += "\n"+'number = '+number+';'+"\n";
  results.innerHTML += 'number.B(); // "'+number.B()+ '"' + "\n";
  results.innerHTML += 'number.B(2); // "'+number.B(2)+ '"' + "\n";
}

var results = document.getElementById('results_thousand');
for(var i=0;i < numbers_big.length; i++){
  number = numbers_big[i];
  if(i != 0) {results.innerHTML += "\n";}
  results.innerHTML += 'Gazzilion.thousand('+number+');    // "'+Gazzilion.thousand(number)+ '"' + "\n";
  results.innerHTML += 'Gazzilion.thousand('+number+', 2); // "'+Gazzilion.thousand(number,2)+ '"' + "\n";
  results.innerHTML += "\n"+'number = '+number+';'+"\n";
  results.innerHTML += 'number.thousand(); // "'+number.thousand()+ '"' + "\n";
  results.innerHTML += 'number.thousand(2); // "'+number.thousand(2)+ '"' + "\n";
}

var results = document.getElementById('results_million');
for(var i=0;i < numbers_big.length; i++){
  number = numbers_big[i];
  if(i != 0) {results.innerHTML += "\n";}
  results.innerHTML += 'Gazzilion.million('+number+');    // "'+Gazzilion.million(number)+ '"' + "\n";
  results.innerHTML += 'Gazzilion.million('+number+', 2); // "'+Gazzilion.million(number,2)+ '"' + "\n";
  results.innerHTML += "\n"+'number = '+number+';'+"\n";
  results.innerHTML += 'number.million(); // "'+number.million()+ '"' + "\n";
  results.innerHTML += 'number.million(2); // "'+number.million(2)+ '"' + "\n";
}

var results = document.getElementById('results_billion');
for(var i=0;i < numbers_mix2.length; i++){
  number = numbers_mix2[i];
  results.innerHTML += 'Gazzilion.billion('+number+');    // "'+Gazzilion.billion(number)+ '"' + "\n";
  results.innerHTML += 'Gazzilion.billion('+number+', 2); // "'+Gazzilion.billion(number, 2)+ '"' + "\n";
  results.innerHTML += "\n"+'number = '+number+';'+"\n";
  results.innerHTML += 'number.billion();  // "'+number.billion()+ '"' + "\n";
  results.innerHTML += 'number.billion(2); // "'+number.billion(2)+ '"' + "\n";
}

var results = document.getElementById('results_to_letter');
for(var i=0;i < numbers.length; i++){
  number = numbers[i];
  if(i != 0) {results.innerHTML += "\n";}
  results.innerHTML += 'Gazzilion.to_letter('+number+');   // "'+Gazzilion.to_letter(number)+ '"' + "\n";
  results.innerHTML += 'Gazzilion.to_letter('+number+',2); // "'+Gazzilion.to_letter(number,2)+ '"' + "\n";
  results.innerHTML += 'number = '+number+';'+"\n";
  results.innerHTML += 'number.to_letter();  // "'+number.to_letter()+ '"' + "\n";
  results.innerHTML += 'number.to_letter(2); // "'+number.to_letter(2)+ '"' + "\n";
}

var results = document.getElementById('results_to_word');
for(var i=0;i < numbers.length; i++){
  number = numbers[i];
  if(i != 0) {results.innerHTML += "\n";}
  results.innerHTML += 'Gazzilion.to_word('+number+');   // "'+Gazzilion.to_word(number)+ '"' + "\n";
  results.innerHTML += 'Gazzilion.to_word('+number+',2); // "'+Gazzilion.to_word(number,2)+ '"' + "\n";
  results.innerHTML += 'number = '+number+';'+"\n";
  results.innerHTML += 'number.to_word();  // "'+number.to_word()+ '"' + "\n";
  results.innerHTML += 'number.to_word(2); // "'+number.to_word(2)+ '"' + "\n";
}

