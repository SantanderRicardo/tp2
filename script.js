const listaMeriendas =
document.getElementById("listaMeriendas");

if(listaMeriendas){

    const meriendas = [
        "Mate con Facturas",
        "Cafe con Leche",
        "Chocolatada",
        "Bizcochitos de Grasa",
        "Tostadas con Dulce de Leche"
    ];

    meriendas.forEach(function(merienda){

        const li =
        document.createElement("li");

        li.textContent = merienda;

        listaMeriendas.appendChild(li);

    });

    document.getElementById("btnCantidad")
    .addEventListener("click", function(){

        document.getElementById("resultado")
        .textContent =
        "Hay " + meriendas.length + " meriendas.";

    });

}