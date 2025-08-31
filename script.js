const bodyContainer = document.querySelector(".body-container");
const gridContainer = document.querySelector(".grid-container");
const button = document.createElement("button");
button.classList.add("btn");
button.textContent = "set a new grid";
bodyContainer.insertBefore(button, gridContainer);

// Initially creating the divs in the grid;
for(let i = 0; i < 16; i++) {
  let div = document.createElement("div");
  div.classList.add("div-in-grid");
  gridContainer.appendChild(div);
}

toBeSketch();

function toBeSketch() {
  const divs = document.querySelectorAll(".div-in-grid");

  // Add the effect of hover over the divs.
  divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.style.transition = "0.3s";
      div.style.backgroundColor = `rgb(${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())})`;
    });
  });
}

button.addEventListener("click", () => {
  const sqPerSide= prompt("Enter the number of squares per side you want(Max is 100, and Min is 4):");

  if(sqPerSide < 4) {
    alert("The number you enter is too small.");
    return;
  } else if(sqPerSide > 100) {
    alert("The number you enter is too big.");
    return;
  }

  const divNumber = Math.pow(sqPerSide, 2);
  let divs = document.querySelectorAll(".div-in-grid");
  divs.forEach((div) => div.remove());

  let divSize = 800 / sqPerSide;
  for(let i = 0; i < divNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("div-in-grid");
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    gridContainer.appendChild(div);
  }
  toBeSketch();
});
