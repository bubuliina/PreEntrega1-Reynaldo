function saludo() {
    console.log("Hola! Bienvenid@ a Bodegas del Mar");
    alert("Hola! Bienvenid@ a Bodegas del Mar")
};



function permiso() {
    let objetivo = prompt("Sos mayor de edad?");
    if (objetivo.toLowerCase() == "si") {
        console.log("Es un placer conocerte," + usuario);
        alert("Es un placer conocerte, " + usuario);
        

    }
    else {
        console.log("Genial! tenemos gran variedad de bebidas sin alcohol para que elijas!");
        alert("Genial! tenemos gran variedad de bebidas sin alcohol para que elijas!");
        return false

    };
}

saludo();


let usuario = prompt("Ingresa tu nombre");
if (usuario != "") {
    console.log("Hola, " + usuario + ", bienvenid@ al universo de bebidas mas grande del pais");
    alert("Hola, " + usuario + ", bienvenid@ al universo de bebidas mas grande del pais")
}
else {
    alert("Ingrese sus datos");
    usuario = prompt("Ingrese su nombre y apellido")
};

function busqueda() {
    let busqueda = prompt("Estas buscando un lugar donde encuentres todas las bebidas que imaginas?")
    if (busqueda.toLowerCase() == "si") {
        console.log("Que bueno tenerte por aca, " + usuario);
        alert("Que bueno tenerte por aca, " + usuario)
    }
    else {
        console.log("No importa, tenemos muchos productos que pueden interesarte igual, visitanos!");
        alert("No importa, tenemos muchos productos que pueden interesarte igual, visitanos!")
    }
}

function intereses () {
        let intereses = prompt("Cuales son tus preferencias? :" + "\n" + "1) Bebidas blancas" + "\n" + "2) Vinos" + "\n" + "3) Espumantes" + "\n" + "4) Cervezas" + "\n" + "5) Otros");
        if (intereses == "1" || intereses.toLowerCase() == "Bebidas blancas") {
            console.log("Excelente, tenemos gran variedad de vodka, ron, gin, tequila, licores obtenidos de distintas frutas, entre otros, visitanos!");
            alert("Excelente, tenemos gran variedad de vodka, ron, tequila, pisco, licores obtenidos de distintas frutas, entre otros, visitanos!");
    
            puesto();
        }
        else if (intereses == "2" || intereses.toLowerCase() == "vinos") { console.log("Excelente, tenemos las mejores cepas de Merlot, Cabernet, Malbec, Chardonnay, y muchos mas, visitanos!"); alert("Tenemos las mejores cepas de Merlot, Cabernet, Malbec, Chardonnay, y muchos mas, visitanos!");
        puesto(); 
    }
    
        else if (intereses == "3" || intereses.toLowerCase() == "espumantes") {
            console.log("Excelente, con nosotros podes degustar los mejores Brut Nature, Extra Brut, Brut, Extra-Sec, Sec y Demi-Sec,visitanos!");
            alert("Excelente, con nosotros podes degustar los mejores Brut Nature, Extra Brut, Brut, Extra-Sec, Sec y Demi-Sec, visitanos!");
            puesto();
        } 
    
        else if (intereses == "4" || intereses.toLowerCase() == "cervezas") {
            console.log("Veni a probar todas las variedades artesanales, ipa, pilsen, lager, pale ale y muchas mas! visitanos!"); alert("Veni a probar todas las variedades artesanales, ipa, pilsen, lager, pale ale y muchas mas! visitanos!");
            puesto();
        }
            
        else if (intereses == "5" || intereses.toLowerCase() == "otro") {
            console.log("Tambien tenemos gran variedad de gaseosas, jugos naturales y especias para que tus tragos sean una experiencia unica! visitanos!");
            alert("Tambien tenemos gran variedad de gaseosas, jugos naturales y especias para que tus tragos sean una experiencia unica! visitanos!")
            return false
        }
    }


permiso();

busqueda();

intereses ();