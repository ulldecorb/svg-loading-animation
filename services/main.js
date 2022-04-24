
const svg = document.getElementById('svg');
const fadeOutDelay = [0, 250, 500, 750, 1000, 1250, 1500, 1750];

document.body.addEventListener("click", fadeOutSnakes);

function fadeOutSnakes () {
    const snakes = document.getElementsByClassName('snake');
    for (let i = snakes.length -1; i >= 0; i-- ) {
        const snake = snakes[i];
        const timeout = fadeOutDelay[i];
        
        setTimeout(() => {
            snake.setAttribute( 'd', 'M 100 500 l 400 -400 l -400 -400 l -400 400 l 400 400 z');
        }, timeout);
    }
}





// const fadeInDelay = [ 700, 1400, 2100, 2800, 3500, 4200, 4900, 5600 ];
// const pathsize = (x) => `M 100 1${x} l ${x} -${x} l -${x} -${x} l -${x} ${x} l ${x} ${x} z`;
// createSnakes();

// function createSnakes () {
//     for ( let i = 9; i > 1; i --) {
//         const path = document.createElement("path");
//         path.setAttribute("d", pathsize(i*10));
//         path.setAttribute("stroke", "#6e5c0c");
//         path.setAttribute("stroke-width", 1);
//         path.setAttribute("fill", "transparent");
//         path.classList.add('snake');
//         svg.appendChild(path);
//     }
// }
