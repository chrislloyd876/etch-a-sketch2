const container = document.querySelector("#container");

const resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent = "RESET";
container.appendChild(resetButton);

for(let square_row = 0;square_row < 16; square_row++){
    const rowBox = document.createElement("div");
    rowBox.classList.add('rowBox');
    container.appendChild(rowBox);
    for(let col_row = 0; col_row < 16; col_row++){
        const colBox = document.createElement("div");
        colBox.classList.add('colBox');
        colBox.textContent = `${col_row + 1}`;
        rowBox.appendChild(colBox);
        colBox.onmouseover = function(){
            let rCol = randomColor();
            colBox.style.backgroundColor = rCol;
        }
    }
}

function getSquares(){
    let square_num = Number(prompt("How many squares do you want on the sides? Max. 100"));
    if(square_num > 100){
        alert("OOPS! That's too many.Try again");
    }
    const rows = document.querySelectorAll(".rowBox");

    rows.forEach(row => {
        row.remove();
    });

    for(let square_row = 0;square_row < square_num; square_row++){
        const rowBox = document.createElement("div");
        rowBox.classList.add('rowBox');
        container.appendChild(rowBox);
        for(let col_row = 0; col_row < square_num; col_row++){
            const colBox = document.createElement("div");
            colBox.classList.add('colBox');
            colBox.textContent = `${col_row + 1}`;
            rowBox.appendChild(colBox);
            colBox.onmouseover = function(){
                let rCol = randomColor();
                colBox.style.backgroundColor = rCol;
            }
        }
    }
}

function randomColor(){
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);

    let rColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
    return rColor;
}

resetButton.addEventListener("click", getSquares);