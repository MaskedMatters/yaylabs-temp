import { useState } from 'react';
import { FlaskConical } from 'lucide-react';
import './MolarMass.css';

const MolarMass = () => {
    const [formula, setFormula] = useState('');
    const [result, setResult] = useState<string | null>(null);

    const calculateMass = () => {
        // Simplified mass mapping for common elements
        const atomicMasses: Record<string, number> = {
            H: 1.008, He: 4.003, Li: 6.941, Be: 9.012, B: 10.81, C: 12.01, N: 14.01, O: 16.00, F: 19.00, Ne: 20.18,
            Na: 22.99, Mg: 24.31, Al: 26.98, Si: 28.09, P: 30.97, S: 32.07, Cl: 35.45, K: 39.10, Ca: 40.08,
            Fe: 55.85, Cu: 63.55, Zn: 65.38, Ag: 107.87, Au: 196.97, Pb: 207.2
        };

        try {
            let mass = 0;
            let currentElement = '';
            let currentNumber = '';

            for (let i = 0; i < formula.length; i++) {
                const char = formula[i];

                if (char >= 'A' && char <= 'Z') {
                    if (currentElement) {
                        const m = atomicMasses[currentElement] || 0;
                        mass += m * (parseInt(currentNumber) || 1);
                    }
                    currentElement = char;
                    currentNumber = '';
                } else if (char >= 'a' && char <= 'z') {
                    currentElement += char;
                } else if (char >= '0' && char <= '9') {
                    currentNumber += char;
                }
            }

            if (currentElement) {
                const m = atomicMasses[currentElement] || 0;
                mass += m * (parseInt(currentNumber) || 1);
            }

            setResult(mass > 0 ? mass.toFixed(2) + ' g/mol' : 'Invalid Formula (or unknown elements)');
        } catch (e) {
            setResult('Error');
        }
    };

    return (
        <div className="molar-mass-tool glass-panel">
            <div className="tool-header">
                <FlaskConical size={24} color="var(--color-accent-chemistry)" />
                <h3>Molar Mass Calculator</h3>
            </div>

            <div className="input-group">
                <label>Chemical Formula</label>
                <div className="input-row">
                    <input
                        type="text"
                        value={formula}
                        onChange={(e) => setFormula(e.target.value)}
                        placeholder="e.g. H2O, NaCl"
                        className="tool-input"
                    />
                    <button onClick={calculateMass} className="btn-primary chemistry-btn">
                        Calculate
                    </button>
                </div>
            </div>

            {result && (
                <div className="result-display">
                    <span>Molar Mass:</span>
                    <span className="result-value">{result}</span>
                </div>
            )}
        </div>
    );
};

export default MolarMass;
