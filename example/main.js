var game = Frowntown.Init(800,600, document.body);
var scene1 = {
    init() {
        this.player1=[20,20];
        this.speed = 2;
    },  
    update() {
        this.player1[0] = game.mouseEvent.getX();
        this.player1[1] = game.mouseEvent.getY();
        if (game.keyEvent.isDown("w"))
            game.camera.moveY(-1);
        if (game.keyEvent.isDown("s"))
            game.camera.moveY(1);
        if (game.keyEvent.isDown("a"))
            game.camera.moveX(-1);
        if (game.keyEvent.isDown("d"))
            game.camera.moveX(1);
        if (game.keyEvent.isDown(" "))
            game.camera.reset();
    },
    render(g) {
        g.drawLine("black",1, this.player1[0], this.player1[1],400,300);
    }
}
game.setScene(scene1);
game.start();
game.canvasStyle({
    border: "1px solid black",
    background: "blue"
});

