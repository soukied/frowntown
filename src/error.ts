export default class FrowntownError extends Error {
    constructor(message:string) {
        super(message);
        this.name = "FrowntownError";
    }
}