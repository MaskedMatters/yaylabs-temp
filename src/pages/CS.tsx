import { motion } from 'framer-motion';
import BaseConverter from '../components/tools/BaseConverter';
import LogicGates from '../components/tools/LogicGates';
import Algorithms from '../components/tools/Algorithms';

const CS = () => {
    return (
        <div className="page-content">
            <header className="page-header">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ color: 'var(--color-accent-cs)' }}
                >
                    Computer Science
                </motion.h1>
                <p className="page-subtitle">Learn the language of machines.</p>
            </header>

            <div className="cs-collage-grid">
                <div className="collage-item wide">
                    <BaseConverter />
                </div>
                <div className="collage-item">
                    <LogicGates />
                </div>
                <div className="collage-item">
                    <Algorithms />
                </div>
            </div>
        </div>
    );
};

export default CS;
