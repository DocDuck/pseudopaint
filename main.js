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
// флаг переключатель состояния "рисую"
let isDrawing = false;

// получить цвета из палитры
colors.forEach(node => {
    node.onmousedown = (event) => {
        brushColor = event.target.style.backgroundColor;        
    }    
});

// логика рисовалки
let draw = function (event) {
    if (isDrawing) {
        context.beginPath();
        context.arc(event.offsetX, event.offsetY, brushRadius, 0, Math.PI*2)
        context.fillStyle = brushColor;
        context.fill();
        context.closePath();
    }
        
};
let drawStart = () => isDrawing = true;
let drawStop = () => isDrawing = false; 

canvas.addEventListener('mousedown', drawStart)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', drawStop)    

// очистить канву
let clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// кнопки
buttonClear.addEventListener('click', clearCanvas, false)













