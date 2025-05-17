// components/charts.tsx
import { Line, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import React from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function LineChart({ data, targetRange }: { data: { day: number; value: number }[]; targetRange: [number, number] }) {
    return (
        <div className="h-[200px]">
            <Line
                data={{
                    labels: data.map((d) => `Day ${d.day}`),
                    datasets: [
                        {
                            label: "Blood Sugar (mg/dL)",
                            data: data.map((d) => d.value),
                            borderColor: "rgb(59, 130, 246)",
                            backgroundColor: "rgba(59, 130, 246, 0.5)",
                            tension: 0.3,
                        },
                        {
                            label: "Target Range",
                            data: data.map(() => targetRange[1]),
                            borderColor: "rgb(34, 197, 94)",
                            backgroundColor: "rgba(34, 197, 94, 0.1)",
                            borderDash: [5, 5],
                            borderWidth: 1,
                            pointRadius: 0,
                            fill: true,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: Math.min(...data.map((d) => d.value)) - 20,
                        },
                    },
                }}
            />
        </div>
    );
}

export function BarChart({ data, target }: { data: { week: string; value: number }[]; target: number }) {
    return (
        <div className="h-[200px]">
            <Bar
                data={{
                    labels: data.map((d) => d.week),
                    datasets: [
                        {
                            label: "Weight (lbs)",
                            data: data.map((d) => d.value),
                            backgroundColor: "rgba(59, 130, 246, 0.7)",
                        },
                        {
                            label: "Target",
                            data: data.map(() => target),
                            backgroundColor: "rgba(34, 197, 94, 0.7)",
                            pointRadius: 0,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                        },
                    },
                }}
            />
        </div>
    );
}