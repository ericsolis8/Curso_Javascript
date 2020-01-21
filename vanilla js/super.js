/* La palabra clave (super) se utiliza para llamar a los métodos correspondientes de superclase. 
   Esta es una ventaja sobre la herencia basada en prototipos. 
*/
class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log('${this.name} makes a noise.');
    }
}
class Lion extends Cat {
    speak() {
        super.speak();
        console.log('${this.name} roars.');
    }
}
let l = new Lion('twinkie');
l.speak();