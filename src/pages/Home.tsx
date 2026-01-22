import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Dna, FlaskConical, Atom, Cpu } from 'lucide-react';
import './Home.css';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const subjects = [
        {
            title: 'Biology',
            desc: 'Explore the code of life, from DNA to ecosystem dynamics.',
            icon: Dna,
            color: 'var(--color-accent-biology)',
            link: '/biology'
        },
        {
            title: 'Chemistry',
            desc: 'Understand matter, reactions, and the periodic table.',
            icon: FlaskConical,
            color: 'var(--color-accent-chemistry)',
            link: '/chemistry'
        },
        {
            title: 'Physics',
            desc: 'Discover the laws of motion, energy, and the universe.',
            icon: Atom,
            color: 'var(--color-accent-physics)',
            link: '/physics'
        },
        {
            title: 'Computer Science',
            desc: 'Decode the digital world with converters and logic tools.',
            icon: Cpu,
            color: 'var(--color-accent-cs)',
            link: '/cs'
        }
    ];

    return (
        <div className="home-container">
            <section className="hero-section">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <h1 className="hero-title">
                        Science, <br />
                        <span className="text-gradient">Reimagined.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Carbon Labs provides premium, interactive learning tools specifically tailored for high school science curricula.
                        From AP Biology to Physics Mechanics &mdash; master the concepts with no setup required.
                    </p>
                    <div className="hero-actions">
                        <Link to="/biology" className="cta-button">
                            Start Exploring <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </section>

            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="subjects-grid"
            >
                {subjects.map((subject) => {
                    const Icon = subject.icon;
                    return (
                        <motion.div
                            key={subject.title}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="glass-panel subject-card"
                            style={{ borderTop: `4px solid ${subject.color}` }}
                        >
                            <div className="card-icon" style={{ color: subject.color }}>
                                <Icon size={32} />
                            </div>
                            <h3>{subject.title}</h3>
                            <p>{subject.desc}</p>
                            <Link to={subject.link} className="card-link" style={{ color: subject.color }}>
                                Open Module <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.section>
        </div>
    );
};

export default Home;
