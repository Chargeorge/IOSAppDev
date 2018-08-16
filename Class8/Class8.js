
//document.getElementById AND MORE

//Hash means the ID
//document.getSelection() is the vanilla JS equivilant
//var myDiv = $("#playground");
//
////Use a seperate object for different fuctions.
//var myDivElem = document.getElementById("playground");
//
//
//myDiv.text("JQUERY  TEXT");
//
////set style
//myDiv.css("background-color", "red");
//
////Add on on click handler in jquery, equivalant to .onclick=
//$("#fader").click(
//    function(e){
//        myDiv.fadeOut(400, function(){
//            //Change text to "Different";
//          myDiv.fadeIn();
//        })
//    }
//
//);

var cowpie;
var loadAnimal = function(){
    cowpie = getRandom3();
    
    if(cowpie ==0){
        var ajax = $.ajax( "https://random.dog/woof.json");
        ajax.done(
            function(msg){
                var extractedMsg = "";
                for( var val : msg){
                    msg[val];
                    break;
                }
                var x = new [0,1];
                x.
                alert("Success!" + msg.url);
                $("#doggo").attr("src", msg.url);
            }
        ); 
    }
   
    else if(cowpie == 1 ){
          var ajax = $.ajax( getCORSCompliantURL("http://randomfox.ca/floof/"));
        ajax.done(
        function(msg){
            alert("Success!" + msg.image);
            $("#doggo").attr("src", msg.image);
        }); 
    }
    
    else{
        //https://aws.random.cat/meow
         var ajax = $.ajax( getCORSCompliantURL("http://randomfox.ca/floof/"));
        ajax.done(
        function(msg){
            alert("Success!" + msg.image);
            $("#doggo").attr("src", msg.image);
        }); 
    }
}


$("#load_animal").click(loadAnimal);

$("#dog_guess").click(function(){
    if(cowpie == 0){
        var count = $("#correctCount").text();
        count++;
        $("#correctCount").text(count);
    }
    else{
        var count = $("#inscorrectCount").text();
        count++;
        $("#inscorrectCount").text(count);
    }
    loadAnimal();
});


$("#fox_guess").click(function(){
    if(cowpie == 1 || cowpie ==2){
        var count = $("#correctCount").text();
        count++;
        $("#correctCount").text(count);
    }
    else{
        var count = $("#inscorrectCount").text();
        count++;
        $("#inscorrectCount").text(count);
    }
    loadAnimal();
});


function getCORSCompliantURL(URL){
    return "https://cors-anywhere.herokuapp.com/" + URL;
}


function getRandom3(){
    return Math.round(Math.random() * 2);
}

//$("#cat_guess").click(function(){alert(getRandom3())});

//https://ghibliapi.herokuapp.com/films


//https://aws.random.cat/meow

