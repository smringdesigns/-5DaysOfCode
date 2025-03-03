// Bienvenida
alert("¡Bienvenido al sistema de lista de compras!");

let listaCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
};

// Pregunta inicial, paraa agregar mas elementos a la list
while (true) { 
    let opcion = prompt("¿Deseas agregar un alimento a tu lista de compras? Responde con (sí/no)").toLowerCase();

    if (opcion === "no") { //si el texto leído es "no", salir del while
        alert("Gracias por participar.")
        break;
    }

    if (opcion !== "si") { // valor inicial como "sí", porque la primera vez siempre va a entrar en el while
        alert("Por favor, responde con sí o no.");
        continue;
    }

    alert("Vamos a agregar alimentos por categorias listo: ");

    let frutas = prompt("Agrega una fruta o deja vacío si no quieres agregar nada: ");
    if (frutas) {
        listaCompras.frutas.push(frutas);
        console.log(`Se ha agregado a tu lista: ${frutas}`);
    }

    let lacteos = prompt("Agrega un lacteo o deja vacío si no quieres agregar nada: ");
    if (lacteos) {
        listaCompras.lacteos.push(lacteos);
        console.log(`Se ha agregado a tu lista: ${lacteos}`);
    }

    let congelados = prompt("Agrega un congelado o deja vacío si no quieres agregar nada: ");
    if (congelados) {
        listaCompras.congelados.push(congelados);
        console.log(`Se ha agregado a tu lista: ${congelados}`);
    }

    let dulces = prompt("Agrega un dulce o deja vacío si no quieres agregar nada: ");
    if (dulces) {
        listaCompras.dulces.push(dulces);
        console.log(`Se ha agregado a tu lista: ${dulces}`);
    }   

    // Muestra la lista de compras
    let mensaje = "Lista de compras:\n";
    for (let categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            mensaje += `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaCompras[categoria].join(", ")}\n`;
        }
    }

    alert(mensaje);
    console.log(mensaje);

};