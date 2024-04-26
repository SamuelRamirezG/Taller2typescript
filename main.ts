import {series} from './series.js'
import {dataseries} from './dataseries.js'


let cardText: HTMLElement = document.getElementById("info")!;


let seriesTbody: HTMLElement = document.getElementById("series")!;
const temporadapromedio: HTMLElement = document.getElementById('temporada-promedio')!; // Nodo tbody que tiene el id="courses"

let showEvent:NodeListOf< HTMLElement>;

renderSeriesInTable(dataseries);
temporadapromedio.innerHTML = `${getPromediotemporadas(dataseries)}`

function load():void{
  showEvent= document.getElementsByName("click")!;
  showEvent.forEach(c=> {c.onclick= () =>showSerie(Number( c.id))} ); 
}


function renderSeriesInTable(series: series[]): void {
  let tbodySerie = document.createElement("tbody");
  series.forEach(c => {
    
    tbodySerie.innerHTML +=  
    `<tr name="click" id=${c.numero}>
     <td>${c.numero}</td>
     <td><a href="${c.url}"> ${c.nombre}</a></td> 
     <td>${c.canal}</td>
     <td>${c.temporadas}</td>
     </tr>
     `;
    seriesTbody.appendChild(tbodySerie);
    
  });
  load();
}


function getPromediotemporadas(series: series[]): number {
  let suma: number = 0;
  let totalseries: number = 0;
  let promedio: number = 0;
  series.forEach((serie) => suma = suma + serie.temporadas, totalseries = series.length);
  promedio = Math.round(suma/totalseries)
  
  return promedio;
}

function showSerie(number:number):void{
  console.log("asdibasda");
  cardText.childNodes.forEach(c=>{cardText.removeChild(c);})
  
  let serie= dataseries[number-1];
  let cardBody = document.createElement("div");
  cardBody.innerHTML=`
  <img class="card-img-top" src=${serie.imagen} alt="Card image">
  <div class="card-body">
      <h4 class="card-title">${serie.nombre}</h4>
      <p class="card-text">${serie.resenia}</p>
      <a href="${serie.url}" >${serie.url}</a>
  </div>    
  ` ;
  cardText.appendChild(cardBody);
}




