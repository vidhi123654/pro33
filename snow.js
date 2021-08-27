class Snow{
    constructor(x,y){
        this.body=Bodies.circle(x,y,30)
        World.add(world,this.body)
        this.image=("snow5.webp")

    }
    display(){

        image(this.image,this.body.position.x,this.body.position.y,30,30)
    }
}