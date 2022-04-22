
const svg = document.getElementById('svg');
const fadeInDelay = [ 700, 1400, 2100, 2800, 3500, 4200, 4900, 5600 ];
const pathsize = 'M 100 190 l 90 -90 l -90 -90 l -90 90 l 90 90 z';
const fadeOutSnakes = () => console.log(svg.outerHTML);


(function createSnakes () {
    for ( i = 0; i < 2; i ++) {
        // const spanSize = snakeSize[i]
        const delay = fadeInDelay[i];
        const path = document.createElement("path");
        path.setAttribute("d", pathsize);
        path.setAttribute("stroke", "#6e5c0c");
        path.setAttribute("stroke-width", 3);
        path["stroke-width"] = 3;
        path.setAttribute("fill", "transparent");
        path.classList.add('snake');

        setTimeout(() => {
            svg.appendChild(path);
        }, delay);
    }
})()

document.body.addEventListener("click", fadeOutSnakes);