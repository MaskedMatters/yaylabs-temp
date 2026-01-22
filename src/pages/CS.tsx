import { motion } from 'framer-motion';
import BaseConverter from '../components/tools/BaseConverter';

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

            <section className="topic-section">
                <h2>Number Systems</h2>
                <p className="topic-description">
                    Understand data representation in digital systems.
                    Practice converting between Decimal, Binary, Hexadecimal, and Octal numbering systems.
                    Essential for computer science students learning about memory and processor logic.
                </p>
                <div className="interactive-demo">
                    <BaseConverter />
                </div>
            </section>

            <div className="cards-grid">
                <div className="glass-panel card soon-card">
                    <h3>Logic Gates</h3>
                    <p>Truth tables for AND, OR, NOT, XOR.</p>
                </div>
                <div className="glass-panel card soon-card">
                    <h3>Algorithms</h3>
                    <p>Sorting and searching visualisation.</p>
                </div>
            </div>
        </div>
    );
};

export default CS;
