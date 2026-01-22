import { motion } from 'framer-motion';
import MolarMass from '../components/tools/MolarMass';

const Chemistry = () => {
    return (
        <div className="page-content">
            <header className="page-header">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ color: 'var(--color-accent-chemistry)' }}
                >
                    Chemistry
                </motion.h1>
                <p className="page-subtitle">Master the elements and their interactions.</p>
            </header>

            <section className="topic-section">
                <h2>Stoichiometry</h2>
                <p className="topic-description">
                    Master stoichiometry with this essential tool for chemistry students.
                    Calculate the molar mass (molecular weight) of any compound by entering its formula.
                    Perfect for balancing equations and conversion problems.
                </p>
                <div className="interactive-demo">
                    <MolarMass />
                </div>
            </section>

            <div className="cards-grid">
                <div className="glass-panel card soon-card">
                    <h3>Periodic Table</h3>
                    <p>Interactive table coming soon.</p>
                </div>
                <div className="glass-panel card soon-card">
                    <h3>Bonding</h3>
                    <p>Visualise covalent and ionic bonds.</p>
                </div>
            </div>
        </div>
    );
};

export default Chemistry;
