//var x = 3;
//console.log("hi");
//
////find 12 divided by 2 and add 3 to the quotient
//
////alert(12+1);
//
////alert(Math.min(5, 6));
//
////is 9 * (10 + 4) / 3 greater than (7 + 5 -1) * 4
//
//var a = "short and stout";
//var b =  "pour me out";
//var c = "tip me over";
//var d = "I'm a little teapot";
//var e ="I'm a little";
//
////alert(a + 1);
//
//var testNumber = 3;
//
//if(testNumber > 3){
//    alert("bigger");
//}else if(testNumber < 3){
//    alert("smaller");
//}else{
//    alert("same");
//}
//
////area of a circle is pi (3.14) * radius^2
//
//function radius (r){
//    return r* r * 3.14
//}
//
//alert(radius(2));

function Concat(a, b){
    return a + b;
}

function GreaterThan(a, b){
    return a > b;
}

function Circumference(r){
    return r*2 * 3.14;
}

function IsEven(number){
    return (number % 2) == 0;
}

function Square(number){
    return number* number;
}


function testVal(output, desired, successText, failText){
    if(output === desired){
        alert(successText + " \r\n your result: " + output);
    }
    else{
         alert(failText + " \r\n your result:  " + output);
    }
}

testVal(Concat("hello: ", "world"), "hello: world", "Concat worked", "Concat failed");
testVal(GreaterThan(2,3), false, "Greater than worked", "Greater than failed");
testVal(IsEven(4), true, "Is Even worked", "is even failed");
testVal(IsEven(3),false, "Is Even worked", "is even failed");
testVal(Square(2),4, "square worked", "square failed");


