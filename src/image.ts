import Graphics from "./graphics";

export default class Image {
    private imagePath: string = null;
    private imageElement: HTMLImageElement|HTMLCanvasElement;
    private width:number;
    private height:number;

    private static IMAGE_COUNT = 0;
    private static IMAGE_LOADED = 0;

    constructor(imageData: HTMLCanvasElement|string) {
        Image.IMAGE_COUNT += 1;
        if (typeof imageData == "string")  {
            this.imagePath = imageData;
            this.imageElement = loadImage(this.imagePath,(el:HTMLCanvasElement)=>{
                this.width = el.width;
                this.height = el.height;
                Image.IMAGE_COUNT++;
            });
        } else if (imageData instanceof HTMLCanvasElement) {
            this.imageElement = imageData;
            this.width = this.imageElement.width;
            this.height = this.imageElement.height;
        }
    }

    public cropImage(sx, sy, sw, sh):Image {
        let virtualCanvas:HTMLCanvasElement = document.createElement("canvas");
        let context:CanvasRenderingContext2D;
        virtualCanvas.width = this.width;
        virtualCanvas.height = this.height;
        context = virtualCanvas.getContext("2d");
        context.drawImage(this.imageElement, sx, sy, sw, sh, 0, 0, this.width, this.height);
        return new Image(virtualCanvas);
    }

    public static allImageLoaded():boolean {
        return this.IMAGE_COUNT == this.IMAGE_LOADED;
    }

    public getImage(): HTMLImageElement {
        return Image.allImageLoaded() ? <HTMLImageElement> this.imageElement : undefined;
    }
}

function loadImage(src:string, onload:Function) {
    let imageElement:HTMLImageElement = <HTMLImageElement> document.createElement("image");
    imageElement.onerror = () => {throw `Frowntown Error: File '${this.imagePath}' can't be loaded.`};
    imageElement.onload = ()=>onload(imageElement);
    this.imageElement.src = src;
    return imageElement
}