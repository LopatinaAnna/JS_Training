"use strict"; 

run.onclick = function() {
    var rows = document.getElementById("row").value;
    var columns = document.getElementById("column").value;

    if (rows < 1 || rows > 100 || columns < 1 || columns > 100) {
        alert("Range of numbers from 1 to 100.");
    } else {
        var table = document.getElementById("table");
        table.innerHTML = "";

        for (let i = 1; i <= rows; i++) {
            var row = table.insertRow();
            for (let j = 1; j <= columns; j++) {
                var cell = row.insertCell();
                cell.innerHTML = i + '' + j;
                cell.onclick = function() { changeColor(this); };
            }
        }
    }
}

let selected;

function changeColor(obj) {
    let target = obj;

    if (selected) {
        selected.classList.remove("highlight");
    }

    if (target != selected) {
        selected = target;
        selected.classList.add("highlight");
    } else {
        selected = null;
    }
}