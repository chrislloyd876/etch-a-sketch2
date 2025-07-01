const container = document.querySelector("#container");

for(let square_row = 0;square_row < 16; square_row++){
    const rowBox = document.createElement("div");
    rowBox.classList.add('rowBox');
    container.appendChild(rowBox);
    for(let col_row = 0; col_row < 16; col_row++){
        const colBox = document.createElement("div");
        colBox.classList.add('colBox');
        colBox.textContent = `${col_row + 1}`;
        rowBox.appendChild(colBox);
    }
}