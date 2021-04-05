import Graphics from './util/graphics';

export interface SceneInterface {
    init():void;
    update():void;
    render(graphics:Graphics):void;
}

export default class Scene implements SceneInterface {
    public isInitialized:boolean = false;
    private data:any;
    init() {

    }

    update() {

    }
    render(graphics:Graphics) {

    }
}

export function createScene(scene:SceneInterface):Scene {
    let obj = <any> scene;
    obj.isInitialized = false;
    return <Scene> scene;
}