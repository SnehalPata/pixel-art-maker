// var parentDiv = document.createElement('div');
//
// parentDiv.className = "parentDiv";
// document.body.appendChild(parentDiv);
//
// var size = "5px"
//
// for(let i = 0; i<2025 ; i++) {
//     const div = document.createElement('div');
//     div.id = "div" + i;
//     div.innerHTML = "";
//     div.style.width = size;
//     div.style.height = size;
//     div.style.border = "groove";
//     div.style.background = "white";
//     div.addEventListener('click', () => {
//         div.style.backgroundColor = "red";
//     })
//     parentDiv.appendChild(div)
// }


for(var y = 0; y<20;y++)
{
    var row = document.createElement('div');
    row.className = 'row';
    for(var x= 0;x<20; x++){
        const col = document.createElement('div');
        col.className = 'column';
        col.addEventListener('click', () =>{
           col.style.backgroundColor = 'red';
        });
        row.appendChild(col);
    }
    document.body.appendChild(row);
}



