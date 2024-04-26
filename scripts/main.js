import { dataseries } from './dataseries.js';
var cardText = document.getElementById("info");
var seriesTbody = document.getElementById("series");
var temporadapromedio = document.getElementById('temporada-promedio'); // Nodo tbody que tiene el id="courses"
var showEvent;
renderSeriesInTable(dataseries);
temporadapromedio.innerHTML = "".concat(getPromediotemporadas(dataseries));
function load() {
    showEvent = document.getElementsByName("click");
    showEvent.forEach(function (c) { c.onclick = function () { return showSerie(Number(c.id)); }; });
}
function renderSeriesInTable(series) {
    var tbodySerie = document.createElement("tbody");
    series.forEach(function (c) {
        tbodySerie.innerHTML +=
            "<tr name=\"click\" id=".concat(c.numero, ">\n     <td>").concat(c.numero, "</td>\n     <td><a href=\"").concat(c.url, "\"> ").concat(c.nombre, "</a></td> \n     <td>").concat(c.canal, "</td>\n     <td>").concat(c.temporadas, "</td>\n     </tr>\n     ");
        seriesTbody.appendChild(tbodySerie);
    });
    load();
}
function getPromediotemporadas(series) {
    var suma = 0;
    var totalseries = 0;
    var promedio = 0;
    series.forEach(function (serie) { return suma = suma + serie.temporadas; }, totalseries = series.length);
    promedio = Math.round(suma / totalseries);
    return promedio;
}
function showSerie(number) {
    console.log("asdibasda");
    cardText.childNodes.forEach(function (c) { cardText.removeChild(c); });
    var serie = dataseries[number - 1];
    var cardBody = document.createElement("div");
    cardBody.innerHTML = "\n  <img class=\"card-img-top\" src=".concat(serie.imagen, " alt=\"Card image\">\n  <div class=\"card-body\">\n      <h4 class=\"card-title\">").concat(serie.nombre, "</h4>\n      <p class=\"card-text\">").concat(serie.resenia, "</p>\n      <a href=\"").concat(serie.url, "\" >").concat(serie.url, "</a>\n  </div>    \n  ");
    cardText.appendChild(cardBody);
}
