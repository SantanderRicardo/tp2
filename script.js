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

const tarjetas =
document.querySelectorAll(".tarjeta");

if(tarjetas.length > 0){

    tarjetas.forEach(function(tarjeta){

        tarjeta.addEventListener("click",
        function(){

            tarjeta.classList.toggle(
                "seleccionada"
            );

            const cantidad =
            document.querySelectorAll(
                ".seleccionada"
            ).length;

            document.getElementById(
                "contador"
            ).textContent = cantidad;

        });

    });

}

const contenedor =
document.getElementById(
    "contenedorListado"
);

if(contenedor){

    const elementos = [

        {
            nombre:"Mafalda",
            categoria:"personaje"
        },

        {
            nombre:"Hijitus",
            categoria:"personaje"
        },

        {
            nombre:"Manuelita",
            categoria:"mascota"
        },

        {
            nombre:"Dogo Argentino",
            categoria:"mascota"
        },

        {
            nombre:"Anteojito",
            categoria:"personaje"
        },

        {
            nombre:"Pichichus",
            categoria:"mascota"
        }

    ];

    function mostrar(lista){

        contenedor.innerHTML = "";

        lista.forEach(function(item){

            const div =
            document.createElement("div");

            div.classList.add("item");

            div.textContent =
            item.nombre +
            " - " +
            item.categoria;

            contenedor.appendChild(div);

        });

    }

    mostrar(elementos);

    document.getElementById("btnTodos")
    .addEventListener("click", function(){

        mostrar(elementos);

    });

    document.getElementById("btnMascotas")
    .addEventListener("click", function(){

        const mascotas =
        elementos.filter(function(item){

            return item.categoria ===
            "mascota";

        });

        mostrar(mascotas);

    });

}