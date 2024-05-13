containerDiv = document.querySelector(".container");

for (let rindex = 0; rindex < 16; rindex++) {
    let rows = document.createElement("div");

    for (let cindex = 0; cindex < 16; cindex++) {
        let columns = document.createElement("div");
        rows.append(columns);
    }

    containerDiv.append(rows);
}


