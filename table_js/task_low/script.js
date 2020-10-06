"use strict"; 

function printTable() {
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
                row.insertCell();
            }
        }
    }
}