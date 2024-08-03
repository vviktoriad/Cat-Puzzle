const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')
const image = document.getElementById('puzzle-image')
image.onload = cutImage;

function cutImage() {
    let number = 1;
    for (let y = 0; y < 3; ++y) {
        for (let x = 0; x < 3; ++x) {
            if (x != 2 || y != 2) {
                ctx.drawImage(image, x * 100, y * 100, 100, 100, x * 100, y * 100, 100, 100)
                ctx.fillStyle = 'white';
                ctx.fillText(number, x * 100 + 10, y * 100 + 10)
                number++;
            }
        }
    }
}



