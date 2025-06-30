const setSideButton = document.createElement("button");
setSideButton.textContent = "Set side length";


const containerDiv = document.createElement("div");
containerDiv.classList.add("outer-container");

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}

function makeGrid(sideLength) {
  containerDiv.replaceChildren();
  for (let i = 0; i < sideLength; i++) {
  const columnDiv = document.createElement("div");
  columnDiv.classList.add("column-container")
  for (let j = 0; j < sideLength; j++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.addEventListener("mouseenter", e => {
      if (!e.target.classList.contains("touched")) {
        e.target.classList.add("touched");
        e.target.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
        e.target.style.opacity = 0.1;
      } else {
        e.target.style.opacity = Math.min(Number(e.target.style.opacity) + 0.1, 1)
      }
      
      
    })
    columnDiv.appendChild(cellDiv);
  }
  containerDiv.appendChild(columnDiv);
}
}


setSideButton.addEventListener("click", () => {
  let length;
  do {
    length = prompt("Set side length, max 100");
  } while (length < 1 || length > 100);
  

  makeGrid(length);
})

makeGrid(4);


const main = document.querySelector("main");
main.appendChild(setSideButton);
main.appendChild(containerDiv)