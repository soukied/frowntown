export default class GameKeyEvent {

    private element: HTMLCanvasElement;
    private keyDownValue:Record<string, boolean>;

    constructor(element: HTMLCanvasElement) {
        this.element = element;
        this.keyDownValue = {};
        addEventListener("keydown", event=>{
            this.keyDownValue[event.key] = true;
        });
        addEventListener("keyup", event=>{
            this.keyDownValue[event.key] = false;
        });
    }

    public isDown(key:string):boolean {
        return this.keyDownValue[key] ? true : false;
    }
}