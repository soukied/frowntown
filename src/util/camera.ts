import { allTypeOf } from "./paramchecker";

export default class Camera {
    private x:number = 0;
    private y:number = 0;
    private width:number;
    private height:number;

    constructor(width:number, height:number) {
        this.setPos(0,0);
        this.setSize(width, height);
    }

    public reset() {
        this.setPos(0,0);
    }

    public setX(x:number) {
        this.x = x;
    }

    public setY(y:number) {
        this.y = y;
    }

    public setPos(x:number, y:number) {
        this.setX(x);
        this.setY(y);
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

    public getFixedX(x?:number):number {
        if (typeof x == "number")
        return -this.x + x;
        else return -this.x;
    }

    public getFixedY(y?:number):number {
        if (typeof y == "number")
        return -this.y + y;
        else return -this.y;
    }

    public getFixedPos(...pos:number[]):number[] {
        if (allTypeOf("number", pos[0], pos[1])) {
            return [-this.x + pos[0], -this.y + pos[1]];
        } else return [-this.x, -this.y];
    }

    public moveX(velX:number) {
        this.x -= velX;
    }

    public moveY(velY:number) {
        this.y -= velY;
    }

    public move(velX:number, velY:number) {
        this.moveX(velX);
        this.moveY(velY);
    }

    public setWidth(width:number) {
        this.width = width;
    }

    public setHeight(height:number) {
        this.height = height;
    }

    public setSize(width:number, height:number) {
        this.setWidth(width);
        this.setHeight(height);
    }

    public getWidth():number {
        return this.width;
    }

    public getHeight():number {
        return this.height;
    }

    public getSize():number[] {
        return [this.width, this.height];
    }
}