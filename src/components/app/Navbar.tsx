import { Link, useLocation } from 'react-router-dom';
import { Atom, Dna, FlaskConical, Calculator, Cpu, Home } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const links = [
        { to: '/', label: 'Home', icon: Home, color: 'var(--color-accent-primary)' },
        { to: '/biology', label: 'Biology', icon: Dna, color: 'var(--color-accent-biology)' },
        { to: '/chemistry', label: 'Chemistry', icon: FlaskConical, color: 'var(--color-accent-chemistry)' },
        { to: '/physics', label: 'Physics', icon: Atom, color: 'var(--color-accent-physics)' },
        { to: '/cs', label: 'Comp Sci', icon: Cpu, color: 'var(--color-accent-cs)' },
    ];

    return (
        <nav className="navbar glass-panel">
            <div className="navbar-logo">
                <Calculator className="logo-icon" />
                <span className="logo-text">Carbon Labs</span>
            </div>
            <ul className="navbar-links">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === link.to;
                    return (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                                style={{ '--link-color': link.color } as React.CSSProperties}
                            >
                                <Icon size={20} />
                                <span>{link.label}</span>
                                {isActive && (
                                    <div className="nav-indicator" style={{ backgroundColor: link.color }} />
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
