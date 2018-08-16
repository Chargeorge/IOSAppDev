
var container= document.querySelector("#container");
var root = document.createElement("table");
container.appendChild(root);


for (var y = 0; y <= 12; y++){
    var row = document.createElement("tr");
    root.appendChild(row);
    for(var x = 0; x <= 12; x++){
        var cell = document.createElement("td");
        row.appendChild(cell);
        cell.textContent = x*y;
    }
}


document.getElementById("MakeObject").onclick = function(e){
    var obj = {
        "name" : document.getElementById("name").value,
        "location" : document.getElementById("location").value,
        "breed" : document.getElementById("breed").value
        
    }
    alert(JSON.stringify(obj));
}



document.getElementById("clickZone").onclick = function(e){
    var percentage  =255 *  e.pageX/ window.innerWidth;
    percentage = Math.round(percentage);
    var color8Bit = getRGBString(percentage, percentage, percentage);
    document.getElementById("clickZone").style.backgroundColor = color8Bit;
}

function getRGBString(r, g, b){
    return "#"+(r).toString(16)+(g).toString(16)+(b).toString(16);
}
