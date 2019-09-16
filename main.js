const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
// кнопки
const buttonSave = document.getElementById('save');
const buttonClear = document.getElementById('clear');
// кисти
const brushSmall = document.getElementById('b_s');
const brushMedium = document.getElementById('b_m');
const brushBig = document.getElementById('b_b');
// цвета
const colors = document.querySelectorAll('.color__collection *')
// текуший цвет кисточки
let brushColor = 'black';
// текущий радиус сечения поверхности кисточки
let brushRadius = 10;
const maxRadius = 30;
const minRadius = 2;
// флаг переключатель состояния "рисую"
let isDrawing = false;
let drawStart = (e) => {
    isDrawing = true;
    draw(e);
}
let drawStop = () => {
    isDrawing = false;
    context.beginPath();
}

// получить цвета из палитры
colors.forEach(node => {
    node.onmousedown = (event) => {
        brushColor = event.target.style.backgroundColor;        
    }    
});

// логика рисовалки
context.lineWidth = brushRadius*2;

let draw = function (event) {
    if (isDrawing) {
        // при изменении позиции мыши создаем переход от предыдущей позиции
        context.lineTo(event.offsetX, event.offsetY);
        // соединяем линией точки
        context.stroke();
        // создаем новую точку
        context.beginPath();
        context.arc(event.offsetX, event.offsetY, brushRadius, 0, Math.PI*2)
        // красим точку
        context.fillStyle = brushColor;
        context.fill();
        // после установки точки перемещаем текущую позицию в новую точку
        context.beginPath();
        context.fillStyle = brushColor;
        context.fill();
        context.moveTo(event.offsetX, event.offsetY);
    }        
};

canvas.addEventListener('mousedown', drawStart)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', drawStop)    

// очистить канву
let clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// переключалка радиуса кисточки
let setRadius = (newRadius) => {
    if (newRadius < minRadius) {
        newRadius = minRadius;
    } else if (newRadius > maxRadius) {
        brushRadius = maxRadius;
    }
    brushRadius = newRadius;
    context.lineWidth = brushRadius*2;
}
brushSmall.addEventListener('click', () => {
    setRadius(2)
});
brushMedium.addEventListener('click', () => {
    setRadius(8)
});
brushBig.addEventListener('click', () => {
    setRadius(16)
});

// кнопки
buttonClear.addEventListener('click', clearCanvas, false)













