class Poligono {
    constructor(alto, ancho) {
        this.nombre = 'Poligono';
        this.alto = alto;
        this.ancho = ancho;
    }
}

class Cuadrado extends Poligono {
    constructor(longitud) {
        super(longitud, longitud);
        this.nombre = 'Cuadrado';
    }
}