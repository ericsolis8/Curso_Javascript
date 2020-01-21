class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.nombre + 'makes a noise');
    }
}

class Perro extends Animal {
    constructor(name) {
        super(name);  // llama al constructor de la superclase y le pasa el parametro (nombre)
    }

    speak() {
        console.log(this.name + ' ladridos.');
    }
}

let mailo = new Perro('mailo');
mailo.speak();