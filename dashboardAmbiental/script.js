const map = L.map('map').setView([18.65, -99.05], 9); // Centro Morelos

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

// Inicializar gráfica
const ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [{
      label: 'Ejemplo',
      data: [12, 19, 3, 5, 2],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }
});

// Cambiar dataset (simulado)
document.getElementById('datasetSelector').addEventListener('change', (e) => {
  const dataset = e.target.value;
  // alert(`Cambiar a dataset: ${dataset}`);
  // Aquí cargarás datos desde /data
});