export default class GameKeyEvent {

    private element: HTMLCanvasElement;
    private keyDownValue:Record<string, boolean>;
    private preventDefaultKeys:Record<string, boolean>;

    constructor(element: HTMLCanvasElement) {
        this.element = element;
        this.keyDownValue = {};
        this.preventDefaultKeys = {};
        addEventListener("keydown", event=>{
            this.keyDownValue[event.key] = true;
            if (this.preventDefaultKeys[event.key]){
                event.preventDefault();
            } 
        });
        addEventListener("keyup", event=>{
            this.keyDownValue[event.key] = false;
        });
    }

    public keyDownPreventDefault(...keys:string[]) {
        for (let key of keys) {
            this.preventDefaultKeys[key] = true;
        }
    }

    public isDown(key:string):boolean {
        return this.keyDownValue[key] ? true : false;
    }
}