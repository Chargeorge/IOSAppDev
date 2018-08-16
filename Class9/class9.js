//http://json.parser.online.fr/
var flashCardArray;
window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "AssignmentJSON.txt", false);  // synchronous request
    xhr.send(null);
    
    
    flashCardArray = JSON.parse(xhr.response);
   
//    alert(flashCardArray[0]);
    var length = flashCardArray.length;
//    alert(flashCardArray.length);
        
    var person = 0;
//TDD     
    person = getRandom(length);
    
//    alert(person);
    alert(flashCardArray[person]);
};



function getRandom(length) {
    return Math.round(Math.random() * (length-1));

}
