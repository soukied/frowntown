import Image from "./image"

export default class Graphics {
    private graphics:CanvasRenderingContext2D;
    constructor(graphicsContext:CanvasRenderingContext2D) {
        this.graphics = graphicsContext;
    }

    public drawLine(color:string, width:number, x1:number, y1:number,x2:number, y2:number) {
        this.graphics.strokeStyle = color;
        this.graphics.lineWidth = width;
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1)
        this.graphics.lineTo(x2,y2);
        this.graphics.stroke();
    }

    public fillRect(color:string, x:number, y:number, width:number, height:number) {
        this.graphics.fillStyle = color;
        this.graphics.fillRect(x, y, width, height);
    }

    public getGraphics():CanvasRenderingContext2D {
        return this.graphics;
    }
}