/*
    Clases en Javascript:
        'Obtener area de un rectángulo (3x7)'
*/
let Rectangulo = class {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    // obtener
    get area() {
        return this.calcularArea();
    }
    // método
    calcularArea() {
        return this.alto * this.ancho;
    }
}

const figura = new Rectangulo(3,7);
console.log(figura.area);

/* Example 2 */
class Polygon {
    constructor(alto, ancho) {
        this.area = alto * ancho;
    }
}
console.log(new Polygon(6,7).area);