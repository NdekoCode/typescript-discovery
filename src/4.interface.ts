interface Point {
    x: number;
    y: number;
}


class Triangle implements Point {
    x = 0;
    y = 0;

    surface(): number {
        return x;
    }
}

function draw(p: Point): number {
    return 3;
    throw Error("Not valid");
}
const bum = draw(new Triangle());
console.log(bum);