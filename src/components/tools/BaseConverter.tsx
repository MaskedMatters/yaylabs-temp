import { useState } from 'react';
import { Cpu } from 'lucide-react';
import './BaseConverter.css';

const BaseConverter = () => {
    const [dec, setDec] = useState('0');
    const [bin, setBin] = useState('0');
    const [hex, setHex] = useState('0');
    const [oct, setOct] = useState('0');

    // Update all when Decimal changes
    const handleDecChange = (v: string) => {
        if (v === '') {
            setDec(''); setBin(''); setHex(''); setOct('');
            return;
        }
        const val = parseInt(v, 10);
        if (!isNaN(val)) {
            setDec(v);
            setBin(val.toString(2));
            setHex(val.toString(16).toUpperCase());
            setOct(val.toString(8));
        }
    };

    // Update all when Binary changes
    const handleBinChange = (v: string) => {
        const val = parseInt(v, 2);
        if (!isNaN(val)) {
            setBin(v);
            setDec(val.toString(10));
            setHex(val.toString(16).toUpperCase());
            setOct(val.toString(8));
        } else if (v === '') {
            setBin(''); setDec(''); setHex(''); setOct('');
        }
    };

    // Generic handler structure could be better but this works for simple demo

    return (
        <div className="base-converter glass-panel">
            <div className="tool-header">
                <Cpu size={24} color="var(--color-accent-cs)" />
                <h3>Number Base Converter</h3>
            </div>

            <div className="converter-grid">
                <div className="input-field">
                    <label>Decimal (10)</label>
                    <input
                        type="number"
                        value={dec}
                        onChange={(e) => handleDecChange(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label>Binary (2)</label>
                    <input
                        type="text"
                        value={bin}
                        onChange={(e) => handleBinChange(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label>Hexadecimal (16)</label>
                    <input
                        type="text"
                        value={hex}
                        readOnly
                        style={{ opacity: 0.8, cursor: 'not-allowed' }}
                    />
                </div>

                <div className="input-field">
                    <label>Octal (8)</label>
                    <input
                        type="text"
                        value={oct}
                        readOnly
                        style={{ opacity: 0.8, cursor: 'not-allowed' }}
                    />
                </div>
            </div>

            <p className="tool-note">Edit Decimal or Binary to convert instantly.</p>
        </div>
    );
};

export default BaseConverter;
