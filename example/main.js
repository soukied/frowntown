var game = Frowntown.Init(800,600, document.body);
var scene1 = {
    init() {
        this.player1=[20,20];
        this.speed = 2;
        this.cursor = Frowntown.Image("assets/cursor.png");
        this.deltatime = 0;
    },  
    update(dt) {
        window.deltatime = dt;
        game.keyEvent.keyDownPreventDefault("F12");
        this.player1[0] = game.mouseEvent.getX();
        this.player1[1] = game.mouseEvent.getY();
        if (game.keyEvent.isDown("w"))
            game.camera.moveY(1);
        if (game.keyEvent.isDown("s"))
            game.camera.moveY(-1);
        if (game.keyEvent.isDown("a"))
            game.camera.moveX(1);
        if (game.keyEvent.isDown("d"))
            game.camera.moveX(-1);
        if (game.keyEvent.isDown(" "))
            game.camera.reset();
    },
    /** 
     * @param {CanvasRenderingContext2D} g 
     */
    render(g) {
        let ctx = g.getContext();
        g.fillRect("yellow", game.camera.getFixedX(), game.camera.getFixedY(), 20, 20);
        // if (Frowntown.ALL_IMAGE_LOADED())
        ctx.fillStyle = "black";
        ctx.font = "50px monospace";
        ctx.fillText(`FPS: ${game.getFPS()}`, 0, 50);
        g.drawLine("black",1, this.player1[0], this.player1[1],400,300);
        g.drawImage(this.cursor, this.player1[0], this.player1[1], 20, 20);
    }
}
game.setScene(scene1);
game.start();
game.canvasStyle({
    border: "1px solid black",
    background: "blue",
    cursor:"none"
});

