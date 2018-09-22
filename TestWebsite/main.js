//we are gonna take in the text and save it as an object.
//we will parse that object into json and use jquery to store it in local storage.
//we will pull that object from local storage convert it into a string and then slice that into a char array
//we will take that char array and do a number of things to it. to include, reversing, pig latin, 



function StoreInput(){

  var carName = "Volvo";
  var input;

  carName = document.getElementById("input").value;

  var testObject = { 'name': carName };
  localStorage.setItem('testObject' , JSON.stringify  (testObject));
  

  getObject(testObject);
  PLatin();
  Reverse();
  }

  function getObject(){
    var retrieveObject = localStorage.getItem('testObject');

    console.log(retrieveObject, JSON.parse(retrieveObject));
    return retrieveObject;
  }
function PLatin(){  
 var pigLatin=  parseString();

  var regex = /[aeiou]/gi;

  if(pigLatin[0].match(regex))
    {
      pigLatin = pigLatin+'way';
    } 
      else{
    var VowelSpot = pigLatin.indexOf(pigLatin.match(regex)[0]);

    pigLatin = pigLatin.substr(VowelSpot) + pigLatin.substr(0, VowelSpot)+'ay';
  }
  console.log(pigLatin);
  document.getElementById("PigLatin").value=pigLatin;
}

function Reverse(){

  var reverse=  parseString();
  var newString="";


 for(var i = reverse.length -1; i>=0; i--){
  newString+=reverse[i];
 }

 console.log(newString);

 document.getElementById("Reverse").value = newString;
}

function parseString(){
  var input = getObject();
  var parsed;
 
   parsed= JSON.parse(input);
 
  var pigLatin= parsed['name'];

  return pigLatin;
}

function getOriginal(){
  var x= document.getElementById("getOriginalButton");
  x.addEventListener("click", alert("You have retrieved the original!"));
  var retrieveObject = localStorage.getItem('testObject');
  var parsedObject;

  parsedObject= JSON.parse(retrieveObject);

  var test= parsedObject['name'];

  document.getElementById("Original").value=test;

  
} 