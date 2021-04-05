export default class Node {
    private x:number;
    private y:number;
    private width:number;
    private height:number;

    constructor(posX, posY, width, height) {
        this.x = posX;
        this.y = posY;
        this.width = width;
        this.height = height;
    }

    public getX():number {
        return this.x;
    }

    public getY():number {
        return this.y;
    }

    public getPos():number[] {
        return [this.x, this.y];
    }

    public getWidth():number {
        return this.width;
    }

    public getHeight():number {
        return this.height;
    }

    public getDimension():number[] {
        return [this.width, this.height]
    }
}