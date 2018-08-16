var assocArray = {};

assocArray["name1"] = "Fred";

console.log(assocArray["name"]);

assocArray.name = "bob";

console.log(assocArray.name);



var pet = {};

pet.color = "white";
pet.type = "cow";
pet.sizeLbs = 2000;

var kitten ={};

function summonPet(color, type, sizeLbs){
    var returnablePet = {};
    returnablePet.color = color;
    returnablePet.type = type;
    returnablePet.sizeLbs = 100;
    
    return returnablePet;
}

function animal(color, type, sizeLbs){
    this.color = color;
    this.type = type;
    this.sizeLbs = sizeLbs;
    
    this.bark = function(){
        if(this.type == "dog") {
            alert("woof");
        }
    }
    
    this.feed = function(foodInLbs){
        //set a new weight in lbs
    }
    //Feed function, take 1 number as a parameter, and increase the weight by that amount
    
}

var goldy = summonPet("gold", "chicken", 5);
var fido = new animal("black", "dog", 20);



console.log(goldy.color);
console.log(fido.sizeLbs);

fido.feed(2);
console.log(fido.sizeLbs);
