
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
    reset()
    var input1 = callGrid[0].value;
    var input2 = callGrid[1].value;
    // document.getElementById("submit").value = inputGrid;
    
    
    createGrid(input1, input2);
})




//fonction multiplication nombre de case
function multiply(inputGrid) {
    return calcul = inputGrid * inputGrid;
}


// Fonction calcul taille de la grille
//  function gridSize(input1, input2) {
    

//      return input1 * input2 ;
//  }


//boucle création grille
function createGrid (input1, input2) {
    // reset (); plutôt au moment du submit c.f l40

    var invader = document.getElementById("invader");
    console.log(invader)
    invader.style.width = `${input1 * input2}px` ;
    
    for (var i = 0 ; i < (input1*input1) ; i++) {
         
        //creation pixel
        
        pixel = document.createElement("div");        
        pixel.classList.add ("pixel");
        // invader.style.maxWidth = gridSize + "px"; ne fonctionne pas donc on dimentionne le pixel au lieu du parent.
        pixel.style.width = `${input2}px`;
        pixel.style.height = `${input2}px`;
        invader.appendChild(pixel);
        


        //Changement de la couleur

        pixel.addEventListener ('click', handleChangeColor)

    }

    //taille de la grille c.f-> l80 
    // invader.style.maxWidth = gridSize + "px";
    // invader.style.maxHeight = gridSize + "px";
    
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
    document.getElementById("invader").innerHTML = '';
    // on doit supprimer le text content du container #invader et pas celui des cellule .pixel 
}

//on a constaté que c'est la taille du container #invader qui est modifié au lieu de la taille des célules.

