import Camera from "./util/camera";
import GameKeyEvent from "./events/key";
import GameMouseEvent from "./events/mouse";
import Graphics from "./util/graphics";
import Image, {ALL_IMAGE_LOADED} from "./util/image";
import Scene, {createScene} from "./scene";

class Game {

    private parentElement:HTMLElement;
    private canvasElement:HTMLCanvasElement;
    private graphics:CanvasRenderingContext2D;
    private IS_RUNNING:boolean;
    private currentScene:Scene;
    private WIDTH : number;
    private HEIGHT : number;
    private framesPerSecond:number = 0;
    public keyEvent : GameKeyEvent;
    public mouseEvent : GameMouseEvent;
    public camera : Camera;

    constructor(width:number, height:number, parent:HTMLElement) {
        this.canvasElement = document.createElement("canvas");
        this.canvasElement.width = this.WIDTH = width;
        this.canvasElement.height = this.HEIGHT = height;
        this.parentElement = parent;
        this.parentElement.appendChild(this.canvasElement);
    
        this.IS_RUNNING = false;
        this.currentScene = new Scene();
        this.graphics = this.canvasElement.getContext("2d");
        this.graphics.imageSmoothingEnabled = false;

        this.keyEvent = new GameKeyEvent(this.canvasElement);
        this.mouseEvent = new GameMouseEvent(this.canvasElement);
        this.camera = new Camera(this.WIDTH, this.HEIGHT);
    }

    public setScale(x:number, y:number) {
        this.graphics.scale(x,y);
    }

    public setScene(newScene: Scene) {
        this.currentScene = newScene;
    }

    private run(dt:number) {
        if (!this.currentScene.isInitialized) {
            if (this.currentScene.init instanceof Function)
                this.currentScene.init();
            this.currentScene.isInitialized = true;
        }
        // set camera
        if (this.currentScene.update instanceof Function)
            this.currentScene.update(dt);
        
    }

    public getFPS():number{
        return this.framesPerSecond;
    }

    public start() {
        if (this.IS_RUNNING) return;
        // this.currentScene.init();
        this.IS_RUNNING = true;
        let lastTime = new Date().getTime();
        let now;
        let delta;
        let ticks = 0;
        let times = 0;
        let frames = 0;
        setInterval(()=>{
            if (!this.currentScene.isInitialized) {
                if (this.currentScene.init instanceof Function)
                    this.currentScene.init();
                this.currentScene.isInitialized = true;
            }
            // console.log("Hello World");
            // if (!this.IS_RUNNING) return;
            now = new Date().getTime();
            delta = now - lastTime;
            ticks += delta;
            times += delta;
            lastTime = now;
            frames++;
            if (ticks >= 1000/60) {
                this.run(delta/1000);
                ticks=0;
            }
            if (times >= 1000) {
                this.framesPerSecond = frames;
                frames = 0;
                times -= 1000;
                console.log("Starting");
            }
            this.graphics.clearRect(0,0, this.WIDTH, this.HEIGHT);
            if (this.currentScene.render instanceof Function) {
                this.graphics.translate(this.camera.getX(), this.camera.getY());
                this.currentScene.render(new Graphics(this.graphics));
                this.graphics.translate(-this.camera.getX(), -this.camera.getY())
            }
        },0);
        // let callback = () => {
        //     this.run();
        //     if (this.IS_RUNNING) requestAnimationFrame(callback);
        // }
        // requestAnimationFrame(callback);
    }

    public stop() {
        if (!this.IS_RUNNING) return;
        this.IS_RUNNING = false;
    }

    public canvasStyle(styles:any) {
        for (var key in styles) {
            this.canvasElement.style[key] = styles[key];
        }
    }

    public toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.canvasElement.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
      }
}

export function Init(width:number, height:number, parent:HTMLElement):Game {
    return new Game(width, height, parent);
}

function loadImage(src:string):Image {
    return new Image(src);
}

export { createScene, loadImage as Image, ALL_IMAGE_LOADED};