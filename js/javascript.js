
function createDivs(gridSize){
    const divAmount = gridSize;
    const totalHeight = 960;

    const totalDivs = divAmount * divAmount;
    const singleDivSize = totalHeight/divAmount;

    let containerDiv = document.querySelector(".container");
    containerDiv.innerHTML = "";

    for (i = 0; i < totalDivs; i++){
        const div = document.createElement("div");

        div.style.height = singleDivSize+"px";
        div.style.width = singleDivSize+"px";
        div.style.border = "1px solid black";
        containerDiv.appendChild(div);
    } 


    containerDiv.addEventListener("mouseover", (event) =>{
        let target = event.target;
        const colorOne = getRandomNumber();
        const colorTwo = getRandomNumber();
        const colorThree = getRandomNumber();
        target.style.backgroundColor = 'rgb(' + colorOne + ',' + colorTwo + ',' + colorThree + ')';
    });
} 

const btnStartSketch = document.querySelector(".btnStartSketch");
btnStartSketch.addEventListener("click", () =>{
    let gridSize = prompt("Please enter the prefered grid size!");
    if (gridSize > 100) gridSize = 100;
    createDivs(gridSize);
} );

function getRandomNumber(){
    return Math.floor(Math.random() * 256);
} 
