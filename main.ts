import {series} from './series.js'
import {dataseries} from './dataseries.js'


let seriesTbody: HTMLElement = document.getElementById("series")!;
const temporadapromedio: HTMLElement = document.getElementById('temporada-promedio')!; // Nodo tbody que tiene el id="courses"

renderSeriesInTable(dataseries);
temporadapromedio.innerHTML = `${getPromediotemporadas(dataseries)}`


function renderSeriesInTable(series: series[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.numero}</td>
                           <td>${c.nombre}</td>
                           <td>${c.canal}</td>
                           <td>${c.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
}


function getPromediotemporadas(series: series[]): number {
  let suma: number = 0;
  let totalseries: number = 0;
  let promedio: number = 0;
  series.forEach((serie) => suma = suma + serie.temporadas, totalseries = series.length);
  promedio = Math.round(suma/totalseries)
  
  return promedio;
}

