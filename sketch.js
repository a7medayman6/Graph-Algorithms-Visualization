var cnv;
var x, y;
function centerCanvas() 
{
    x = (windowWidth - width) / 2;
    y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() 
{
    centerCanvas();
}

var maze;
var bfs;
var start;
var target;

function setup() 
{
    cnv = createCanvas(1000, 1000);
    centerCanvas();
    background(0);

    
    var n = 50, m = 50;
    maze = new Maze(n, m, 4, 4);
    
    start = maze.getRandomCell();
    target = maze.getRandomCell();
    
    bfs = new BFS()
    maze.markStartandEnd(start, target);
    var solved = bfs.solve(start, target);

    
}

function draw()
{
    maze.show();

}