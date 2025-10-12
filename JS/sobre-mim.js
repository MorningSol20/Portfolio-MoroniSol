let educacao = document.getElementById("educacao");
let experiencias = document.getElementById("experiencias");
let certificados = document.getElementById("certificados");
let curriculos = document.getElementById("curriculos");

educacao.onclick = function () {
    experiencias.style.boxShadow = "none";
    certificados.style.boxShadow = "none";
    curriculos.style.boxShadow = "none";
    document.getElementById("content-educacao").style.display = "flex";
    document.getElementById("content-xp").style.display = "none";
    document.getElementById("content-certificados").style.display = "none";
    document.getElementById("content-cv").style.display = "none";

}
experiencias.onclick = function () {
    educacao.style.boxShadow = "none";
    certificados.style.boxShadow = "none";
    curriculos.style.boxShadow = "none";
    document.getElementById("content-educacao").style.display = "none";
    document.getElementById("content-xp").style.display = "flex";
    document.getElementById("content-certificados").style.display = "none";
    document.getElementById("content-cv").style.display = "none";
}
certificados.onclick = function () {
    educacao.style.boxShadow = "none";
    experiencias.style.boxShadow = "none";
    curriculos.style.boxShadow = "none";
    document.getElementById("content-educacao").style.display = "none";
    document.getElementById("content-xp").style.display = "none";
    document.getElementById("content-certificados").style.display = "flex";
    document.getElementById("content-cv").style.display = "none";
}
curriculos.onclick = function () {
    educacao.style.boxShadow = "none";
    experiencias.style.boxShadow = "none";
    certificados.style.boxShadow = "none";
    document.getElementById("content-educacao").style.display = "none";
    document.getElementById("content-xp").style.display = "none";
    document.getElementById("content-certificados").style.display = "none";
    document.getElementById("content-cv").style.display = "flex";
}
