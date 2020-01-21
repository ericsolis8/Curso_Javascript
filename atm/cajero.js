class Billete
{
  constructor(v, c) // funcion constructor
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {

    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor); //math.flor - redondea hacia abajo
        // si la cantidad de billetes es menor a la cantidad
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      // 
      else
      {
        papeles = div;
      }

      // manipular la funcion de entregado
      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }

  }

  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
              resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);