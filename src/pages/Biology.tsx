import { motion } from 'framer-motion';
import DNATool from '../components/tools/DNATool';

const Biology = () => {
    return (
        <div className="page-content">
            <header className="page-header">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-gradient"
                >
                    Biology
                </motion.h1>
                <p className="page-subtitle">Explore the building blocks of life.</p>
            </header>

            <section className="topic-section">
                <h2>The Central Dogma</h2>
                <p className="topic-description">
                    The Central Dogma of Molecular Biology explains the flow of genetic information within a biological system.
                    This high-school level interactive tool demonstrates how DNA is transcribed into mRNA and translated into proteins,
                    the fundamental building blocks of life.
                </p>

                <div className="interactive-demo">
                    <DNATool />
                </div>
            </section>

            <div className="cards-grid">
                <div className="glass-panel card soon-card">
                    <h3>Cell Structure</h3>
                    <p>Coming soon: Interactive 3D Cell Model.</p>
                </div>
                <div className="glass-panel card soon-card">
                    <h3>Genetics</h3>
                    <p>Learn about inheritance and Punnett squares.</p>
                </div>
            </div>
        </div>
    );
};

export default Biology;
