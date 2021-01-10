// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// const newDiv = document.createElement('div');
const divBoxes = document.querySelector("#boxes");
const butonRender = document.querySelector('button[data-action="render"]');
const butonDestroy = document.querySelector('button[data-action="destroy"]');
const inputNunber = document.querySelector("input");

butonRender.addEventListener("click", (event) =>
  createBoxes(inputNunber.value)
);
butonDestroy.addEventListener("click", destroyBoxes);

function randomCollor () {
    let col,r,g,d;
    col = Math.round(255.0*Math.random());
    r = col.toString(16);
    col = Math.round(255.0*Math.random());
    g=col.toString(16);
    col = Math.round(255.0*Math.random());
    d=col.toString(16);
    col=r+g+d;
    return col;     
}

function createBoxes(amount) {
    destroyBoxesBeforCreate();
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    let width = 30;
    let height = 30;
    newDiv.setAttribute(
      "style",
      `width:${width + i * 10}px; height:${
        height + i * 10
      }px; background-color:#${randomCollor()}; border: 0.1px; border-style: solid; position: absolute;
      top: 182px; left: 8px; z-index: -${i};`
    );
    divBoxes.appendChild(newDiv);
  }
}

function destroyBoxes() {
    inputNunber.value = '';
  const destroyDiv = divBoxes.querySelectorAll("div");
  destroyDiv.forEach((item) => {
    item.remove();
  });
}

function destroyBoxesBeforCreate() {
    const destroyDiv = divBoxes.querySelectorAll("div");
    destroyDiv.forEach((item) => {
      item.remove();
    });
}
