
var container= document.querySelector("#container");
var root = document.createElement("table");
container.appendChild(root);

//1st challenge

var row = document.createElement("tr");
root.appendChild(row);
row.appendChild(cell);

var cell = document.createElement("td");






document.getElementById("MakeObject").onclick = function(e){
   
    //alert(JSON.stringify(obj));
}


//MDN look up on click event properties.  

document.getElementById("clickZone").onclick = function(e){
    //var percentage  =255 * Position in the window / width of th ewindow
    getRGBString(percentage, percentage, percentage);

}

function getRGBString(r, g, b){
    return "#"+(r).toString(16)+(g).toString(16)+(b).toString(16);
}
