var x = {}

x.fruit = "papaya";
x.count = "100"
x.callback = function (){
	alert ("I have " +this.count + " of " + this.fruit);	
};

x.callback();
alert(x["fruit"]);



function pet(type, speakAction, legs){
    this.type = type;
    this.legs = legs;
    this.speakAction = speakAction;
    this.legs;
    
    this.standup = function(){
        this.legs = this.legs/2;
        alert(this.legs)
    }
}

var dog = new pet("puppy", function(){alert("Woof");}, 4)

dog.speakAction();

var cat = new pet("cat", function(){
    alert("meow");
},4)



cat.speakAction();
cat.standup();

var json = '{ "type" : "spider", "legs" : 8}';

var hugPet =JSON.parse(json);
alert(hugPet.legs);

for (x in hugPet) {
    alert(x + ": " + hugPet[x]);
}


