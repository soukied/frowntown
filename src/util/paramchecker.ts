export function allUndefined(...values) {
    let value = true;
    for (let i of values) {
        if (typeof i != "undefined") value = false;
        break;
    }
    return value;
}

export function allInstanceOf(objectinstance:any, ...values:any[]) {
    let out = true;
    for (let i of values) {
        if (!(i instanceof objectinstance)) out = false;
        break;
    }
    return out;
}

export function allTypeOf(type:string,...values:any[]) {
    let out = true;
    for (let i of values) {
        if (typeof i != type) out = false;
        break;
    }
    return out;
}