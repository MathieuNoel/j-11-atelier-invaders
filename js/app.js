
//Creation du formulaire

var input1 = document.createElement("input");
var elemConfiguration = document.getElementsByClassName("configuration")

input1.setAttribute('type', "number");
input1.setAttribute("name", "gridsize");
input1.setAttribute("id", "gridsize");
input1.setAttribute("placeholder", "Taille de la grille");
elemConfiguration[0].appendChild(input1);

var input2 = document.createElement("input");
input2.setAttribute('type', "number");
input2.setAttribute("name", "pixelsize");
input2.setAttribute("id", "pixelsize");
input2.setAttribute("placeholder", "Taille des pixels");
elemConfiguration[0].appendChild(input2);

var validateButton = document.createElement("button");
validateButton.setAttribute("type", "submit");
validateButton.setAttribute("id", "submit");
validateButton.textContent = "Valider";
// validateButton.setAttribute("onclick", "getValue")
elemConfiguration[0].appendChild(validateButton);


// var inputGrid = 10;

// recupération du formulaire

// function getValue() {
    //  inputGrid = document.getElementById("gridsize").value;
// }

var callGrid = document.querySelector(".configuration");
    
callGrid.addEventListener('submit', function(event){
    event.preventDefault();
    var inputGrid = callGrid[0].value;
    var inputPixel = callGrid[1].value;
    // document.getElementById("submit").value = inputGrid;
    
    
    createGrid(gridSize(inputPixel, inputGrid), multiply(inputGrid));
})




//fonction multiplication nombre de case
function multiply(inputGrid) {
    return calcul = inputGrid * inputGrid;
}


// Fonction calcul taille de la grille
function gridSize(inputPixel, inputGrid) {
    

    return userInput = inputPixel * inputGrid ;
}


//boucle création grille
function createGrid (gridSize, toto) {
    reset ();
    var invader = document.getElementById("invader");

    for (var i = 0 ; i < toto ; i++) {

        //creation pixel
        pixel = document.createElement("div");
        pixel.classList.add ("pixel");
        invader.appendChild(pixel);


        //Changement de la couleur

        pixel.addEventListener ('click', handleChangeColor)

    }

    //taille de la grille  
    invader.style.maxWidth = gridSize + "px";
    invader.style.maxHeight = gridSize + "px";
    
}


// fonction changement couleur
function handleChangeColor(event) {
    if (event.target.style.backgroundColor == "white") {
        event.target.style.backgroundColor = "black"
    } else {
        event.target.style.backgroundColor = "white"
    }
}






// function handleChangeColor() {

function changeColor (color) {
        pixel.addEventListener ('click', function handleChangeColor() {
        pixel.style.backgroundColor = color;
        }
        ) 
}


function reset() {
    document.getElementsByClassName("pixel").innerHTML = '';
}

//on a constaté que c'est la taille du container .invader qui est modifié au lieu de la taille des célules.