class Cell
{
    wall = false;
    visited = false;
    target = false;
    parent = null;
    start = false;
    neighbours = [];
    static w;
    static h;

    constructor(i, j, n ,m)
    {
        this.col = color(255);
        this.i = i;
        this.j = j;
        
        this.w = width / m;
        this.h = height / n;
    }
    show()
    {
        fill(this.col);
        stroke(0);
        rect(this.j * this.h, this.i * this.w, this.h - 1, this.w - 1); 
    }
    addNeighbour(neighbour)
    {
        this.neighbours.push(neighbour);
    }
    setWall(wall)
    {
        this.wall = wall;
        // if the cell is a wall, change it's color to black
        if(this.wall)
            this.col = color(0);
    }
    setVisited(visited)
    {
        this.visited = visited;
        // yellow for visited
        if(visited && !this.start)
            this.col = color(128,128,128);
    }
    setTarget(target)
    {
        this.target = target;
        if(target)
            this.col = color(0, 255, 0);
    }
    setStart(start)
    {
        this.start = start;
        if(start)
            this.col = color(255, 255, 0);
    }
    setParent(parent)
    {
        this.parent = parent;
    }
    
}