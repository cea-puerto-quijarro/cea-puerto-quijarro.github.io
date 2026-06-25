/* ==========================================
   CONTADOR REGRESIVO
========================================== */

const fechaEvento = new Date("June 29, 2026 07:00:00").getTime();

const actualizarContador = () => {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        /
        1000
    );

    const diasElemento = document.getElementById("dias");
    const horasElemento = document.getElementById("horas");
    const minutosElemento = document.getElementById("minutos");
    const segundosElemento = document.getElementById("segundos");

    if (diasElemento) diasElemento.textContent = dias;
    if (horasElemento) horasElemento.textContent = horas;
    if (minutosElemento) minutosElemento.textContent = minutos;
    if (segundosElemento) segundosElemento.textContent = segundos;

};

setInterval(actualizarContador, 1000);

actualizarContador();

/* ==========================================
   RETO DIGITAL
========================================== */

const preguntas = [

    {
        pregunta:
            "¿Qué programa se utiliza para crear hojas de cálculo?",

        opciones:
            ["Word", "Excel", "Paint", "Access"],

        correcta: "Excel"
    },

    {
        pregunta:
            "¿Qué significa CPU?",

        opciones:
            [
                "Central Processing Unit",
                "Control Program User",
                "Computer Personal Unit",
                "Centro Principal Universal"
            ],

        correcta: "Central Processing Unit"
    },

    {
        pregunta:
            "¿Qué programa se utiliza para crear presentaciones?",

        opciones:
            [
                "Excel",
                "Paint",
                "PowerPoint",
                "Access"
            ],

        correcta: "PowerPoint"
    }

];

let preguntaActual = 0;
let puntuacion = 0;

const preguntaElemento =
    document.getElementById("pregunta");

const opcionesElemento =
    document.getElementById("opciones");

function mostrarPregunta() {

    if (!preguntaElemento || !opcionesElemento) return;

    const pregunta =
        preguntas[preguntaActual];

    preguntaElemento.textContent =
        pregunta.pregunta;

    opcionesElemento.innerHTML = "";

    pregunta.opciones.forEach(opcion => {

        const boton =
            document.createElement("button");

        boton.className =
            "btn btn-outline-primary";

        boton.textContent =
            opcion;

        boton.addEventListener(
            "click",
            () => verificarRespuesta(opcion)
        );

        opcionesElemento.appendChild(boton);

    });

}

function verificarRespuesta(respuesta) {

    if (
        respuesta ===
        preguntas[preguntaActual].correcta
    ) {
        puntuacion++;
    }

    preguntaActual++;

    if (
        preguntaActual < preguntas.length
    ) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }

}

function mostrarResultado() {

    preguntaElemento.innerHTML =
        "🎉 Reto Finalizado";

    opcionesElemento.innerHTML =
        `
        <div class="text-center">

            <h3>
                Tu puntuación:
            </h3>

            <h1 class="text-primary">
                ${puntuacion} / ${preguntas.length}
            </h1>

            <p>
                Gracias por participar
                en el Reto Digital del
                CEA Puerto Quijarro.
            </p>

            <button
                class="btn btn-success"
                onclick="reiniciarReto()">

                Intentar nuevamente

            </button>

        </div>
        `;
}

function reiniciarReto() {

    preguntaActual = 0;

    puntuacion = 0;

    mostrarPregunta();

}

mostrarPregunta();

/* ==========================================
   FORMULARIO WHATSAPP
========================================== */

const formulario =
    document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const nombre =
                document.getElementById("nombre").value;

            const telefono =
                document.getElementById("telefono").value;

            const area =
                document.getElementById("area").value;

            const mensaje =
                `Hola.%0A%0A` +
                `Mi nombre es ${nombre}.%0A` +
                `Teléfono: ${telefono}.%0A%0A` +
                `Estoy interesado en recibir información sobre:%0A` +
                `${area}.%0A%0A` +
                `Gracias.`;

            window.open(
                `https://wa.me/59172666093?text=${mensaje}`,
                "_blank"
            );

        }
    );

}

/* ==========================================
   ANIMACION SCROLL
========================================== */

const elementos =
    document.querySelectorAll(
        ".card, section h2"
    );

const observador =
    new IntersectionObserver(
        entradas => {

            entradas.forEach(entrada => {

                if (
                    entrada.isIntersecting
                ) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.2
        }
    );

elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(40px)";

    elemento.style.transition =
        "all .8s ease";

    observador.observe(elemento);

});

/* ==========================================
   BOTON VOLVER ARRIBA
========================================== */

const botonArriba =
    document.createElement("button");

botonArriba.innerHTML =
    "↑";

botonArriba.className =
    "btn btn-primary";

botonArriba.style.position =
    "fixed";

botonArriba.style.bottom =
    "20px";

botonArriba.style.left =
    "20px";

botonArriba.style.zIndex =
    "9999";

botonArriba.style.display =
    "none";

document.body.appendChild(
    botonArriba
);

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 400
        ) {
            botonArriba.style.display =
                "block";
        } else {
            botonArriba.style.display =
                "none";
        }

    }
);

botonArriba.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);