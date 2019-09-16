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

canvas.onmousedown = (event) => {
    canvas.onmousemove = (event) => { 
        let x = event.offsetX;
        let y = event.offsetY;
        context.fillRect(x-3, y-3, 5, 5)
    };
    canvas.onmouseup = () => canvas.onmousemove = null;
}