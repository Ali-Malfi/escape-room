let rows = 3;
let columns = 3;

let currTile;
let otherTile; //blank tile

let turns = 0;
let imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

const room3Btn = document.querySelector('#room-3');

function removeChilds(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

let helpBtn = document.querySelector('#help-puzzle');
helpBtn.addEventListener('click', function (e) {

    let board = document.getElementById("board");
    removeChilds(board);

    imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    runPuzzle();

    check();
    // x();
})

function x() {
    console.log('x()');
    let board = document.getElementById("board");
    // board.children.forEach(child => {
    //     console.log(child);
    // });
    let temp = [];
    const regex = /(?<=\\)\d+(?=\.)/;
    for (const child of board.children) {
        console.log(child.src.match(regex));
    }
}
//  let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


function runPuzzle() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();


            tile.src ="SLIDING-PUZZLE/" +imgOrder.shift() + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);
            
        }
    }
}
window.onload = runPuzzle;

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
    
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

function dragEnd() {
    if (!otherTile.src.includes("3.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);
 
    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }

    check()

}
function check(){
    console.log(imgOrder)

    let win = true;
    const success = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    debugger;
    for(let i=0; i<success.length; i++) {
        if(success[i] !== imgOrder[i]) {
            win = false;
            break;
        }
    }

    if(win) {
        console.log('gewonnen');
        // ga naar volgende puzzel
        // maak button visible
        room3Btn.style.visibilty = 'visible'
    } else {
        console.log('verloren');
    }

    // if(["4", "2", "8", "5", "1", "6", "7", "9", "3"]==["4", "2", "8", "5", "1", "6", "7", "9", "3"]){
    //     document.getElementById("room-3").style.visibilty="visible";
    //     console.log("loaded");
    // }
    // else{
    //     console.log("test");
    // }
}
