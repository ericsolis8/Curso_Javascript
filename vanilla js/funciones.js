/* Example */
button.addEventListener('click', function(event){
    alert('Hola!');
});

/* Example 2 */
function Persona() {
    const that = this;
    that.edad = 0;

    setInterval(function growUp() {
        that.edad++;
    }, 1000);
}

const nuevo = new Persona();