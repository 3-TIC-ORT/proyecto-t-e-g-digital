// Declaración de Variables Globales
let turno = "Rojo";
let colores = ["Rojo", "Azul", "Amarillo", "Verde"];
let fase = "Atacar";
let fases = ["Atacar", "Reagrupar", "Incorporar"];
let currentphase = document.getElementById("currentphase");
let currentturn = document.getElementById("currentturn");
let atacarrojo = document.getElementById("atacarrojo");
let atacarazul = document.getElementById("atacarazul");
let atacaramarillo = document.getElementById("atacaramarillo");
let atacarverde = document.getElementById("atacarverde");
let skipazul = document.getElementById("pasaazul");
let skiprojo = document.getElementById("pasarojo");
let skipamarillo = document.getElementById("pasaamarillo");
let skipverde = document.getElementById("pasaverde");
let i = 0;
let i2 = 0;
let dado = 0;
let paisseleccionado = 0;
let paisatacado = 0;
let paisreceptor = 0;
let dadosatacante = 0;
let dadosdefensor = 0;
let resultadosatacante = [];
let resultadosdefensor = [];
let dadoreserva = 0;
let i121 = 0;
let i122 = 0;
let i141 = 0;
let i142 = 0;
let i161 = 0;
let i162 = 0;
let i171 = 0;
let i172 = 0;
let fichasnuevasrojo = 0;
let fichasnuevasazul = 0;
let fichasnuevasamarillo = 0;
let fichasnuevasverde = 0;
let randomizador = 0;

// Definición de Países y Mapa
let paises = [];
let australia = {
    nombre: "Australia",
    id: document.getElementById("australiaid"),
    continente: "",
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let sumatra = {
    nombre: "Sumatra",
    id: document.getElementById("sumatraid"),
    continente: "Oceanía",
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let java = {
    nombre: "Java",
    continente: "Oceanía",
    id: document.getElementById("javaid"),
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let borneo = {
    nombre: "Borneo",
    continente: "Oceanía",
    id: document.getElementById("borneoid"),
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let chile = {
    nombre: "Chile",
    continente: "América del Sur",
    id: document.getElementById("chileid"),
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let india = {
    nombre: "India",
    continente: "Asia",
    id: document.getElementById("indiaid"),
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let malasia = {
    nombre: "Malasia",
    continente: "Asia",
    id: document.getElementById("malasiaid"),
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let china = {
    nombre: "China",
    continente: "Asia",
    id: document.getElementById("chinaid"),
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let iran = {
    nombre: "Irán",
    continente: "Asia",
    id: document.getElementById("iranid"),
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let peru = {
    nombre: "Perú",
    continente: "América del Sur",
    id: document.getElementById("peruid"),
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
let argentina = {
    nombre: "Argentina",
    continente: "América del Sur",
    id: document.getElementById("argentinaid"),
    fichas: 3,
    colorfichas: "",
    limitrofes: [],
};
australia.limitrofes.push(sumatra, java, borneo, chile);
sumatra.limitrofes.push(australia, india);
java.limitrofes.push(australia);
borneo.limitrofes.push(australia, malasia);
chile.limitrofes.push(australia, peru, argentina);
india.limitrofes.push(sumatra, malasia, china, iran);
malasia.limitrofes.push(borneo, india, china);
china.limitrofes.push(india, malasia, iran);
iran.limitrofes.push(india, china);
peru.limitrofes.push(chile, argentina);
argentina.limitrofes.push(chile, peru);
paises.push(australia, sumatra, java, borneo, chile, india, malasia, china, iran, peru, argentina);
currentturn.textContent = "Turno: " + turno;
currentphase.textContent = "Fase: " + fase;
while (paises.length > i) {
randomizador = Math.floor(Math.random() * paises.length);
if (i2 === colores.length) {
i2 = 0;
};
if (paises[randomizador].colorfichas === ""){
paises[randomizador].colorfichas = colores[i2];
i++;
i2++;
};
paises[randomizador].id.textContent = paises[randomizador].nombre + " " + paises[randomizador].fichas + " " + paises[randomizador].colorfichas;
};
i = 0;

// Funciones del Juego
function test12(colorturno) {
    i121 = 0;
    i122 = 0;
    if (colorturno === turno) {
        if (fase === "Atacar") {
            fase = "Reagrupar";
            currentphase.textContent = "Fase: " + fase;
        } 
    else if (fase === "Reagrupar"){
        i121 = 0;
            while (colores[i121] != colorturno) {
                i121++;
            };
            i121++;
            if (i121 < colores.length) {
            fase = "Atacar";
            turno = colores[i121];
            currentturn.textContent = "Turno: " + turno;
            currentphase.textContent = "Fase: " + fase;
                }
            else if (i121 === colores.length) {
                fichasnuevasrojo = 0;
                fichasnuevasazul = 0;
                fichasnuevasamarillo = 0;
                fichasnuevasverde = 0;
                i122 = 0;
                while (paises.length > i122) {
                    if (paises[i122].colorfichas === "Rojo") {
                        fichasnuevasrojo++;
                    } else if (paises[i122].colorfichas === "Azul") {
                        fichasnuevasazul++;
                    } else if (paises[i122].colorfichas === "Amarillo") {
                        fichasnuevasamarillo++;
                    } else if (paises[i122].colorfichas === "Verde"){
                        fichasnuevasverde++;
                    }
                    i122++;
                    };
                    if (fichasnuevasrojo % 2 === 1) {
                        fichasnuevasrojo--;
                    };
                    if (fichasnuevasazul % 2 === 1) {
                        fichasnuevasazul--;
                    };
                    if (fichasnuevasamarillo % 2 === 1) {
                        fichasnuevasamarillo--;
                    };
                    if (fichasnuevasverde % 2 === 1) {
                        fichasnuevasverde--;
                    };
                    fichasnuevasrojo = fichasnuevasrojo / 2;
                    fichasnuevasazul = fichasnuevasazul / 2;
                    fichasnuevasamarillo = fichasnuevasamarillo / 2;
                    fichasnuevasverde = fichasnuevasverde / 2;
                    fase = "Incorporar";
                    i121 = 0;
                    i122 = 0;
                    turno = colores[i121];
                    currentturn.textContent = "Turno: " + turno;
                    currentphase.textContent = "Fase: " + fase;
                    console.log(fichasnuevasrojo);
                    console.log(fichasnuevasazul);
                    console.log(fichasnuevasamarillo);
                    console.log(fichasnuevasverde);
                    };
                }
            else if (fase === "Incorporar"){
                while (colores[i121] != colorturno) {
                    i121++;
                };
                i121++;
                if (i121 < colores.length){
                    turno = colores[i121];
                    currentturn.textContent = "Turno: " + turno;
                }
                else if (i121 === colores.length) {
                    fase = "Atacar";
                    i121 = 0;
                    turno = colores[i121];
                    currentturn.textContent = "Turno: " + turno;
                    currentphase.textContent = "Fase: " + fase;
                };
            };
            };
        };
function test14(pais) {
    if (fase === "Atacar") {
        if (turno === pais.colorfichas && pais.fichas > 1) {
            paisseleccionado = pais;
        } else if (turno != pais.colorfichas && paisseleccionado.colorfichas != pais.colorfichas) {
            i141 = 0;
            while (pais.limitrofes.length > i141 && paisseleccionado != pais.limitrofes[i141]) {
                i141++;
            };
            if (pais.limitrofes[i141] === paisseleccionado) {
                paisatacado = pais;
            };
        };
    };
    if (fase === "Reagrupar") {
        if (turno === pais.colorfichas && paisseleccionado.colorfichas === pais.colorfichas) {
            i141 = 0;
            while (pais.limitrofes.length > i141 && paisseleccionado != pais.limitrofes[i141]) {
                i141++;
            };
            if (pais.limitrofes[i141] === paisseleccionado) {
                paisreceptor = pais;
            }
        };
        if (turno === pais.colorfichas) {
            i141 = 0;
            while (pais.limitrofes.length > i141 && paisseleccionado != pais.limitrofes[i141]) {
                i141++;
            };
            if (pais.limitrofes[i141] != paisseleccionado && pais.fichas > 1) {
                paisseleccionado = pais;
            };
        };
        if (paisreceptor === pais) {
            paisseleccionado.fichas--;
            paisreceptor.fichas++;
            paisseleccionado.id.textContent = paisseleccionado.nombre + " " + paisseleccionado.fichas + " " + paisseleccionado.colorfichas;
            paisreceptor.id.textContent = paisreceptor.nombre + " " + paisreceptor.fichas + " " + paisreceptor.colorfichas;
            paisreceptor = 0;
            paisseleccionado = 0;
        };
    };
    if (fase === "Incorporar") {
        if (turno === pais.colorfichas){
            if (turno === "Rojo"){
            if (fichasnuevasrojo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevasrojo--;
            };
            };
            if (turno === "Azul"){
            if (fichasnuevasazul > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevasazul--;
            };
            };
            if (turno === "Amarillo"){
            if (fichasnuevasamarillo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevasamarillo--;
            };
            };
            if (turno === "Verde"){
            if (fichasnuevasverde > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevasverde--;
            };
            };
            paisseleccionado.id.textContent = paisseleccionado.nombre + " " + paisseleccionado.fichas + " " + paisseleccionado.colorfichas;
            paisseleccionado = 0;
            };
            };
            i141 = 0;
            };  
function test17(colour){
    i171 = 0;
    i172 = 0;
    while (paises.length > i171){
        if (paises[i171].colorfichas === colour){
            i172++;
        };
        i171++;
    };
    if (i172 >= 6){
        alert("Ganó el " + colour);
    };
};     
function test16(color) {
    if (color === turno && color === paisseleccionado.colorfichas && paisatacado != 0) {
        dadosatacante = paisseleccionado.fichas - 1;
        dadosdefensor = paisatacado.fichas;
        if (dadosatacante > 3) {
            dadosatacante = 3;
        };
        if (dadosdefensor > 3) {
            dadosdefensor = 3;
        };
        while (dadosatacante > 0) {
            dado = Math.floor(Math.random() * 6) + 1;
            console.log(dado + " dado atacante");
            resultadosatacante.push(dado);
            dadosatacante--;
        };
        while (dadosdefensor > 0) {
            dado = Math.floor(Math.random() * 6) + 1;
            console.log(dado + " dado defensor");
            resultadosdefensor.push(dado);
            dadosdefensor--;
        };
        if (resultadosatacante.length > 1) {
            while (resultadosatacante[0] < resultadosatacante[1] || resultadosatacante[0] < resultadosatacante[2]) {
                dado = resultadosatacante.shift();
                resultadosatacante.push(dado);
            };
            if (resultadosatacante.length === 3) {
                if (resultadosatacante[1] < resultadosatacante[2]) {
                    dado = resultadosatacante.pop();
                    dadoreserva = resultadosatacante.pop();
                    resultadosatacante.push(dado);
                    resultadosatacante.push(dadoreserva);
                };
            };
        };
        if (resultadosdefensor.length > 1) {
            while (resultadosdefensor[0] < resultadosdefensor[1] || resultadosdefensor[0] < resultadosdefensor[2]) {
                dado = resultadosdefensor.shift();
                resultadosdefensor.push(dado);
            };
            if (resultadosdefensor.length === 3) {
                if (resultadosdefensor[1] < resultadosdefensor[2]) {
                    dado = resultadosdefensor.pop();
                    dadoreserva = resultadosdefensor.pop();
                    resultadosdefensor.push(dado);
                    resultadosdefensor.push(dadoreserva);
                };
            };
        };
        i161 = 0;
        while (resultadosatacante.length > i161 && resultadosdefensor.length > i161) {
            if (resultadosdefensor[i161] >= resultadosatacante[i161]) {
                console.log(resultadosatacante[i161] + " atacante vs " + resultadosdefensor[i161] + " defensor");
                console.log(paisseleccionado.nombre + " pierde una ficha");
                paisseleccionado.fichas--;
            } else if (resultadosatacante[i161] > resultadosdefensor[i161]) {
                console.log(resultadosatacante[i161] + " atacante vs " + resultadosdefensor[i161] + " defensor");
                console.log(paisatacado.nombre + " pierde una ficha");
                paisatacado.fichas--;
            };
            i161++;
        };
        if (paisatacado.fichas === 0) {
            paisatacado.fichas++;
            paisseleccionado.fichas--;
            paisatacado.colorfichas = paisseleccionado.colorfichas;
            test17(color);
        };
        paisseleccionado.id.textContent = paisseleccionado.nombre + " " + paisseleccionado.fichas + " " + paisseleccionado.colorfichas;
        paisatacado.id.textContent = paisatacado.nombre + " " + paisatacado.fichas + " " + paisatacado.colorfichas;
        paisseleccionado = 0;
        paisatacado = 0;
        resultadosatacante = [];
        resultadosdefensor = [];
    };
};

// Inicialización del Juego y Event Listeners
skiprojo.addEventListener("click", () => test12("Rojo"));
skipazul.addEventListener("click", () => test12("Azul"));
skipamarillo.addEventListener("click", () => test12("Amarillo"));
skipverde.addEventListener("click", () => test12("Verde"));
australia.id.addEventListener("click", () => test14(australia));
sumatra.id.addEventListener("click", () => test14(sumatra));
java.id.addEventListener("click", () => test14(java));
borneo.id.addEventListener("click", () => test14(borneo));
chile.id.addEventListener("click", () => test14(chile));
india.id.addEventListener("click", () => test14(india));
malasia.id.addEventListener("click", () => test14(malasia));
china.id.addEventListener("click", () => test14(china));
iran.id.addEventListener("click", () => test14(iran));
peru.id.addEventListener("click", () => test14(peru));
argentina.id.addEventListener("click", () => test14(argentina));
atacarrojo.addEventListener("click", () => test16("Rojo"));
atacarazul.addEventListener("click", () => test16("Azul"));
atacaramarillo.addEventListener("click", () => test16("Amarillo"));
atacarverde.addEventListener("click", () => test16("Verde"));
