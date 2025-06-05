async function loadChartData() {
    try {
        const response = await fetch('http://localhost:3000/analytics/user-agents');
        const data = await response.json();

        const labels = Object.keys(data);
        const values = Object.values(data);

        const ctx = document.getElementById('uaChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'User Agent Hits',
                    data: values,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

window.onload = loadChartData;
