import FrowntownError from "../error";
import Graphics from "./graphics";

let IMAGE_COUNT:number = 0;
let IMAGE_LOADED:number = 0;

export async function loadImage(src:string) {
    let imageElement:HTMLImageElement = document.createElement("img");
    return new Promise(resolve => {
        imageElement.onload = () => resolve(imageElement);
        imageElement.src = src;    
        return imageElement;
    }).catch(err=>{throw new FrowntownError(`Can't load '${src}'`)}); 
}

export default class Image {
    private imagePath: string = null;
    private imageElement: HTMLImageElement|HTMLCanvasElement;
    private width:number;
    private height:number;

    // private static IMAGE_COUNT = 0;
    // private static IMAGE_LOADED = 0;

    constructor(imageData: HTMLCanvasElement|string) {
        IMAGE_COUNT++;
        if (typeof imageData == "string")  {
            this.imagePath = imageData;
            loadImage(imageData).then(value=>{
                this.imageElement = <HTMLImageElement> value;
                IMAGE_LOADED++;
            });
        } else if (imageData instanceof HTMLCanvasElement) {
            this.imageElement = imageData;
            this.width = this.imageElement.width;
            this.height = this.imageElement.height;
            IMAGE_LOADED++;
        }
    }

    public getImagePath():string {
        return typeof this.imagePath == "string" ? this.imagePath : undefined;
    }

    public cropImage(sx:number, sy:number, sw:number, sh:number):Image {
        let virtualCanvas:HTMLCanvasElement = document.createElement("canvas");
        let context:CanvasRenderingContext2D;
        virtualCanvas.width = this.width;
        virtualCanvas.height = this.height;
        context = virtualCanvas.getContext("2d");
        context.drawImage(this.imageElement, sx, sy, sw, sh, 0, 0, this.width, this.height);
        return new Image(virtualCanvas);
    }

    public getImage(): HTMLImageElement {
        return <HTMLImageElement> this.imageElement;
    }
}

export function ALL_IMAGE_LOADED():boolean {
    return IMAGE_COUNT === IMAGE_LOADED;
}