import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="app-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="page-container container"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                <p>© 2026 Carbon Labs. Empowering Future Scientists.</p>
            </footer>
        </div>
    );
};

export default Layout;
