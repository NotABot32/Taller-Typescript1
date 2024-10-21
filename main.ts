import {series} from "./data.js";
import { Serie } from "./Serie.js";

    let serieTable : HTMLElement = document.getElementById("tablaSeries")!;
      console.log(series);

        mostrarSeries(series);

      function mostrarSeries(seriesP : Serie[])
      {
        for (var i=0; i<seriesP.length; i++)
        {
            console.log(series[i].nombre);
        }
        let tbodySerie = document.createElement("tbody");
        tbodySerie.innerHTML = `<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Channel</th>
      <th scope="col">Seasons</th>
    </tr>
  </thead>
  <tbody>`
  for (var i=0; i<seriesP.length; i++)
    {
        tbodySerie.innerHTML += `
        <tr>
            <th scope="row">${seriesP[i].id}</th>
            <td>${seriesP[i].nombre}</td>
            <td>${seriesP[i].Canal}</td>
            <td>${seriesP[i].temporadas}</td>
        </tr>
        `
    }
   
  serieTable.appendChild(tbodySerie);
  ;

    
  function calcularPromedioTemporadas(){
       // Selecciona todas las celdas que contienen el número de temporadas
       const seasonCells = document.querySelectorAll('tbody td:nth-child(4)') as NodeListOf<HTMLTableCellElement>;

       let totalSeasons = 0;
       let numberOfShows = seasonCells.length;

       // Calcula el total de temporadas
       seasonCells.forEach(cell => {
           totalSeasons += parseInt(cell.textContent || '0');
       });

       // Calcula el promedio
       let average = totalSeasons / numberOfShows;

       // Actualiza el texto del promedio en la página
       const seasonAverageElement = document.getElementById('seasonAverage') as HTMLSpanElement;
       seasonAverageElement.textContent = `Seasons average: ${average.toFixed(2)}`;
   }

    // Llama a la función para calcular el promedio
    calcularPromedioTemporadas();

  }

      
    