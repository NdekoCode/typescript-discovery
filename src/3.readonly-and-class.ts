type UserModel = { email: string, password: string, fistName: string, lastName: string, [ key: string ]: string }
function reverse<T>(arg: T[]): readonly T[] {
    return arg.slice();
}
class Person {
    #age = 18;
    public firstname = "Arick";
    constructor(public username: string) {
    }


}
class GDAStudent extends Person {
    log() {
        console.log(this.username);
    }
}
const ndeko = new GDAStudent("ndekocode");
console.log(ndeko);

class Collection<T> {
    constructor(private items: T[]) {
    }
    public first(): T | null {
        return this.items[ 0 ] || null;
    }
    public add(item: T): this {
        this.items.push(item);
        return this;
    }
}
const users = new Collection([ "bum", 23 ]);
const firstUser = users.first();
const newUser = users.add(45);
class Point {
    x: number = 0;
    y: number = 0;
}

class Geometry {
    x: number = 0;
    y: number = 0;
    suface: number = 0;
}
function getX(p: Point): number {
    if (p instanceof Point) {

        return p.x;
    }
    throw Error("Not an instance of Point");
}
const x = getX(new Point())
console.log(x);
/**
 * Le DOC typing
 * - On dit souvent: si ca fait coak et que ca marche comme un cannard, donc c'est un cannard
 * Car typescript ne verifie pas vraiment si c'est vraiment l'instance de quelque chose il se contente seulement de verifier la forme.
 */