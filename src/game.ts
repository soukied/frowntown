import GameEvent from "./events/event";
import GameKeyEvent from "./events/key";
import GameMouseEvent from "./events/mouse";
import Graphics from "./graphics";
import Image from "./image";
import Scene, {createScene} from "./scene";

class Game {

    private parentElement:HTMLElement;
    private canvasElement:HTMLCanvasElement;
    private graphics:CanvasRenderingContext2D;
    private IS_RUNNING:boolean;
    private currentScene:Scene;
    public event:GameEvent;
    private WIDTH : number;
    private HEIGHT : number;
    public keyEvent : GameKeyEvent;
    public mouseEvent : GameMouseEvent;

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
    }

    public setScale(x:number, y:number) {
        this.graphics.scale(x,y);
    }

    public setScene(newScene: Scene) {
        this.currentScene = newScene;
    }

    private run() {
        if (!this.currentScene.isInitialized) {
            if (this.currentScene.init instanceof Function)
                this.currentScene.init();
            this.currentScene.isInitialized = true;
        }
        if (this.currentScene.update instanceof Function)
            this.currentScene.update();
        this.graphics.clearRect(0,0, this.WIDTH, this.HEIGHT);
        if (this.currentScene.render instanceof Function) 
            this.currentScene.render(new Graphics(this.graphics));
    }

    public start() {
        if (this.IS_RUNNING) return;
        this.IS_RUNNING = true;
        let callback = () => {
            this.run()
            if (this.IS_RUNNING) requestAnimationFrame(callback);
        }
        requestAnimationFrame(callback);
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

export { createScene, Image};