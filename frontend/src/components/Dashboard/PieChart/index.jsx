import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    ArcElement
);

export const PieChart = () => {
    const ingresos = [
        { month: 'Reservado', count: 2 },
        { month: 'Reservado y confirmado', count: 20 },
        { month: 'Confirmado y pagado', count: 7 },
    ];
    const data = {
        labels: ingresos.map(({ month }) => month),
        datasets: [
            {
                label: 'Estado',
                data: ingresos.map(({ count }) => count),
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(86, 255, 94, 1)',
                ],
                tension: 0,
            },
        ],
    };
    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                display: true,
                align: 'start',
                labels: {
                    boxWidth: 10,
                    borderRadius: 20
                },
            },
        },
    };
    return (
        <div
            className="w-full h-full col-span-2 bg-white border border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg relative
            lg:col-span-2 xl:col-span-2 xl:row-span-2
            flex flex-col justify-between
            "
        >
            <p className="text-lg text-start text-[#262626] font-medium">
                Estado de las Reservas
            </p>

            <Pie data={data} options={options} />
        </div>
    );
};