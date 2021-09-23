class BFS extends Pathfinding
{   
    queue = new Queue();
    exploreNeighbours(node,e) 
    {
        for(var i = 0; i < node.neighbours.length; i++)
        {
            var neighbour = node.neighbours[i];
            if(!neighbour.visited)
            {   
                neighbour.setVisited(true);
                neighbour.setParent(node);
                if(!this.foundtarget(neighbour,e))
                {
                    this.queue.Enqueue(neighbour);
                }
                else
                {
                    return true;
                }
                //maze.show();
            }
        }
        return false;
    }
   
    async solve(s, e)
    {
        s.setVisited(true);
        this.queue.Enqueue(s);

        while(!this.queue.IsEmpty())
        {
            var node = this.queue.GetFront();
            this.queue.Dequeue();
            if(this.exploreNeighbours(node,e))
            {
                break;
            }
            //maze.show();

            await new Promise(r => setTimeout(r, 50));
        }
        return false;
    }

   
}