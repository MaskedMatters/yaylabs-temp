import { useState } from 'react';
import { CircuitBoard } from 'lucide-react';
import './LogicGates.css';

type GateType = 'AND' | 'OR' | 'NOT' | 'XOR';

const LogicGates = () => {
    const [gate, setGate] = useState<GateType>('AND');
    const [inputA, setInputA] = useState(false);
    const [inputB, setInputB] = useState(false);

    const getOutput = () => {
        switch (gate) {
            case 'AND': return inputA && inputB;
            case 'OR': return inputA || inputB;
            case 'XOR': return inputA !== inputB;
            case 'NOT': return !inputA;
            default: return false;
        }
    };

    const output = getOutput();

    return (
        <div className="logic-gates glass-panel">
            <div className="tool-header">
                <CircuitBoard size={24} color="var(--color-accent-cs)" />
                <h3>Logic Gates</h3>
            </div>

            <div className="gate-controls">
                {(['AND', 'OR', 'XOR', 'NOT'] as GateType[]).map((g) => (
                    <button
                        key={g}
                        className={`gate-btn ${gate === g ? 'active' : ''}`}
                        onClick={() => {
                            setGate(g);
                            // Reset second input if switching to NOT to avoid confusion, 
                            // though we just hide it visually usually.
                        }}
                    >
                        {g}
                    </button>
                ))}
            </div>

            <div className="visualization">
                <div className="circuit">
                    <div className="inputs">
                        <div
                            className="input-node"
                            data-on={inputA}
                            onClick={() => setInputA(!inputA)}
                            title="Toggle Input A"
                        >
                            {inputA ? '1' : '0'}
                        </div>

                        {gate !== 'NOT' && (
                            <div
                                className="input-node"
                                data-on={inputB}
                                onClick={() => setInputB(!inputB)}
                                title="Toggle Input B"
                            >
                                {inputB ? '1' : '0'}
                            </div>
                        )}
                    </div>

                    <div className={`gate-symbol ${gate.toLowerCase()}`}>
                        {gate}
                    </div>

                    <div className="output-node" data-active={output}>
                        {output ? '1' : '0'}
                    </div>
                </div>
            </div>

            <p className="tool-note" style={{ marginTop: '1rem', textAlign: 'center' }}>
                Click inputs (0/1) to toggle.
            </p>
        </div>
    );
};

export default LogicGates;
