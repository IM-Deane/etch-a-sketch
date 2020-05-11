const contentBox = document.querySelector("body");
const mainContent = document.createElement("div");
mainContent.id = "squares-box";
mainContent.classList.add("squares-box")
contentBox.appendChild(mainContent);

// Function will create a grid template using its parameters as row/col values.
function createGrid(rows = 16, cols = 16) {
    
    let gridSize = rows * cols;
    for (let i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        square.id = "square-" + i;
        square.classList.add("squares");
        // Add hover effect to square
        square.addEventListener("mouseover", function (e) {
            square.classList.add("activated");
        })
        mainContent.style.gridTemplate = `repeat(${rows}, 1fr) / repeat(${cols}, 1fr)`;
        mainContent.appendChild(square);
    }
}

// Adds title text to the top portion of the frame
function sketchTitle() {
    // Add title to squares container
    const title = document.createElement("h1");
    title.id="title-text";
    title.innerText = "A FANTASTIC ETCH-A-SKETCH";
    contentBox.prepend(title);
}


const gridBtn = document.querySelector("button");
gridBtn.addEventListener('click', function (e) {
    // Reload window to clear box
    let input = prompt("Enter a number to determine grid size." +
        "\nExample: 2 = 2x2 grid; 64 = 64x64 grid");
    mainContent.innerText = "";


    if (input != null) {
        createGrid(input, input);
    }
});

window.onload = createGrid();
