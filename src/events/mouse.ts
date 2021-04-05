export default class GameMouseEvent {
    
    private x:number = 0;
    private y:number = 0;
    private leftDown:boolean = false;
    private leftUp:boolean = true;
    private rightDown:boolean = true;
    private rightUp:boolean = false;
    constructor(element:HTMLCanvasElement) {
        addEventListener("mousemove", ev=>{
            this.x = ev.clientX - element.getBoundingClientRect().left;
            this.y = ev.clientY - element.getBoundingClientRect().top;
        });
        element.addEventListener("mouseup", ev=>{
            if (ev.buttons == 1) {
                this.leftDown = false;
                this.leftUp = true;
            } else if (ev.buttons == 2) {
                this.rightDown = false;
                this.rightUp = true;
            }
        });
        element.addEventListener("mousedown", ev=>{
            if (ev.buttons == 1) {
                this.leftDown = true;
                this.leftUp = false;
            } else if (ev.buttons == 2) {
                this.rightDown = true;
                this.rightUp = false;
            }
        });
    }

    public isLeftButtonUp():boolean {
        return this.leftUp
    }

    public isLeftButtonDown():boolean {
        return this.leftDown
    }

    public isRightButtonUp():boolean {
        return this.rightUp
    }

    public isrightButtonDown():boolean {
        return this.rightDown
    }

    public getX():number {
        return this.x;
    }

    public getY():number {
        return this.y;
    }

    public getPos():number[] {
        return [this.x, this.y];
    }

}