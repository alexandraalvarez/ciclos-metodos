function init(){
}
    
function myFunction() {
    var number = parseInt(prompt("Ingrese un numero del 1 al 5"));
    
    switch(number) {
        case 1:
            var caso1 = prompt("Ingrese un número del 1 al 100");
            for (let i = 0; i <= caso1; i++) {
                //alert(i);
                console.log(i);
            };
            break;
        case 2:
            do {
                var caso2str = prompt("¿De qué color es el caballo blanco de Napoleón?"); 
                var caso2 = caso2str.toLowerCase();
               
            } while (caso2 !== "blanco");
            break; 
        case 3:    
            var mateMedia = parseInt(prompt("Ingrese su promedio de matemáticas"));
            var fisiMedia = parseInt(prompt("Ingrese su promedio de física"));
            var cienciaMedia = parseInt(prompt("Ingrese su promedio de ciencias"));
            var promedio = (mateMedia + fisiMedia + cienciaMedia)/3;
            var promAprox = Math.round(promedio);
            alert(promAprox);
            break;
        case 4:
            var frutas = [];

            do {
                frutas.push(prompt("Ingrese el nombre de una fruta"));

            } while (frutas.length <= 2);
            
            var noApple; 

            for (noApple of frutas) {
            if (noApple != "manzana") {
                console.log(noApple);
            } else {
             continue }
            };
            break;
        case 5:
            var name = prompt("Escribe tu nombre");
            name = name.toLocaleLowerCase();
            var vocal = [];
            var consonante = [];
            var letras;

            for (letras of name) {
                if (letras == "a" || letras == "e" || letras == "i" || letras == "o" || letras == "u") {
                    vocal.push(letras);
                } else {
                  consonante.push(letras);  
                }
            };
            alert("Tu nombre tiene " + consonante.length + " letras y " + vocal.length + " vocales.");
            break;
        default:
            alert("Ingresó un numero inválido, recargue la página e ingrese un numero entre 1 y 5");       
            break;
    }

}
        



