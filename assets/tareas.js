function init(){
}
    
function myFunction() {
    var number = parseInt(prompt("Ingrese un numero del 1 al 6"));
    
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
                alert(caso2str);
                var caso2 = caso2str.toLowerCase();
                alert(caso2);
            } while (caso2 !== "blanco");
            break; 
        case 3:    
            var mateMedia = parseInt(prompt("Ingrese su promedio de matemáticas"));
            var fisiMedia = parseInt(prompt("Ingrese su promedio de física"));
            var cienciaMedia = parseInt(prompt("Ingrese su promedio de ciencias"));
            var promedio = (mateMedia + fisiMedia + cienciaMedia)/3;
            var promAprox = Math.round(promedio);
            alert(promAprox);
        case 4:
            
            
        

        }

}
        



