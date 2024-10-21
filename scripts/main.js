import { series } from "./data.js";
var serieTable = document.getElementById("tablaSeries");
console.log(series);
mostrarSeries(series);
function mostrarSeries(seriesP) {
    for (var i = 0; i < seriesP.length; i++) {
        console.log(series[i].nombre);
    }
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Channel</th>\n      <th scope=\"col\">Seasons</th>\n    </tr>\n  </thead>\n  <tbody>";
    for (var i = 0; i < seriesP.length; i++) {
        tbodySerie.innerHTML += "\n        <tr>\n            <th scope=\"row\">".concat(seriesP[i].id, "</th>\n            <td>").concat(seriesP[i].nombre, "</td>\n            <td>").concat(seriesP[i].Canal, "</td>\n            <td>").concat(seriesP[i].temporadas, "</td>\n        </tr>\n        ");
    }
    serieTable.appendChild(tbodySerie);
    ;
    function calcularPromedioTemporadas() {
        // Selecciona todas las celdas que contienen el número de temporadas
        var seasonCells = document.querySelectorAll('tbody td:nth-child(4)');
        var totalSeasons = 0;
        var numberOfShows = seasonCells.length;
        // Calcula el total de temporadas
        seasonCells.forEach(function (cell) {
            totalSeasons += parseInt(cell.textContent || '0');
        });
        // Calcula el promedio
        var average = totalSeasons / numberOfShows;
        // Actualiza el texto del promedio en la página
        var seasonAverageElement = document.getElementById('seasonAverage');
        seasonAverageElement.textContent = "Seasons average: ".concat(average.toFixed(2));
    }
    // Llama a la función para calcular el promedio
    calcularPromedioTemporadas();
}
