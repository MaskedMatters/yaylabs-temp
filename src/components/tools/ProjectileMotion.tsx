import { useState } from 'react';
import { Rocket } from 'lucide-react';
import './ProjectileMotion.css';

const ProjectileMotion = () => {
    const [velocity, setVelocity] = useState(20);
    const [angle, setAngle] = useState(45);
    const [gravity] = useState(9.81);

    // Results
    const angleRad = (angle * Math.PI) / 180;
    const range = (Math.pow(velocity, 2) * Math.sin(2 * angleRad)) / gravity;
    const maxHeight = (Math.pow(velocity * Math.sin(angleRad), 2)) / (2 * gravity);
    const time = (2 * velocity * Math.sin(angleRad)) / gravity;

    return (
        <div className="projectile-tool glass-panel">
            <div className="tool-header">
                <Rocket size={24} color="var(--color-accent-physics)" />
                <h3>Projectile Motion</h3>
            </div>

            <div className="controls-grid">
                <div className="control-group">
                    <label>Initial Velocity (m/s)</label>
                    <input
                        type="range"
                        min="1" max="100"
                        value={velocity}
                        onChange={(e) => setVelocity(Number(e.target.value))}
                    />
                    <span className="value-display">{velocity} m/s</span>
                </div>

                <div className="control-group">
                    <label>Launch Angle (degrees)</label>
                    <input
                        type="range"
                        min="0" max="90"
                        value={angle}
                        onChange={(e) => setAngle(Number(e.target.value))}
                    />
                    <span className="value-display">{angle}°</span>
                </div>
            </div>

            <div className="results-grid">
                <div className="result-card">
                    <span className="result-label">Max Range</span>
                    <span className="result-value">{range.toFixed(2)} m</span>
                </div>
                <div className="result-card">
                    <span className="result-label">Max Height</span>
                    <span className="result-value">{maxHeight.toFixed(2)} m</span>
                </div>
                <div className="result-card">
                    <span className="result-label">Flight Time</span>
                    <span className="result-value">{time.toFixed(2)} s</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectileMotion;
