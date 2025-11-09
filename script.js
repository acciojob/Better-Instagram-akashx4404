
const boxes = document.querySelectorAll('.image');
let dragged = null;

boxes.forEach(box => {
  box.addEventListener('dragstart', (e) => {
    dragged = box;
    box.classList.add('selected');
  });

  box.addEventListener('dragend', () => {
    box.classList.remove('selected');
    dragged = null;
    boxes.forEach(b => b.classList.remove('over'));
  });

  box.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  box.addEventListener('dragenter', (e) => {
    e.preventDefault();
    if (box !== dragged) box.classList.add('over');
  });

  box.addEventListener('dragleave', () => {
    box.classList.remove('over');
  });

  box.addEventListener('drop', (e) => {
    e.preventDefault();
    box.classList.remove('over');
    if (!dragged || dragged === box) return;

    const bg1 = window.getComputedStyle(box).backgroundImage;
    const bg2 = window.getComputedStyle(dragged).backgroundImage;

    box.style.backgroundImage = bg2;
    dragged.style.backgroundImage = bg1;

    const tmpText = box.innerHTML;
    box.innerHTML = dragged.innerHTML;
    dragged.innerHTML = tmpText;
  });
});
