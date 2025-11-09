//your code here
const boxes = document.querySelectorAll(".img-box");
let draggedBox = null;

boxes.forEach((box) => {
  box.addEventListener("dragstart", () => {
    draggedBox = box;
  });

  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("drop", () => {
    if (draggedBox !== box) {
    
      let temp = box.style.backgroundImage;
      box.style.backgroundImage = draggedBox.style.backgroundImage;
      draggedBox.style.backgroundImage = temp;
    }
  });
});
