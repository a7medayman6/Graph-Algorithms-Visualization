class DFS extends Pathfinding
{   
    stack = []
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
                    this.stack.push(neighbour);
                else
                    return true;
            }
        }
        return false;
    }
   
    async solve(s, e)
    {
        s.setVisited(true);
        this.stack.push(s);

        while(this.stack.length > 0)
        {
            var node = this.stack.pop();
            
            if(this.exploreNeighbours(node,e))
                break;
        
            await new Promise(r => setTimeout(r, 50));
        }
        return false;
    }

   
}