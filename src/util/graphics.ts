import Image, {ALL_IMAGE_LOADED} from "./image";

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

    public getContext():CanvasRenderingContext2D {
        return this.graphics;
    }

    public drawImage(imageData:Image, ...args:number[]) {
        if (imageData.getImage() === undefined) return;
        if (args.length == 2)
            this.graphics.drawImage(imageData.getImage(), args[0], args[1]);
        else if (args.length == 4) 
            this.graphics.drawImage(imageData.getImage(), args[0], args[1], args[2], args[3]);
    }
}

class Text {
    constructor(text:string, fontSize:number, ) {

    }
}