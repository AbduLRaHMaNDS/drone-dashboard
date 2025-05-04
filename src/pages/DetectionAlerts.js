import React, { useEffect, useState } from 'react';
import './DetectionAlerts.css';

const DetectionAlerts = () => {
  const [selectedCam, setSelectedCam] = useState("1");
  const [metrics, setMetrics] = useState({
    confidence: 0,
    x: 0,
    y: 0,
    label: "none"
  });

  const baseURL = "http://192.168.137.20:8000";

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch(`${baseURL}/metrics${selectedCam}`);
        const data = await res.json();
        setMetrics(data);
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 1000);
    return () => clearInterval(interval);
  }, [selectedCam]);

  return (
    <div className="alert-page">
      <div className="top-section">

        {/* SENSOR PANEL */}
        <div className="sensor-panel">
          <div className="sensor-header">
            <h2>SENSORS READINGS</h2>
          </div>
          <div className="sensor-values">
            <p>Drone Detected: <strong>{metrics.label}</strong></p>
            <p>Detection Accuracy: <strong>{(metrics.confidence * 100).toFixed(1)}%</strong></p>
            <p>X Distance: <strong>{metrics.x.toFixed(2)} m</strong></p>
            <p>Y Distance: <strong>{metrics.y.toFixed(2)} m</strong></p>
          </div>
        </div>

        {/* CAMERA PANEL */}
        <div className="camera-panel">
          <div className="camera-header">
            <h2>CAMERA VIEW</h2>
            <div className="camera-toggle">
              <button
                onClick={() => setSelectedCam("1")}
                className={selectedCam === "1" ? "active" : ""}
              >
                Camera 1
              </button>
              <button
                onClick={() => setSelectedCam("2")}
                className={selectedCam === "2" ? "active" : ""}
              >
                Camera 2
              </button>
            </div>
          </div>
          <img
            src={`${baseURL}/video_feed${selectedCam}`}
            alt="Live Camera Feed"
            className="camera-feed"
          />
        </div>
      </div>

      {/* CONTROL PANEL */}
      <div className="control-panel">
        <button className="send-button">SEND!</button>
        <span>send drone?</span>
        <button className="hold-button">HOLD!</button>
      </div>
    </div>
  );
};

export default DetectionAlerts;
