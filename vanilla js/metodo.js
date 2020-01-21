class Nodo {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(a,b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Nodo(5,5);
const p2 = new Nodo(3,8);

console.log(Nodo.distance(p1, p2)); 