//Inicializar contador
let countTarea = 0
let contadorLikes = 0

//Llamar lo que hay en el html a js
let magia = document.getElementById("magia")
let boton = document.querySelector(".boton")
let texto = document.getElementById("texto")
let listas = document.querySelector("#a")
let listas2 = document.querySelector("#b")
let listas3 = document.querySelector("#c")
let listas4 = document.querySelector("#d")
let inputNombre = document.getElementById("inputNombre")
let botonSubmit = document.getElementById("btnSubmit")


//Llamar funciones que se activan según los clicks en el contador
boton.addEventListener("click", function () {
    countTarea++
    if (countTarea >= 1) {
        agregarCss()
    }

    if (countTarea >= 2) {
        entradaDatos()
    }

    if (countTarea == 3) {
        eliminarConsoleLog()
    }

    if (countTarea == 4) {
        borrarAlert()
    }

    if (countTarea == 5) {
        proyectoCompleto()
    }
})

//Primer punto
function agregarCss() {
    //Agregamos el CSS
    magia.classList.add("magia-activa")
    boton.classList.add("boton-activo")
    listas.classList.add("a")
    texto.innerText = "Siguiente paso"
}

//Segundo punto
function entradaDatos() {
    //Hacemos aparecer el input y botón que pide el nombre
    inputNombre.classList.remove("hidden")
    botonSubmit.classList.remove("hidden")
    inputNombre.classList.add("inputNombreClase")
    listas2.classList.add("b")

    //Pedimos el nombre y saludamos con ${valor}
    const miFormulario = document.getElementById("tomaNombre")
    miFormulario.addEventListener("submit", (e) => {
        e.preventDefault()
        const nombre = document.getElementById("inputNombre")
        const nombreMostrar = document.getElementById("nombreLlamado")
        let valor = nombre.value
        localStorage.setItem("nombre", valor)
        nombreMostrar.innerHTML = `<p>Hola ${valor}</p>`
    })
}

//Tercer punto
function eliminarConsoleLog() {
    //No se borra ningún console.log pero se agrega uno para hacer el chiste
    listas3.classList.add("c")
    let consoleBorrado = document.createElement("div")
    consoleBorrado.classList.add("consoleCont")
    consoleBorrado.innerHTML = `<p>Mensajes de consola eliminados</p>
                                    <button class="chau">Cerrar</button>`
    document.body.append(consoleBorrado)
    console.log("¿Qué estas buscando?")

    //Funcionamiento del botón de cerrar la notificación
    const botonCerrar = document.querySelector(".chau")
    botonCerrar.addEventListener("click", function () {
        consoleBorrado.remove()
        consoleBorrado.classList.remove("consoleCont")
    })
}

//Cuarto punto
function borrarAlert() {
    //No se borra ningún alert ni prompt pero se agrega uno que aparenta serlo
    listas4.classList.add("d")
    let alert = document.createElement("div")
    alert.id
    alert.classList.add("alertCont")
    alert.innerHTML = `<p class="github"><strong>ezequielbarrera.github.io dice</strong></p>
                            <p class="mensaje">Se borraron todos los alerts y prompts</p>
                            <button class="alertBtn">Aceptar</button>`
    let fakeAlert = document.getElementById("fakeAlert")
    fakeAlert.append(alert)

    //Funcionamiento del botón de cerrar la notificación
    const botonAceptar = document.querySelector(".alertBtn")
    botonAceptar.addEventListener("click", function () {
        alert.remove()
        alert.classList.remove("alertCont")
    })
}

// --------------------------------------------------------------------------

class Chistes {
    constructor(nombre, chiste, likes, id) {
        this.nombre = nombre
        this.chiste = chiste
        this.likes = likes
        this.id = id
    }
}

let chistes = []
let chistesJson = []

// cargamos el array desde localStorage
if (localStorage.getItem("chistes")) {
    chistes = JSON.parse(localStorage.getItem("chistes"))
}

function generarId() {
    // generamos id en base al largo del array
    return chistes.length > 0 ? chistes[chistes.length - 1].id + 1 : 1
}

//Quinto y último punto
function proyectoCompleto() {
    //Hacemos desaparecer todo lo mostrado en el sitio
    let desaparecerLista = document.getElementById("magia")
    let desaparecerPedidoNombre = document.querySelector(".input-cont")
    desaparecerLista.innerHTML = `<p></p>`
    desaparecerLista.classList.remove("magia-activa")
    desaparecerPedidoNombre.innerHTML = `<p></p>`

    //Preparamos el DOM con clases nuevas y textos nuevos
    let cartelBienvenida = document.createElement("div")
    cartelBienvenida.classList.add("div-title")
    document.body.append(cartelBienvenida)
    document.body.classList.add("fondo")
    let nombreLocal = localStorage.getItem("nombre")
    cartelBienvenida.innerHTML = `<h1>Bienvenido al proyecto, ${nombreLocal}</h1>`

    let explicacionCont = document.createElement("div")
    let explicacionChiste = document.createElement("div")
    explicacionCont.classList.add("div-exp-cont")
    explicacionChiste.classList.add("div-explicacion")
    explicacionChiste.innerHTML = `
        <h3>Explicación:</h3>
        <p> Te pido un chiste, vos ingresalo abajo.
            <br>
            Vas a poder competir con otros jugadores.
        </p>`
    document.body.append(explicacionCont)
    explicacionCont.append(explicacionChiste)

    agregarChiste()

    // ver chistes
    let mostrarChistes = document.createElement("div")
    document.body.append(mostrarChistes)
    mostrarChistes.innerHTML = `
        <button id="mostrarChistes">Ver chistes</button>
        <h2 id="chistitle" class="apor-title"> Chistes </h2>
        <div id="contChistes" > </div>
        `
    let aporTitle = document.getElementById("chistitle")
    aporTitle.classList.add("hidden")
    const listaChistesBTN = document.getElementById("mostrarChistes")

    listaChistesBTN.addEventListener("click", verChistes)
}

// funcion para agregar el chiste
function agregarChiste() {
    //Preparamos la estructura para pedir chistes
    let chisteForm = document.createElement("div")
    document.body.append(chisteForm)
    chisteForm.innerHTML = `
    <form class="chiste-form" id="tomaChiste">
        <textarea class="inputNombreClase" id="inputChiste" type="text" placeholder="Contame un chiste" cols="75" rows="20"></textarea>
        <input id="btnSubmit" type="submit">
    </form>
    <div id="chisteLlamado"> </div> `

    console.log(chistes)

    //Pedimos un chiste y lo almacenamos
    const miFormulario = document.getElementById("tomaChiste")
    miFormulario.addEventListener("submit", (e) => {
        e.preventDefault()
        // eliminamos el submit para que no se pueda mandar mas de uno
        const submit = document.getElementById("btnSubmit")
        submit.remove()
        // tomamos el valor del chiste
        const chiste = document.getElementById("inputChiste")
        let valor = chiste.value
        // lo guardamos en el localStorage
        localStorage.setItem("chiste", valor)
        // tomamos el nombre que ingresó el jugador
        let nombreJugador = localStorage.getItem("nombre")
        // tomamos el chiste del localstorage
        let nuevoChiste = localStorage.getItem("chiste")
        // let likes = localStorage.getItem("likes")
        let likes = contadorLikes
        // generamos id
        let id = generarId()
        // lo pusheamos al array
        const agregarChiste = new Chistes(nombreJugador, nuevoChiste, likes, id)
        chistes.push(agregarChiste)
        Toastify({
            text: "Chiste añadido",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                color: "#000000",
                background: "#ffc0cb",
                borderRadius: "0.5rem",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: ".75rem"
            },
            offset: {
                x: '1.5rem',
                y: '1.5rem'
            },
            onClick: function () { } // Callback after click
        }).showToast()
        // actualizamos el array con el nuevo chiste
        localStorage.setItem("chistes", JSON.stringify(chistes))
        console.log(chistes)

        // mostramos el chiste cargado
        const chisteMostrar = document.getElementById("chisteLlamado")
        chisteMostrar.innerHTML = `
            <h4 class="apor-title">Tu aporte:</h4>
            <div class="chiste-cont">
                <div class="div1">
                    <p>${valor}</p>
                </div>
                <div>
                    <p>${nombreJugador}</p>
                </div>
            </div> `
    })

}

// Funcion mostrar chistes
function verChistes() {
    console.log(chistes)
    const contChistes = document.getElementById("contChistes")
    // limpiamos el contenedor antes de pedir los chistes
    contChistes.innerHTML = ""

    let aporTitle = document.getElementById("chistitle")
    aporTitle.classList.remove("hidden")

    if (chistes.length < 1) {
        contChistes.innerHTML = `<h4 class="apor-title">No hay chistes cargados<h4>`
    }

    // traemos el array de chistes
        fetch("../json/chistes.json")
            .then(response => response.json())
            .then(datos => {
                chistesJson = datos
                chistesJson.forEach(chiste => {
                    let chistesListaJson = document.createElement("div")
                    chistesListaJson.innerHTML = `
                        <div class="chiste-cont">
                            <div class="div1">
                                <p>${chiste.chiste}</p>
                            </div>
                            <div>
                                <p>${chiste.nombre}</p>
                            </div>
                            <div class="div-btn">
                                <button id="contadorMG${chiste.id}" class="boton-chiste">
                                    Me gusta
                                </button>
                                <p id="likes${chiste.id}">Likes: ${chiste.likes}</p>
                            </div>
                        </div> `
            
                    contChistes.append(chistesListaJson)
            
                    // AUMENTAR LIKES
                    let contadorMG = document.getElementById(`contadorMG${chiste.id}`)
                    contadorMG.addEventListener("click", () => {
                        // generamos un like
                        chiste.likes += 1
            
                        // actualizamos el localstorage
                        localStorage.setItem("chistes", JSON.stringify(chistesJson))
                        // mostramos los likes
                        let mostrarLikes = document.getElementById(`likes${chiste.id}`)
                        mostrarLikes.innerText = `Likes: ${chiste.likes}`
                        // eliminamos el botón para evitar múltiples likes
                        contadorMG.remove()
                    })
                })
            })
            .catch(error => console.log(error))

    chistes.forEach(chiste => {
        let chistesLista = document.createElement("div")
        chistesLista.innerHTML = `
            <div class="chiste-cont">
                <div class="div1">
                    <p>${chiste.chiste}</p>
                </div>
                <div>
                    <p>${chiste.nombre}</p>
                </div>
                <div class="div-btn">
                    <button id="contadorMG${chiste.id}" class="boton-chiste">
                        Me gusta
                    </button>
                    <p id="likes${chiste.id}">Likes: ${chiste.likes}</p>
                </div>
            </div> `

        contChistes.append(chistesLista)

        // AUMENTAR LIKES
        let contadorMG = document.getElementById(`contadorMG${chiste.id}`)
        contadorMG.addEventListener("click", () => {
            // generamos un like
            chiste.likes += 1

            // actualizamos el localstorage
            localStorage.setItem("chistes", JSON.stringify(chistes))
            // mostramos los likes
            let mostrarLikes = document.getElementById(`likes${chiste.id}`)
            mostrarLikes.innerText = `Likes: ${chiste.likes}`
            // eliminamos el botón para evitar múltiples likes
            contadorMG.remove()
        })
    })

    
}