class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options= {
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.5,
            pointB:{x:this.offsetX,y:this.offsetY}

        }
        this.Rope=Constraint.create (options);
        World.add(world,this.Rope)

    }
    display(){
        var posA=this.Rope.bodyA.position
        var posB= this.Rope.bodyB.position
        strokeWeight(5)
        line(posA.x,posA.y,posB.x,posB.y)
    }
}