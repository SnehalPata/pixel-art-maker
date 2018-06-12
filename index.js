let selectedColor = 'white';
let cursorType = "default";

for (var y = 0; y < 20; y++) {
    var row = document.createElement('div');
    row.className = 'row';
    for (var x = 0; x < 20; x++) {
        const col = document.createElement('div');
        col.className = 'column';
        col.addEventListener('click', () => {
            col.style.backgroundColor = selectedColor;
        });
        row.appendChild(col);
    }
    document.body.appendChild(row);
}

var parentDiv;
var currentColorDiv = document.createElement('div');
currentColorDiv.className = 'currentColorDiv';
for (var y = 0; y < 2; y++) {
    parentDiv = document.createElement('div');
    parentDiv.className = 'parentDiv';
    var length = 20;
    if (y === 1) {
        length = 7;
    }
    for (var x = 0; x < length; x++) {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'colorDiv';
        const hue = 'rgb(' + (Math.floor(Math.random() * 256))+ ',' + (Math.floor(Math.random() * 256)) + ',' +(Math.floor(Math.random() * 256)) + ')';
        colorDiv.style.backgroundColor = hue;
        colorDiv.addEventListener('click', () => {
            selectedColor = hue;
            const ele = document.getElementsByTagName('div');
            for (let i = 0; i < ele.length; i++) {
                ele[i].style.cursor = "hand";
            }
            currentColorDiv.style.backgroundColor = selectedColor;
        });
        parentDiv.appendChild(colorDiv);
    }
    document.body.appendChild(parentDiv);

}
var currentColorDivText = document.createElement('div');
currentColorDivText.innerHTML = 'CURRENT COLOR > ';

parentDiv.appendChild(currentColorDivText);
parentDiv.appendChild(currentColorDiv);



