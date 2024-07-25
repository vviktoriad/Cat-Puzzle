const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')
const image = document.getElementById('puzzle-image')
image.onload = cutImage;

function cutImage() {
    let imagePieces = [];
    for (let x = 0; x < 3; ++x) {
        for (let y = 0; y < 3; ++y) {
            if (x != 2 || y != 2) {
                ctx.drawImage(image, x * 100, y * 100, 100, 100, x * 100, y * 100, 100, 100)
            }

        }
    }
    let imageElement = document.getElementById('image-element')
    imageElement.src = imagePieces[0]
}


