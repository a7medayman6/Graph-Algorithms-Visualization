class Pathfinding
{

    
    async solve()
    {
        throw new Error("Abstract method!");
    }

    async backtrack(node)
    {
        node.setTarget(true);
        if(node.parent === null)
            return;
        await new Promise(r => setTimeout(r, 100));

        this.backtrack(node.parent);
    }
     
    foundtarget(node,e)
    {
        if(node === e)
        {
            node.setTarget(true);
            //maze.show();
            this.backtrack(node);
            return true;
        }
        return false;
        
    }
}