import Graphics from './util/graphics';

export let globalData:any = {};

export interface SceneInterface {
    init():void;
    update():void;
    render(graphics:Graphics):void;
}

export default class Scene implements SceneInterface {
    public isInitialized:boolean = false;
    public global:any;
    init() {

    }

    update() {

    }
    render(graphics:Graphics) {

    }
}

export function createScene(scene:SceneInterface):Scene {
    let obj:Scene = <Scene> scene;
    obj.isInitialized = false;
    obj.global = globalData;
    return <Scene> scene;
}