//function testFunction (argument) {
//    //argument("hi");
//    console.log("Hey I'm here: "+ argument() );
//}
//testFunction("Hey I'm here");


//Scope

var x = 10;

//function fu(bx){
//	bx++;
//	return bx;
//}
//
//function bar(cx){
//	bx++;
//	var local=  10;
//	return cx;
//}

//function fubar(){
//	alert (local);
//}
//
var clojure= function (sacrosanct){
	alert(sacrosanct);
}

var newFunction = function(){
    console.log(Math.random());
    x +=1; 
    var b = "jumping jacks";
    
    var newfunc = function(){
        alert(b);
    }
};

var a = "test";
//CLOSURE
var function2 = function(b){
    
    console.log(a);
   
}

function2();

var btn = document.getElementById("button");


btn.onclick = clojure;

btn.onmouseover = newFunction;
