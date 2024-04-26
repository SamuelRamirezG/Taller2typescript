import { dataseries } from './dataseries.js';
var seriesTbody = document.getElementById("series");
var temporadapromedio = document.getElementById('temporada-promedio'); // Nodo tbody que tiene el id="courses"
renderSeriesInTable(dataseries);
temporadapromedio.innerHTML = "".concat(getPromediotemporadas(dataseries));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.numero, "</td>\n                           <td>").concat(c.nombre, "</td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromediotemporadas(series) {
    var suma = 0;
    var totalseries = 0;
    var promedio = 0;
    series.forEach(function (serie) { return suma = suma + serie.temporadas; }, totalseries = series.length);
    promedio = Math.round(suma / totalseries);
    return promedio;
}
