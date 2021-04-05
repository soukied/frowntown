export default class GameKeyEvent {

    private element: HTMLCanvasElement;
    private keyDownValue:Map<string, boolean>;

    constructor(element: HTMLCanvasElement) {
        this.element = element;
        this.keyDownValue = new Map<string, boolean>();
        addEventListener("keydown", event=>{
            this.keyDownValue.set(event.key, true);
            console.log("Key pressed is: " + event.key);
        });
        addEventListener("keyup", event=>{
            this.keyDownValue.set(event.key, false);
        });
    }

    public isDown(key:string):boolean {
        return this.keyDownValue.get(key) ? true : false;
    }
}