import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Dashboard.css';  // Ensure this path is correct based on your file structure

const data = [
    { name: 'Women', value: 9, total: 22 },
    { name: 'Men', value: 7, total: 22 },
    { name: 'Bags', value: 6, total: 22 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Product Distribution by Category</h1>
            <div className="charts-container">
                <div className="chart pie-chart">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
                <div className="chart bar-chart">
                    <ResponsiveContainer width={400} height={400}>
                        <BarChart
                            data={data}
                            margin={{
                                top: 20, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" stackId="a" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="summary-panel">
                    <h2>Summary</h2>
                    <div className="summary-item">Total: 22</div>
                    <div className="summary-item">Women: 9</div>
                    <div className="summary-item">Men: 7</div>
                    <div className="summary-item">Bags: 6</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
