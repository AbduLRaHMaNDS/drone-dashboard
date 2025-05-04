import React, { useEffect, useState } from 'react';
import './SystemMonitor.css';


const SystemMonitor = () => {
  const [stats, setStats] = useState({ cpu: 0, ram: 0, temp: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://192.168.137.20:8500/system-info");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching system stats:", error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000); // refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="system-monitor">
      <h1>System Monitor</h1>
      <p><strong>CPU Usage:</strong> {stats.cpu}%</p>
      <p><strong>RAM Usage:</strong> {stats.ram}%</p>
      <p><strong>Temperature:</strong> {stats.temp}°C</p>
    </div>
  );
};

export default SystemMonitor;
