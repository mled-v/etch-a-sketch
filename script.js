color = 'black'

function createGrid(size) {
    const gridBox = document.querySelector('.gridBox');
    let squares = gridBox.querySelectorAll('div')
    squares.forEach((div) => div.remove())
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size

    for (let i = 0; i < amount; i++) {
            let square = document.createElement('div')  
            square.addEventListener('mouseover', colorSelector)
            square.style.backgroundColor = 'white'
            gridBox.insertAdjacentElement('beforeend',square)

        }  
}
createGrid(16)

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createGrid(input)

    }else {
        console.log('error')
    }
}

function colorSelector () {
    this.style.backgroundColor = color;

}

function changeColor (choice) {
    color = choice 

}

function resetBoard () {
    const gridBox = document.querySelector('.gridBox');
    let squares = gridBox.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white')
}