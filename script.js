containerDiv = document.querySelector(".container");
let grid = 16
createGrid(grid)

function changeGrid() {
    let gridwidth = prompt("How wide should the Grid be?");
    let grid = parseInt(gridwidth);

    if (grid > 100) {
        grid = parseInt(prompt("Error! Number must be below 100. Enter a new one:"))
    } else {
        containerDiv.textContent="";
        createGrid(grid);
    }
}

function createGrid(grid) {
    for (let rindex = 0; rindex < grid; rindex++) {
        let rows = document.createElement("div");
    
        for (let cindex = 0; cindex < grid; cindex++) {
            let columns = document.createElement("div");
            columns.textContent = "Test";
            columns.addEventListener("mouseover", hovering, true)
            rows.append(columns);
    
            function hovering() {
                columns.setAttribute("style", "color: blue")
            }
        }
    
        containerDiv.append(rows);
    }
}



