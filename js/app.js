
//Creation du formulaire
var app = {
    configuration : function() {
    elemConfiguration = document.getElementsByClassName("configuration");
    
    var input1 = document.createElement("input");    
    input1.setAttribute ('type', "number");
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
    validateButton.setAttribute ("type", "submit");
    validateButton.setAttribute ("id", "submit");
    validateButton.textContent = "Valider";
    elemConfiguration[0].appendChild(validateButton)
    },

    callGrid: function() {
        callGrid = document.querySelector(".configuration");
        callGrid.addEventListener('submit', function(event){
        event.preventDefault();
        app.reset();
        input1 = callGrid[0].value;
        input2 = callGrid[1].value;
        app.createGrid(input1, input2);
        })
    },
    
    multiply : function(inputGrid) {
        return calcul = app.inputGrid * app.inputGrid
    },
    
    createGrid : function(input1, input2) {
        invader = document.getElementById("invader");
        invader.style.width = `${input1 * input2}px`;
        for ( i = 0 ; i < (input1*input1) ; i++) {
            pixel = document.createElement("div");        
            pixel.classList.add ("pixel");
            pixel.style.width = `${input2}px`;
            pixel.style.height = `${input2}px`;
            invader.appendChild(pixel);
            pixel.addEventListener ('click', app.handleChangeColor);
        }
    },
    
    handleChangeColor : function(event) {
        if (event.target.style.backgroundColor == "white") {
            event.target.style.backgroundColor = "black"
        } else {
            event.target.style.backgroundColor = "white"
        }
    },    

    changeColor : function(color) {
            pixel.addEventListener ('click', function handleChangeColor() {
            pixel.style.backgroundColor = color
            }
            ) 
    },

    reset : function() {
        document.getElementById("invader").innerHTML = '';
        
    }
}
app.configuration()
app.callGrid()

