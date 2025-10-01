// Declaración de Variables Globales
let turno = "Rojo";
let colores = [];
let listacolores = ["Rojo", "Azul", "Amarillo", "Verde", "Magenta", "Negro"];
let fase = "Inicio Ronda 1";
let fases = ["Inicio Ronda 1","Inicio Ronda 2", "Atacar", "Reagrupar", "Incorporar"];
let currentphase = document.getElementById("currentphase");
let currentturn = document.getElementById("currentturn");
let atacarrojo = document.getElementById("atacarrojo");
let atacarazul = document.getElementById("atacarazul");
let atacaramarillo = document.getElementById("atacaramarillo");
let atacarverde = document.getElementById("atacarverde");
let atacarmagenta = document.getElementById("atacarmagenta");
let atacarnegro = document.getElementById("atacarnegro");
let skipazul = document.getElementById("pasaazul");
let skiprojo = document.getElementById("pasarojo");
let skipamarillo = document.getElementById("pasaamarillo");
let skipverde = document.getElementById("pasaverde");
let skipmagenta = document.getElementById("pasamagenta");
let skipnegro = document.getElementById("pasanegro");
let botonGuardar = document.getElementById("guardar");
let menuPausa = document.getElementById("menuPausa");
let botonPausa = document.getElementById("pausaid");
let reanudar = document.getElementById("reanudar");
let actRapidaIns = document.getElementById("actRapidaIns");
let i = 0;
let i2 = 0;
let dado = 0;
let paisseleccionado = 0;
let paisatacado = 0;
let paisreceptor = 0;
let paisconquistado = 0;
let paisconquistador = 0;
let dadosatacante = 0;
let dadosdefensor = 0;
let resultadosatacante = [];
let resultadosdefensor = [];
let dadoreserva = 0;
let i121 = 0;
let i122 = 0;
let i123 = 0;
let i124 = 0;
let i125 = 0;
let i126 = 0;
let i141 = 0;
let i142 = 0;
let i161 = 0;
let i162 = 0;
let i171 = 0;
let i172 = 0;
let i173 = 0;
let i174 = 0;
let iactins1 = 0;
let iactins2 = 0;
let iactins3 = [];
let texto = "";
let stop = false;
let ioceania = 0;
let iafrica = 0;
let isudamerica = 0;
let iasia = 0;
let ieuropa = 0;
let inorteamerica = 0;
let icarg = 0;
let reserva = "";
let fichasnuevas = {
    rojo: 5,
    azul: 5,
    amarillo: 5,
    verde: 5,
    magenta: 5,
    negro: 5,
};

//menu pausa
function abrirMenuPausa() {
    menuPausa.showModal();
}

//brillo
document.addEventListener("DOMContentLoaded", () => {
  let valorBrillo = 1;
  valorBrillo = localStorage.getItem("brillo")
  valorBrillo = parseFloat(valorBrillo);
  document.body.style.filter = "brightness(" + valorBrillo + ")";
});

//checkear cargar partida
let cargarPartidaInicio = true
cargarPartidaInicio = localStorage.getItem("cargarPartida");
if (cargarPartidaInicio === "true") {
    cargarPartida();
}
console.log("cargar partida desde inicio:  " + cargarPartidaInicio);

//cantidad jugadores
let njugadores = 2;
localStorage.getItem("njugadores");
njugadores = parseInt(njugadores);
let nobjetivos = "true"
nobjetivos = localStorage.getItem("nobjetivos");

//declaracion (dialogs) 
let mostrarrojo = document.getElementById("mostrarrojo");
let cerrarrojo = document.getElementById("cerrarrojo");
let objetivorojo = document.getElementById("objetivorojo");
let contenidorojo = document.getElementById("contenidorojo");
let mostrarazul = document.getElementById("mostrarazul");
let cerrarazul = document.getElementById("cerrarazul");
let objetivoazul = document.getElementById("objetivoazul");
let contenidoazul = document.getElementById("contenidoazul");
let mostraramarillo = document.getElementById("mostraramarillo");
let cerramarillo = document.getElementById("cerraramarillo");
let objetivoamarillo = document.getElementById("objetivoamarillo");
let contenidoamarillo = document.getElementById("contenidoamarillo");
let mostrarverde = document.getElementById("mostrarverde");
let cerrarverde = document.getElementById("cerrarverde");
let objetivoverde = document.getElementById("objetivoverde");
let contenidoverde = document.getElementById("contenidoverde");
let mostrarmagenta = document.getElementById("mostrarmagenta");
let cerrarmagenta = document.getElementById("cerrarmagenta");
let objetivomagenta = document.getElementById("objetivomagenta");
let contenidomagenta = document.getElementById("contenidomagenta");
let mostrarnegro = document.getElementById("mostrarnegro");
let cerrarnegro = document.getElementById("cerrarnegro");
let objetivonegro = document.getElementById("objetivonegro");
let contenidonegro = document.getElementById("contenidonegro");
let resultadodados = document.getElementById("resultadodados");
let resolucion = document.getElementById("resolucion");
let cerrardados = document.getElementById("cerrardados");
let instrucciones = document.getElementById("instrucciones");
let fin = document.getElementById("fin");
let mensajefinal = document.getElementById("mensajefinal");
let pasarfichas1 = document.getElementById("pasarfichas1");
let selectpasarfichas1 = document.getElementById("selectpasarfichas1");
let cerrarpasarfichas1 = document.getElementById("cerrarpasarfichas1");
let pasarfichas2 = document.getElementById("pasarfichas2");
let selectpasarfichas2 = document.getElementById("selectpasarfichas2");
let cerrarpasarfichas2 = document.getElementById("cerrarpasarfichas2");

//Declaracion de instrucciones
let inicioRonda1 = "Tenes 5 fichas para incorporar, clickea un territorio propio para poner 1 ficha";
let inicioRonda2 = "Ya sabes como es, ahora tenes 3 fichas a incorporar";
let incorporarInstruccion = "Clickea el territorio donde quieras incorporar fichas";
let atacarInstruccion = "Selecciona un territorio propio y luego uno enemigo limitrofe para atacar";
let reagruparInstruccion = "Selecciona dos territorios propios limitrofes para reagrupar fichas";


//Declaración de Objetivos Secretos
let obj1 = {
    oceania: 0,
    africa: 6,
    sudamerica: 0,
    asia: 0,
    europa: 4,
    norteamerica: 5,
    color: "",
    string: "Ocupar África, 5 países de América del Norte y 4 países de Europa."
};
let obj2 = {
    oceania: 0,
    africa: 3,
    sudamerica: 6,
    asia: 0,
    europa: 7,
    norteamerica: 0,
    color: "",
    string: "Ocupar América del Sur, 7 países de Europa y 3 países de África."
};
let obj3 = {
    oceania: 0,
    africa: 0,
    sudamerica: 2,
    asia: 15,
    europa: 0,
    norteamerica: 0,
    color: "",
    string: "Ocupar Asia y 2 países de América del Sur"
};
let obj4 = {
    oceania: 0,
    africa: 0,
    sudamerica: 2,
    asia: 4,
    europa: 9,
    norteamerica: 0,
    color: "",
    string: "Ocupar Europa, 4 países de Asia y 2 países de América del Sur.",
};
let obj5 = {
    oceania: 2,
    africa: 0,
    sudamerica: 0,
    asia: 4,
    europa: 0,
    norteamerica: 10,
    color: "",
    string: "Ocupar América del Norte, 2 países de Oceanía y 4 de Asia."
};
let obj6 = {
    oceania: 2,
    africa: 2,
    sudamerica: 2,
    asia: 3,
    europa: 3,
    norteamerica: 4,
    color: "",
    string: "Ocupar 2 países de Oceanía, 2 países de África, 2 países de América del Sur, 3 países de Europa, 4 de América del Norte y 3 de Asia."
};
let obj7 = {
    oceania: 4,
    africa: 0,
    sudamerica: 0,
    asia: 0,
    europa: 2,
    norteamerica: 10,
    color: "",
    string: "Ocupar Oceanía, América del Norte y 2 países de Europa."
};
let obj8 = {
    oceania: 0,
    africa: 6,
    sudamerica: 6,
    asia: 4,
    europa: 0,
    norteamerica: 0,
    color: "",
    string: "Ocupar América del Sur, África y 4 países de Asia."
};
let obj9 = {
    oceania: 4,
    africa: 6,
    sudamerica: 0,
    asia: 0,
    europa: 0,
    norteamerica: 5,
    color: "",
    string: "Ocupar Oceanía, África y 5 países de América del Norte."
};
let objetivos = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];

connect2Server(3015);
cargarPartida();

//Declaración de Continentes
let oceania = [];
let africa = [];
let sudamerica = [];
let asia = [];
let europa = [];
let norteamerica = [];
let fnoceania = {
    fichas: 0,
    color: "",
    continente: oceania,
    string: "Oceanía"
};
let fnafrica = {
    fichas: 0,
    color: "",
    continente: africa,
    string: "África"
};
let fnsudamerica = {
    fichas: 0,
    color: "",
    continente: sudamerica,
    string: "Sudamérica"
};
let fnasia = {
    fichas: 0,
    color: "",
    continente: asia,
    string: "Asia"
};
let fneuropa = {
    fichas: 0,
    color: "",
    continente: europa,
    string: "Europa"
};
let fnnorteamerica = {
    fichas: 0,
    color: "",
    continente: norteamerica,
    string: "Norteamérica"
};
let fncontinentes = [fnoceania, fnafrica, fnsudamerica, fnasia, fneuropa, fnnorteamerica];

//Declaración de Países
let australia = {
    nombre: "Australia",
    id: document.getElementById("australiaid"),
    continente: oceania,
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let sumatra = {
    nombre: "Sumatra",
    id: document.getElementById("sumatraid"),
    continente: oceania,
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let java = {
    nombre: "Java",
    continente: oceania,
    id: document.getElementById("javaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let borneo = {
    nombre: "Borneo",
    continente: oceania,
    id: document.getElementById("borneoid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let india = {
    nombre: "India",
    continente: asia,
    id: document.getElementById("indiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let malasia = {
    nombre: "Malasia",
    continente: asia,
    id: document.getElementById("malasiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let china = {
    nombre: "China",
    continente: asia,
    id: document.getElementById("chinaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let iran = {
    nombre: "Irán",
    continente: asia,
    id: document.getElementById("iranid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let japon = {
    nombre: "Japón",
    continente: asia,
    id: document.getElementById("japonid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let gobi = {
    nombre: "Gobi",
    continente: asia,
    id: document.getElementById("gobiid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let mongolia = {
    nombre: "Mongolia",
    continente: asia,
    id: document.getElementById("mongoliaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let kamchatka = {
    nombre: "Kamchatka",
    continente: asia,
    id: document.getElementById("kamchatkaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let turquia = {
    nombre: "Turquía",
    continente: asia,
    id: document.getElementById("turquiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let israel = {
    nombre: "Israel",
    continente: asia,
    id: document.getElementById("israelid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let arabia = {
    nombre:"Arabia",
    continente: asia,
    id: document.getElementById("arabiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let siberia = {
    nombre:"Siberia",
    continente: asia,
    id: document.getElementById("siberiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let taimir = {
    nombre:"Taimir",
    continente: asia,
    id: document.getElementById("taimirid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let tartaria = {
    nombre:"Tartaria",
    continente: asia,
    id: document.getElementById("tartariaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let aral = {
    nombre:"Aral",
    continente: asia,
    id: document.getElementById("aralid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let rusia = {
    nombre:"Rusia",
    continente: europa,
    id: document.getElementById("rusiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let suecia = {
    nombre:"Suecia",
    continente: europa,
    id: document.getElementById("sueciaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let polonia = {
    nombre:"Polonia",
    continente: europa,
    id: document.getElementById("poloniaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let alemania = {
    nombre:"Alemania",
    continente: europa,
    id: document.getElementById("alemaniaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let italia = {
    nombre:"Italia",
    continente: europa,
    id: document.getElementById("italiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let francia = {
    nombre:"Francia",
    continente: europa,
    id: document.getElementById("franciaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let españa = {
    nombre:"España",
    continente: europa,
    id: document.getElementById("españaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let granbretaña = {
    nombre:"Gran Bretaña",
    continente: europa,
    id: document.getElementById("granbretañaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let islandia = {
    nombre:"Islandia",
    continente: europa,
    id: document.getElementById("islandiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let alaska = {
    nombre:"Alaska",
    continente: norteamerica,
    id: document.getElementById("alaskaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let canada = {
    nombre: "Canadá",
    continente: norteamerica,
    id: document.getElementById("canadaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let yukon = {
    nombre:"Yukon",
    continente: norteamerica,
    id: document.getElementById("yukonid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let oregon = {
    nombre:"Oregon",
    continente: norteamerica,
    id: document.getElementById("oregonid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let nuevayork = {
    nombre:"Nueva York",
    continente: norteamerica,
    id: document.getElementById("nuevayorkid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let terranova = {
    nombre:"Terranova",
    continente: norteamerica,
    id: document.getElementById("terranovaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let labrador = {
    nombre:"Labrador",
    continente: norteamerica,
    id: document.getElementById("labradorid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let groenlandia = {
    nombre:"Groenlandia",
    continente: norteamerica,
    id: document.getElementById("groenlandiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let california = {
    nombre:"California",
    continente: norteamerica,
    id: document.getElementById("californiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let mexico = {
    nombre:"México",
    continente: norteamerica,
    id: document.getElementById("mexicoid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let chile = {
    nombre: "Chile",
    continente: sudamerica,
    id: document.getElementById("chileid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let peru = {
    nombre: "Perú",
    continente: sudamerica,
    id: document.getElementById("peruid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let argentina = {
    nombre: "Argentina",
    continente: sudamerica,
    id: document.getElementById("argentinaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let uruguay = {
    nombre: "Uruguay",
    continente: sudamerica,
    id: document.getElementById("uruguayid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let brasil = {
    nombre: "Brasil",
    continente: sudamerica,
    id: document.getElementById("brasilid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let colombia = {
    nombre: "Colombia",
    continente: sudamerica,
    id: document.getElementById("colombiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let sahara = {
    nombre: "Sahara",
    continente: africa,
    id: document.getElementById("saharaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let egipto = {
    nombre: "Egipto",
    continente: africa,
    id: document.getElementById("egiptoid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let etiopia = {
    nombre: "Etiopía",
    continente: africa,
    id: document.getElementById("etiopiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let zaire = {
    nombre: "Zaire",
    continente: africa,
    id: document.getElementById("zaireid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let sudafrica = {
    nombre: "Sudáfrica",
    continente: africa,
    id: document.getElementById("sudafricaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let madagascar = {
    nombre: "Madagascar",
    continente: africa,
    id: document.getElementById("madagascarid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};

//Push de limitrofes
australia.limitrofes.push(sumatra, java, borneo, chile);
sumatra.limitrofes.push(australia, india);
java.limitrofes.push(australia);
borneo.limitrofes.push(australia, malasia);
india.limitrofes.push(sumatra, malasia, china, iran);
malasia.limitrofes.push(borneo, india, china);
china.limitrofes.push(india, malasia, iran, japon, gobi, mongolia, kamchatka, siberia);
iran.limitrofes.push(india, china, gobi, mongolia, turquia, aral, rusia);
japon.limitrofes.push(china, kamchatka);
gobi.limitrofes.push(china, iran, mongolia);
mongolia.limitrofes.push(china, iran, gobi, siberia, aral);
kamchatka.limitrofes.push(china, japon, siberia, alaska);
turquia.limitrofes.push(iran, israel, arabia, rusia, polonia, egipto),
israel.limitrofes.push(turquia, arabia, egipto),
arabia.limitrofes.push(turquia, israel);
siberia.limitrofes.push(china, mongolia, kamchatka, taimir, tartaria, aral);
taimir.limitrofes.push(siberia, tartaria);
tartaria.limitrofes.push(siberia, taimir, aral);
aral.limitrofes.push(iran, mongolia, siberia, tartaria, rusia);
rusia.limitrofes.push(iran, turquia, aral, suecia, polonia);
suecia.limitrofes.push(rusia, islandia);
alemania.limitrofes.push(polonia, italia, francia, granbretaña);
polonia.limitrofes.push(turquia, rusia, egipto, alemania);
italia.limitrofes.push(alemania, francia);
francia.limitrofes.push(alemania, italia, españa);
españa.limitrofes.push(sahara, francia, granbretaña);
granbretaña.limitrofes.push(alemania, españa, islandia);
islandia.limitrofes.push(suecia, granbretaña, groenlandia);
alaska.limitrofes.push(kamchatka, oregon, yukon);
canada.limitrofes.push(oregon, nuevayork, yukon, terranova);
yukon.limitrofes.push(alaska, oregon, canada);
oregon.limitrofes.push(alaska, nuevayork, california, canada, yukon);
nuevayork.limitrofes.push(oregon, california, canada, terranova, groenlandia);
terranova.limitrofes.push(nuevayork, canada, labrador);
labrador.limitrofes.push(terranova, groenlandia);
groenlandia.limitrofes.push(islandia, nuevayork, labrador);
california.limitrofes.push(mexico, oregon, nuevayork);
mexico.limitrofes.push(colombia, california);
chile.limitrofes.push(australia, peru, argentina);
peru.limitrofes.push(chile, argentina, brasil, colombia);
argentina.limitrofes.push(chile, peru, uruguay, brasil);
uruguay.limitrofes.push(argentina, brasil);
brasil.limitrofes.push(peru, argentina, uruguay, colombia, sahara);
colombia.limitrofes.push(mexico, peru, brasil);
sahara.limitrofes.push(brasil, egipto, españa, etiopia, zaire);
egipto.limitrofes.push(turquia, israel, polonia, sahara, etiopia, madagascar);
etiopia.limitrofes.push(egipto, sahara, zaire, sudafrica);
zaire.limitrofes.push(sahara, etiopia, sudafrica, madagascar);
sudafrica.limitrofes.push(etiopia, zaire);
madagascar.limitrofes.push(egipto, zaire);

//Declaración lista de países
let paises = [australia, sumatra, java, borneo, india, malasia, china, iran, chile, peru, argentina, uruguay, brasil, colombia, japon, gobi, mongolia, kamchatka, turquia, israel, arabia, siberia, taimir, tartaria, aral, rusia, suecia, alemania, polonia, sahara, egipto, etiopia, alaska, mexico, italia, california, francia, oregon, españa, granbretaña, islandia, zaire, sudafrica, madagascar, nuevayork, canada, yukon, terranova, labrador, groenlandia];
let estadoJuego = paises;

//Push de países a los continentes
oceania.push(australia, sumatra, java, borneo);
africa.push(sahara, egipto, etiopia, zaire, sudafrica, madagascar);
sudamerica.push(chile, peru, argentina, uruguay, brasil, colombia);
asia.push(india, malasia, china, iran, japon, gobi, mongolia, kamchatka, turquia, israel, arabia, siberia, taimir, tartaria, aral);
europa.push(rusia, suecia, polonia, alemania, italia, francia, españa, granbretaña, islandia);
norteamerica.push(alaska, oregon, california, mexico, nuevayork, canada, yukon, terranova, labrador, groenlandia);

//Declaracion de continentes
let continentes = [norteamerica, sudamerica, europa, asia, oceania, africa]

let taustralia = {
    pais: australia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tsumatra = {
    pais: sumatra,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tjava = {
    pais: java,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tborneo = {
    pais: borneo,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tindia = {
    pais: india,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tmalasia = {
    pais: malasia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tchina = {
    pais: china,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tiran = {
    pais: iran,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tjapon = {
    pais: japon,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tgobi = {
    pais: gobi,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tmongolia = {
    pais: mongolia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tkamchatka = {
    pais: kamchatka,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tturquia = {
    pais: turquia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tisrael = {
    pais: israel,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tarabia = {
    pais: arabia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tsiberia = {
    pais: siberia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let ttaimir = {
    pais: taimir,
    fichas: 3,
    color: "",
    simbolo: "",
};
let ttartaria = {
    pais: tartaria,
    fichas: 3,
    color: "",
    simbolo: "",
};
let taral = {
    pais: aral,
    fichas: 3,
    color: "",
    simbolo: "",
};
let trusia = {
    pais: rusia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tsuecia = {
    pais: suecia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tpolonia = {
    pais: polonia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let talemania = {
    pais: alemania,
    fichas: 3,
    color: "",
    simbolo: "",
};
let titalia = {
    pais: italia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tfrancia = {
    pais: francia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tespaña = {
    pais: españa,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tgranbretaña = {
    pais: granbretaña,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tislandia = {
    pais: islandia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let talaska = {
    pais: alaska,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tcanada = {
    pais: canada,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tyukon = {
    pais: yukon,
    fichas: 3,
    color: "",
    simbolo: "",
};
let toregon = {
    pais: oregon,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tnuevayork = {
    pais: nuevayork,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tterranova = {
    pais: terranova,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tlabrador = {
    pais: labrador,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tgroenlandia = {
    pais: groenlandia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tcalifornia = {
    pais: california,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tmexico = {
    pais: mexico,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tchile = {
    pais: chile,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tperu = {
    pais: peru,
    fichas: 3,
    color: "",
    simbolo: "",
};
let targentina = {
    pais: argentina,
    fichas: 3,
    color: "",
    simbolo: "",
};
let turuguay = {
    pais: uruguay,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tbrasil = {
    pais: brasil,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tcolombia = {
    pais: colombia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tsahara = {
    pais: sahara,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tegipto = {
    pais: egipto,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tetiopia = {
    pais: etiopia,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tzaire = {
    pais: zaire,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tsudafrica = {
    pais: sudafrica,
    fichas: 3,
    color: "",
    simbolo: "",
};
let tmadagascar = {
    pais: madagascar,
    fichas: 3,
    color: "",
    simbolo: "",
};

//Numero de jugadores
i = 0;
while(njugadores > i){
colores.push(listacolores[i]);
i++;
};
i = 0;

//Turno y Fase iniciales
currentturn.textContent = "Turno: " + turno;
currentphase.textContent = "Fase: " + fase;

//Asignar países
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
i2 = 0;

//Asignar objetivos
if(nobjetivos === "true"){
while (colores.length > i) {
    randomizador = Math.floor(Math.random() * objetivos.length);
    if (objetivos[randomizador].color === ""){
        objetivos[randomizador].color = colores[i];
        i++;
        console.log(objetivos[randomizador]);
    };
};
};
i = 0;
while(objetivos.length > i && objetivos[i].color != "Rojo"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Rojo"){
contenidorojo.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Azul"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Azul"){
    contenidoazul.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Amarillo"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Amarillo"){
    contenidoamarillo.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Verde"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Verde"){
    contenidoverde.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Magenta"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Magenta"){
    contenidomagenta.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Negro"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Negro"){
    contenidonegro.textContent = objetivos[i].string;}
i = 0;

//Instructor
function actualizarInstrucciones(){
    let fichasActuales = 0;

if (turno === "Rojo") {
iactins1 = 0;
iactins2 = 0;
iactins3 = [];
fichasActuales = fichasnuevas.rojo;
 } else if (turno === "Azul") {
    fichasActuales = fichasnuevas.azul;
} else if (turno === "Amarillo") {
fichasActuales = fichasnuevas.amarillo;
} else if (turno === "Verde") {
fichasActuales = fichasnuevas.verde;
} else if (turno === "Magenta") {
fichasActuales = fichasnuevas.magenta;
} else if (turno === "Negro") {
fichasActuales = fichasnuevas.negro;
};
while(fncontinentes.length > iactins1){
    if(fncontinentes[iactins1].color === turno){
    iactins3.push(iactins1);
    };
iactins1++;
};
if (iactins3.length > 0){
    while(iactins3.length > iactins2){
        texto = texto + " y " + fncontinentes[iactins3[iactins2]].fichas + " fichas de " + fncontinentes[iactins3[iactins2]].string;
        iactins2++;
    };
};
if (fase === "Incorporar") {
if (texto === ""){
 instrucciones.textContent = "Te quedan " + fichasActuales + " fichas para incorporar. Clickea el territorio donde quieras ubicarlas.";
} else {
    instrucciones.textContent = "Te quedan " + fichasActuales + " fichas " + texto + " para incorporar. Clickea el territorio donde quieras ubicarlas.";
}
} else if (fase === "Atacar") {
 instrucciones.textContent = atacarInstruccion
} else if (fase === "Reagrupar") {
 instrucciones.textContent = reagruparInstruccion;
} else if (fase === "Inicio Ronda 1"){
 instrucciones.textContent = "Tenés " + fichasActuales + " fichas para incorporar, clickea el territorio para poner 1 ficha";
} else if (fase === "Inicio Ronda 2"){
 instrucciones.textContent = "Ya sabes cómo es, ahora tenés " + fichasActuales + " fichas a incorporar";
};
iactins1 = 0;
iactins2 = 0;
iactins3 = [];
texto = ""
};
actualizarInstrucciones();

function cambiarInstructor() {
    let ninstructor = localStorage.getItem("ninstructor");
    let instructorActivo = (ninstructor === "true" || ninstructor === null);
    
    if (instructorActivo) {
        localStorage.setItem("ninstructor", "false");
        instrucciones.style.display = "none";
        actRapidaIns.textContent = "Instructor desactivado";
    } else {
        localStorage.setItem("ninstructor", "true");
        instrucciones.style.display = "block";
        actRapidaIns.textContent = "Instructor activado";
    };
};

let ninstructor = localStorage.getItem("ninstructor");
console.log("instructor: " + ninstructor);
actRapidaIns.textContent = "Instructor activado";
if (ninstructor == "true") {
    inicioRonda1 = "";
    inicioRonda2 = "";
    incorporarInstruccion = ""; 
    atacarInstruccion = "Selecciona un territorio propio y luego uno enemigo limitrofe para atacar";
    reagruparInstruccion = "Selecciona dos territorios propios limitrofes para reagrupar fichas";
    instrucciones.style.display = "block"; 
} else if (ninstructor == "false") {
    actRapidaIns.textContent = "Instructor desactivado"
    instrucciones.style.display = "none"; 
};

//cambio de Turno y Fase
function test12(colorturno) {
    i121 = 0;
    i122 = 0;
    i123 = 0;
    i124 = 0;
    i125 = 0;
    i126 = 0;
    if (colorturno === turno) {
        if (fase === "Atacar") {
            fase = "Reagrupar";
            currentphase.textContent = "Fase: " + fase;
            
        } 
    else if(fase === "Inicio Ronda 1"){
        i121 = 0;
        while (colores[i121] != colorturno){
            i121++;
        };
    if (colores[i121] === "Rojo" && fichasnuevas.rojo === 0){
                i121++;
                } else if (colores[i121] === "Azul" && fichasnuevas.azul === 0) {
                i121++;
                } else if (colores[i121] === "Amarillo" && fichasnuevas.amarillo === 0) {
                i121++;
                } else if (colores[i121] === "Verde" && fichasnuevas.verde === 0) {
                    i121++;
                } else if (colores[i121] === "Magenta" && fichasnuevas.magenta === 0) {
                i121++;
                } else if (colores[i121] === "Negro" && fichasnuevas.negro === 0) {
                i121++;
                };
        if(i121 < colores.length){
            turno = colores[i121];
            currentturn.textContent = "Turno: " + turno;
        } 
    else if (i121 === colores.length){
        i121 = 0;
        fase = "Inicio Ronda 2";
        turno = colores[i121];
        currentturn.textContent = "Turno: " + turno;
        currentphase.textContent = "Fase: " + fase;
        fichasnuevas.rojo = 3;
        fichasnuevas.azul = 3;
        fichasnuevas.amarillo = 3;
        fichasnuevas.verde = 3;
        fichasnuevas.magenta = 3;
        fichasnuevas.negro = 3;
    };
    }
    else if(fase === "Inicio Ronda 2"){
    i121 = 0;
       while (colores[i121] != colorturno){
            i121++;
        };
                if (colores[i121] === "Rojo" && fichasnuevas.rojo === 0){
                i121++;
                } else if (colores[i121] === "Azul" && fichasnuevas.azul === 0) {
                i121++;
                } else if (colores[i121] === "Amarillo" && fichasnuevas.amarillo === 0) {
                i121++;
                } else if (colores[i121] === "Verde" && fichasnuevas.verde === 0) {
                    i121++;
                } else if (colores[i121] === "Magenta" && fichasnuevas.magenta === 0) {
                i121++;
                } else if (colores[i121] === "Negro" && fichasnuevas.negro === 0) {
                i121++;
                };
        if(i121 < colores.length){
            turno = colores[i121];
            currentturn.textContent = "Turno: " + turno;
        }
        else if (i121 === colores.length){
        i121 = 0;
        fase = "Atacar";
        turno = colores[i121];
        currentturn.textContent = "Turno: " + turno;
        currentphase.textContent = "Fase: " + fase;
    };
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
                reserva = "";
                reserva = colores.shift();
                colores.push(reserva);
                fichasnuevas.rojo = 0;
                fichasnuevas.azul = 0;
                fichasnuevas.amarillo = 0;
                fichasnuevas.verde = 0;
                fichasnuevas.magenta = 0;
                fichasnuevas.negro = 0;
                fnoceania.color = "";
                fnafrica.color = "";
                fnsudamerica.color = "";
                fnasia.color = "";
                fneuropa.color = "";
                fnnorteamerica.color = "";
                i122 = 0;
                i123 = 0;
                while (paises.length > i122) {
                    if (paises[i122].colorfichas === "Rojo") {
                        fichasnuevas.rojo++;
                    } else if (paises[i122].colorfichas === "Azul") {
                        fichasnuevas.azul++;
                    } else if (paises[i122].colorfichas === "Amarillo") {
                        fichasnuevas.amarillo++;
                    } else if (paises[i122].colorfichas === "Verde"){
                        fichasnuevas.verde++;
                    } else if (paises[i122].colorfichas === "Magenta"){
                        fichasnuevas.magenta++;
                    } else if (paises[i122].colorfichas === "Negro"){
                        fichasnuevas.negro++;
                    }
                    i122++;
                    };
                    i123 = 0;
                    if (fichasnuevas.rojo === 0){
                    while(colores.length > i123 && colores[i123] != "Rojo"){
                    i123++;
                    };
                    if(colores[i123] === "Rojo"){
                    colores.splice(i123, 1);
                    };
                    delete fichasnuevas.rojo;
                    };
                    i123 = 0;
                    if (fichasnuevas.azul === 0){
                    while(colores.length > i123 && colores[i123] != "Azul"){
                    i123++;
                    };
                    if(colores[i123] === "Azul"){
                    colores.splice(i123, 1);
                    }
                    delete fichasnuevas.azul;
                    };
                    i123 = 0;
                    if (fichasnuevas.amarillo === 0){
                    while(colores.length > i123 && colores[i123] != "Amarillo"){
                    i123++;
                    };
                    if(colores[i123] === "Amarillo"){
                    colores.splice(i123, 1);
                    };
                    delete fichasnuevas.amarillo;
                    };
                    i123 = 0;
                    if (fichasnuevas.verde === 0){
                    while(colores.length > i123 && colores[i123] != "Verde"){
                    i123++;
                    };
                    if(colores[i123] === "Verde"){
                    colores.splice(i123, 1);
                    };
                    delete fichasnuevas.verde;
                    };
                    i123 = 0;
                    if (fichasnuevas.magenta === 0){
                    while(colores.length > i123 && colores[i123] != "Magenta"){
                    i123++;
                    };
                    if(colores[i123] === "Magenta"){
                    colores.splice(i123, 1);
                    };
                    delete fichasnuevas.magenta;
                    };
                    i123 = 0;
                    if (fichasnuevas.negro === 0){
                    while(colores.length > i123 && colores[i123] != "Negro"){
                    i123++;
                    };
                    if(colores[i123] === "Negro"){
                    colores.splice(i123, 1);
                    };
                    delete fichasnuevas.negro;
                    };
                    i123 = 0;
                    if (fichasnuevas.rojo % 2 === 1) {
                        fichasnuevas.rojo--;
                    };
                    if (fichasnuevas.azul % 2 === 1) {
                        fichasnuevas.azul--;
                    };
                    if (fichasnuevas.amarillo % 2 === 1) {
                        fichasnuevas.amarillo--;
                    };
                    if (fichasnuevas.verde % 2 === 1) {
                        fichasnuevas.verde--;
                    };
                    if (fichasnuevas.magenta % 2 === 1) {
                        fichasnuevas.magenta--;
                    };
                    if (fichasnuevas.negro % 2 === 1) {
                        fichasnuevas.negro--;
                    };
                    fichasnuevas.rojo = fichasnuevas.rojo / 2;
                    fichasnuevas.azul = fichasnuevas.azul / 2;
                    fichasnuevas.amarillo = fichasnuevas.amarillo / 2;
                    fichasnuevas.verde = fichasnuevas.verde / 2;
                    fichasnuevas.magenta = fichasnuevas.magenta / 2;
                    fichasnuevas.negro = fichasnuevas.negro / 2;
                    if (fichasnuevas.rojo < 3) {
                        fichasnuevas.rojo = 3;
                    };
                    if (fichasnuevas.azul < 3) {
                        fichasnuevas.azul = 3;
                    };
                    if (fichasnuevas.amarillo < 3) {
                        fichasnuevas.amarillo = 3;
                    };
                    if (fichasnuevas.verde < 3) {
                        fichasnuevas.verde = 3;
                    };
                    if (fichasnuevas.magenta < 3) {
                        fichasnuevas.magenta = 3;
                    };
                    if (fichasnuevas.negro < 3) {
                        fichasnuevas.negro = 3;
                    };
                    while (colores.length > i124){
                        while (oceania.length > i125){
                            if(oceania[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === oceania.length){
                            fnoceania.fichas = 2;
                            fnoceania.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (africa.length > i125){
                            if(africa[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === africa.length){
                            fnafrica.fichas = 3;
                            fnafrica.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (sudamerica.length > i125){
                            if(sudamerica[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === sudamerica.length){
                            fnsudamerica.fichas = 3;
                            fnsudamerica.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (asia.length > i125){
                            if(asia[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === asia.length){
                            fnasia.fichas = 7;
                            fnasia.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (europa.length > i125){
                            if(europa[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === europa.length){
                            fneuropa.fichas = 5;
                            fneuropa.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (norteamerica.length > i125){
                            if(norteamerica[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === norteamerica.length){
                            fnnorteamerica.fichas = 5;
                            fnnorteamerica.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        i124++;
                    };
                    fase = "Incorporar";
                    i121 = 0;
                    i122 = 0;
                    turno = colores[i121];
                    currentturn.textContent = "Turno: " + turno;
                    currentphase.textContent = "Fase: " + fase;
                    console.log(fichasnuevas.rojo);
                    console.log(fichasnuevas.azul);
                    console.log(fichasnuevas.amarillo);
                    console.log(fichasnuevas.verde);
                    console.log(fichasnuevas.magenta);
                    console.log(fichasnuevas.negro);
                    console.log(fncontinentes);
                    };
                }
            else if (fase === "Incorporar"){
                stop = false;
                i121 = 0;
                i122 = 0;
                while (colores[i121] != colorturno) {
                i121++;
                };
                while(fncontinentes.length > i122 && stop === false){
                    if(fncontinentes[i122].color === colores[i121] && fncontinentes[i122].fichas > 0){
                        stop = true;
                    };
                i122++;
                };
                if(stop === false){
                if (colores[i121] === "Rojo" && fichasnuevas.rojo === 0){
                i121++;
                } else if (colores[i121] === "Azul" && fichasnuevas.azul === 0) {
                i121++;
                } else if (colores[i121] === "Amarillo" && fichasnuevas.amarillo === 0) {
                i121++;
                } else if (colores[i121] === "Verde" && fichasnuevas.verde === 0) {
                    i121++;
                } else if (colores[i121] === "Magenta" && fichasnuevas.magenta === 0) {
                i121++;
                } else if (colores[i121] === "Negro" && fichasnuevas.negro === 0) {
                i121++;
                };
            };
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
                stop = false;
                i121 = 0;
                i122 = 0;
            };
            actualizarInstrucciones();
            guardarPartida();
            };
        };

//seleccionar pais
function test14(pais) {
    i141 = 0;
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
    i141 = 0;
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
    i141 = 0;
    if (fase === "Inicio Ronda 1" || fase === "Inicio Ronda 2") {
        if (turno === pais.colorfichas){
            if (turno === "Rojo"){
            if (fichasnuevas.rojo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.rojo--;
            };
            };
            if (turno === "Azul"){
            if (fichasnuevas.azul > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.azul--;
            };
            };
            if (turno === "Amarillo"){
            if (fichasnuevas.amarillo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.amarillo--;
            };
            };
            if (turno === "Verde"){
            if (fichasnuevas.verde > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.verde--;
            };
            };
            if (turno === "Magenta"){
            if (fichasnuevas.magenta > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.magenta--;
            };
            };
            if (turno === "Negro"){
            if (fichasnuevas.negro > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.negro--;
            };
            };
            if(paisseleccionado != 0){
            paisseleccionado.id.textContent = paisseleccionado.nombre + " " + paisseleccionado.fichas + " " + paisseleccionado.colorfichas;
            paisseleccionado = 0;
            };
            };
            };
        i141 = 0;
        if (fase === "Incorporar") {
        if (turno === pais.colorfichas){
        while(fncontinentes[i141].continente != pais.continente){
        i141++;
        };
            if (turno === "Rojo"){
            if(fncontinentes[i141].color === "Rojo" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.rojo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.rojo--;
            };
            };
            if (turno === "Azul"){
            if(fncontinentes[i141].color === "Azul" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.azul > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.azul--;
            };
            };
            if (turno === "Amarillo"){
            if(fncontinentes[i141].color === "Amarillo" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.amarillo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.amarillo--;
            };
            };
            if (turno === "Verde"){
            if(fncontinentes[i141].color === "Verde" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.verde > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.verde--;
            };
            };
            if (turno === "Magenta"){
            if(fncontinentes[i141].color === "Magenta" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.magenta > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.magenta--;
            };
            };
            if (turno === "Negro"){
            if(fncontinentes[i141].color === "Negro" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.negro > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.negro--;
            };
            };
            if(paisseleccionado != 0) {
            paisseleccionado.id.textContent = paisseleccionado.nombre + " " + paisseleccionado.fichas + " " + paisseleccionado.colorfichas;
            paisseleccionado = 0;
            };
            };
            };
            actualizarInstrucciones();
            i141 = 0;
            };

//Condición de victoria
function test17(colour){
    i171 = 0;
    i172 = 0;
    i173 = 0;
    i174 = 0;
    ioceania = 0;
    iafrica = 0;
    isudamerica = 0;
    iasia = 0;
    ieuropa = 0;
    inorteamerica = 0;
    while (paises.length > i171){
        if (paises[i171].colorfichas === colour){
            i172++;
        };
        i171++;
    };
    if (i172 >= 30){
        mensajefinal.textContent = "Ganó el " + colour;
        fin.showModal();
    };
    while (objetivos.length > i173 && objetivos[i173].color != colour) {
        i173++;
    };
    while (oceania.length > i174){
        if (oceania[i174].colorfichas === colour){
            ioceania++;
        };
        i174++;
    };
    i174 = 0;
    while (africa.length > i174){
        if(africa[i174].colorfichas === colour){
            iafrica++;
        };
    i174++;
    };
    i174 = 0;
    while (sudamerica.length > i174){
        if(sudamerica[i174].colorfichas === colour){
            isudamerica++;
        };
    i174++;
    };
    i174 = 0;
    while (asia.length > i174){
        if(asia[i174].colorfichas === colour){
            iasia++;
        };
    i174++;
    };
    i174 = 0;
    while (europa.length > i174){
        if(europa[i174].colorfichas === colour){
            ieuropa++;
        };
    i174++;
    };
    i174 = 0;
    while (norteamerica.length > i174){
        if(norteamerica[i174].colorfichas === colour){
            inorteamerica++;
        };
    i174++;
    };
    i174 = 0;
    if(nobjetivos === "true"){
        if(ioceania >= objetivos[i173].oceania && iafrica >= objetivos[i173].africa && isudamerica >= objetivos[i173].sudamerica && iasia >= objetivos[i173].asia && ieuropa >= objetivos[i173].europa && inorteamerica >= objetivos[i173].norteamerica){
        resultadodados.close();
        mensajefinal.textContent = "Ganó el " + colour;
        fin.showModal();
    };
    };
};

//Dialogs pasar fichas
function test18() {
        if (parseInt(selectpasarfichas1.value) === 2){
        paisconquistador.fichas--;
        paisconquistado.fichas++;
    };
    paisconquistador.id.textContent = paisconquistador.nombre + " " + paisconquistador.fichas + " " + paisconquistador.colorfichas;
    paisconquistado.id.textContent = paisconquistado.nombre + " " + paisconquistado.fichas + " " + paisconquistado.colorfichas;
    paisconquistado = 0;
    paisconquistador = 0;
};
function test19() {
    if(parseInt(selectpasarfichas2.value) === 2){
        paisconquistador.fichas--;
        paisconquistado.fichas++;
    } else if (parseInt(selectpasarfichas2.value) === 3){
        paisconquistador.fichas = paisconquistador.fichas - 2;
        paisconquistado.fichas = paisconquistado.fichas + 2;
    };
    paisconquistador.id.textContent = paisconquistador.nombre + " " + paisconquistador.fichas + " " + paisconquistador.colorfichas;
    paisconquistado.id.textContent = paisconquistado.nombre + " " + paisconquistado.fichas + " " + paisconquistado.colorfichas;
    paisconquistado = 0;
    paisconquistador = 0;
};

//Simular ataques
function test16(color) {
    paisconquistado = 0;
    paisconquistador = 0;
    resolucion.textContent = "";
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
                resolucion.textContent = resolucion.textContent + " " + resultadosatacante[i161] + " atacante vs " + resultadosdefensor[i161] + " defensor. " + paisseleccionado.nombre + " pierde una ficha.";
                paisseleccionado.fichas--;
            } else if (resultadosatacante[i161] > resultadosdefensor[i161]) {
                resolucion.textContent = resolucion.textContent + " " + resultadosatacante[i161] + " atacante vs " + resultadosdefensor[i161] + " defensor. " + paisatacado.nombre + " pierde una ficha."
                paisatacado.fichas--;
            };
            i161++;
        };
        resultadodados.showModal();
        if (paisatacado.fichas === 0) {
            paisatacado.fichas++;
            paisseleccionado.fichas--;
            paisatacado.colorfichas = paisseleccionado.colorfichas;
            test17(color);
        if(paisseleccionado.fichas === 2){
        resultadodados.close();
        paisconquistador = paisseleccionado;
        paisconquistado = paisatacado;
        pasarfichas1.showModal();
        } else if (paisseleccionado.fichas >= 3){
        resultadodados.close();
        paisconquistador = paisseleccionado;
        paisconquistado = paisatacado;
        pasarfichas2.showModal();
        };
    };
        paisseleccionado.id.textContent = paisseleccionado.nombre + " " + paisseleccionado.fichas + " " + paisseleccionado.colorfichas;
        paisatacado.id.textContent = paisatacado.nombre + " " + paisatacado.fichas + " " + paisatacado.colorfichas;
        paisseleccionado = 0;
        paisatacado = 0;
        resultadosatacante = [];
        resultadosdefensor = [];
    };
};

//Event Listeners x país
australia.id.addEventListener("click", () => test14(australia));
sumatra.id.addEventListener("click", () => test14(sumatra));
java.id.addEventListener("click", () => test14(java));
borneo.id.addEventListener("click", () => test14(borneo));
india.id.addEventListener("click", () => test14(india));
malasia.id.addEventListener("click", () => test14(malasia));
china.id.addEventListener("click", () => test14(china));
iran.id.addEventListener("click", () => test14(iran));
japon.id.addEventListener("click", () => test14(japon));
gobi.id.addEventListener("click", () => test14(gobi));
mongolia.id.addEventListener("click", () => test14(mongolia));
kamchatka.id.addEventListener("click", () => test14(kamchatka));
turquia.id.addEventListener("click", () => test14(turquia));
israel.id.addEventListener("click", () => test14(israel));
arabia.id.addEventListener("click", () => test14(arabia));
siberia.id.addEventListener("click", () => test14(siberia));
taimir.id.addEventListener("click", () => test14(taimir));
tartaria.id.addEventListener("click", () => test14(tartaria));
aral.id.addEventListener("click", () => test14(aral));
rusia.id.addEventListener("click", () => test14(rusia));
suecia.id.addEventListener("click", () => test14(suecia));
polonia.id.addEventListener("click", () => test14(polonia));
alemania.id.addEventListener("click", () => test14(alemania));
italia.id.addEventListener("click", () => test14(italia));
francia.id.addEventListener("click", () => test14(francia));
españa.id.addEventListener("click", ()=> test14(españa));
granbretaña.id.addEventListener("click", ()=> test14(granbretaña));
islandia.id.addEventListener("click", () => test14(islandia));
alaska.id.addEventListener("click", () => test14(alaska));
canada.id.addEventListener("click", () => test14(canada));
yukon.id.addEventListener("click", () => test14(yukon));
oregon.id.addEventListener("click", () => test14(oregon));
nuevayork.id.addEventListener("click", () => test14(nuevayork));
terranova.id.addEventListener("click", () => test14(terranova));
labrador.id.addEventListener("click", () => test14(labrador));
groenlandia.id.addEventListener("click", () => test14(groenlandia));
california.id.addEventListener("click", () => test14(california));
mexico.id.addEventListener("click", () => test14(mexico));
chile.id.addEventListener("click", () => test14(chile));
peru.id.addEventListener("click", () => test14(peru));
argentina.id.addEventListener("click", () => test14(argentina));
uruguay.id.addEventListener("click", () => test14(uruguay));
brasil.id.addEventListener("click", () => test14(brasil));
colombia.id.addEventListener("click", () => test14(colombia));
sahara.id.addEventListener("click", () => test14(sahara));
egipto.id.addEventListener("click", () => test14(egipto));
etiopia.id.addEventListener("click", () => test14(etiopia));
zaire.id.addEventListener("click", () => test14(zaire));
sudafrica.id.addEventListener("click", () => test14(sudafrica));
madagascar.id.addEventListener("click", () => test14(madagascar));

//Event listeners juego
atacarrojo.addEventListener("click", () => test16("Rojo"));
atacarazul.addEventListener("click", () => test16("Azul"));
atacaramarillo.addEventListener("click", () => test16("Amarillo"));
atacarverde.addEventListener("click", () => test16("Verde"));
atacarmagenta.addEventListener("click", () => test16("Magenta"));
atacarnegro.addEventListener("click", () => test16("Negro"));
skiprojo.addEventListener("click", () => test12("Rojo"));
skipazul.addEventListener("click", () => test12("Azul"));
skipamarillo.addEventListener("click", () => test12("Amarillo"));
skipverde.addEventListener("click", () => test12("Verde"));
skipmagenta.addEventListener("click", () => test12("Magenta"));
skipnegro.addEventListener("click", () => test12("Negro"));
botonGuardar.addEventListener("click", guardarPartida);
cerrarpasarfichas1.addEventListener("click", ()=> pasarfichas1.close());
cerrarpasarfichas2.addEventListener("click", ()=> pasarfichas2.close());
cerrarpasarfichas1.addEventListener("click", ()=> test18());
cerrarpasarfichas2.addEventListener("click", ()=> test19());
botonPausa.addEventListener("click", ()=> abrirMenuPausa());
reanudar.addEventListener("click", ()=> menuPausa.close());
actRapidaIns.addEventListener("click", ()=> cambiarInstructor());
mostrarrojo.addEventListener("click", function(){
    if(turno === "Rojo" && nobjetivos === "true"){
        objetivorojo.showModal()};
    });
cerrarrojo.addEventListener("click",()=> objetivorojo.close());
mostrarazul.addEventListener("click", function(){
    if(turno === "Azul" && nobjetivos === "true"){
        objetivoazul.showModal()};
    });
cerrarazul.addEventListener("click",()=> objetivoazul.close());
mostraramarillo.addEventListener("click", function(){
    if(turno === "Amarillo" && nobjetivos === "true"){
        objetivoamarillo.showModal()};
    });
cerraramarillo.addEventListener("click",()=> objetivoamarillo.close());
mostrarverde.addEventListener("click", function(){
    if(turno === "Verde" && nobjetivos === "true"){
        objetivoverde.showModal()};
    });
cerrarverde.addEventListener("click",()=> objetivoverde.close());
mostrarmagenta.addEventListener("click", function(){
    if(turno === "Magenta" && nobjetivos === "true"){
        objetivomagenta.showModal()};
    });
cerrarmagenta.addEventListener("click",()=> objetivomagenta.close());
mostrarnegro.addEventListener("click", function(){
    if(turno === "Negro" && nobjetivos === "true"){
        objetivonegro.showModal()};
    });
cerrarnegro.addEventListener("click",()=> objetivonegro.close());
cerrardados.addEventListener("click",()=> resultadodados.close());

//funcion guardar partida
function obtenerEstadoJuego() {
    let paisesLimpios = paises.map(p => ({
      nombre: p.nombre,
      fichas: p.fichas,
      color: p.colorfichas,
    }));
  
    return {
      paises: paisesLimpios,
      turno: turno,  
      fase: fase,    
      obj1: obj1.color,
      obj2: obj2.color,
      obj3: obj3.color,
      obj4: obj4.color,
      obj5: obj5.color,
      obj6: obj6.color,
      obj7: obj7.color,
      obj8: obj8.color,
      obj9: obj9.color,
      ninstructor: ninstructor,
    };
  };

function guardarPartida() {
    let estado = obtenerEstadoJuego();
    postEvent("guardarEstado", estado);
    icarg = 0;
    console.log(estado);
};

//funcion cargar partida
function cargarPartida() {    
    getEvent("cargarEstado", (estado) => {  
        turno = estado.turno;
        fase = estado.fase;
        currentturn.textContent = "Turno: " + turno;
        currentphase.textContent = "Fase: " + fase;
        obj1 = obj1.color;
        obj2 = obj2.color;
        obj3 = obj3.color;
        obj4 = obj4.color;
        obj5 = obj5.color;
        obj6 = obj6.color;
        obj7 = obj7.color;
        obj8 = obj8.color;
        obj9 = obj9.color;
        ninstructor = ninstructor;
        while (estado.paises.length > icarg) {
            paises[icarg].fichas = estado.paises[icarg].fichas;
            paises[icarg].colorfichas = estado.paises[icarg].color;
            paises[icarg].id.textContent = paises[icarg].nombre + " " + paises[icarg].fichas + " " + paises[icarg].colorfichas;
            icarg++;
        };
        console.log(estado);
    })
}
