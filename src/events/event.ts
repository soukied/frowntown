import GameKeyEvent from "./key";
import GameMouseEvent from "./mouse";

export default class GameEvent {

    public key:GameKeyEvent;
    public mouse:GameMouseEvent;
    private element:HTMLCanvasElement;

    constructor(element:HTMLCanvasElement) {
        this.element = element;
        this.key = new GameKeyEvent(this.element);
        this.mouse = new GameMouseEvent(this.element);
    }
}