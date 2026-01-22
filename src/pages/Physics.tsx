import { motion } from 'framer-motion';
import ProjectileMotion from '../components/tools/ProjectileMotion';

const Physics = () => {
    return (
        <div className="page-content">
            <header className="page-header">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ color: 'var(--color-accent-physics)' }}
                >
                    Physics
                </motion.h1>
                <p className="page-subtitle">Understand the fundamental laws of the universe.</p>
            </header>

            <section className="topic-section">
                <h2>Kinematics</h2>
                <p className="topic-description">
                    Visualize 2D kinematics with our projectile motion simulator.
                    Explore how initial velocity and launch angle affect trajectory, range, and time of flight.
                    A great resource for understanding vectors and gravity.
                </p>
                <div className="interactive-demo">
                    <ProjectileMotion />
                </div>
            </section>

            <div className="cards-grid">
                <div className="glass-panel card soon-card">
                    <h3>Optics</h3>
                    <p>Ray diagrams and lens calculations.</p>
                </div>
                <div className="glass-panel card soon-card">
                    <h3>Circuits</h3>
                    <p>Ohm's Law interactive calculator.</p>
                </div>
            </div>
        </div>
    );
};

export default Physics;
