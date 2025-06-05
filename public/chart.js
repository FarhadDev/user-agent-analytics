// chart.js
window.onload = async function loadChartData() {
    const ctx = document.getElementById('uaChart').getContext('2d');

    try {
        const response = await fetch('http://localhost:3000/analytics/user-agents');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Extract labels and values dynamically
        const labels = Object.keys(data);
        const values = Object.values(data);

        // Generate distinct colors dynamically (simple pastel generator)
        function generateColors(num) {
            const colors = [];
            for (let i = 0; i < num; i++) {
                // HSL: evenly spaced hues, fixed saturation and lightness for pleasant pastels
                const hue = Math.floor((360 / num) * i);
                colors.push(`hsl(${hue}, 70%, 70%)`);
            }
            return colors;
        }

        const backgroundColors = generateColors(labels.length);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'User Agent Counts',
                    data: values,
                    backgroundColor: backgroundColors,
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'User Agent Analytics' }
                },
                scales: {
                    y: { beginAtZero: true, precision: 0 }
                }
            }
        });
    } catch (err) {
        console.error('Failed to load chart data:', err);
    }
};

