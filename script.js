const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')
const image = document.getElementById('puzzle-image')
image.onload = cutImage;

let puzzles = []

function cutImage() {
    let number = 1;
    for (let y = 0; y < 3; ++y) {
        for (let x = 0; x < 3; ++x) {
            if (x !=2 || y != 2) {
                puzzles.push({
                    x: x * 100,
                    y: y * 100,
                    width: 100,
                    height: 100,
                    number: number
                });
                number++;
            }
        }
    }
    drawPuzzles();
}


function drawPuzzles() {
    puzzles.forEach(puzzle => {
        
        ctx.drawImage(image, puzzle.x, puzzle.y, puzzle.width, puzzle.height, puzzle.x, puzzle.y, puzzle.width, puzzle.height)

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.strokeRect(puzzle.x, puzzle.y, puzzle.width, puzzle.height);

        ctx.fillStyle = 'white';
        ctx.fillText(puzzle.number, puzzle.x + 10, puzzle.y + 10)
            
        });
    }






