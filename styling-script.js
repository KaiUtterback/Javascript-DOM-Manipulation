function changeColor() {
    document.getElementById('box').style.backgroundColor = 'blue';
}

function hoverEffect() {
    document.getElementById('hoverBox').style.backgroundColor = 'yellow';
}

function removeHoverEffect() {
    document.getElementById('hoverBox').style.backgroundColor = '';
}

function changeButtonStyle() {
    const button = document.querySelector('button');
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.style.fontSize = '20px';
}
