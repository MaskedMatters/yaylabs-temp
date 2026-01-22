import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Dna, RotateCcw } from 'lucide-react';
import './DNATool.css';

const DNATool = () => {
    const [dnaInput, setDnaInput] = useState('');
    const [mrna, setMrna] = useState('');
    const [protein, setProtein] = useState('');

    const transcribe = (dna: string) => {
        return dna.toUpperCase().replace(/T/g, 'U');
    };

    const translate = (mrna: string) => {
        // Simplified codon table
        const codonTable: Record<string, string> = {
            'UUU': 'Phe', 'UUC': 'Phe', 'UUA': 'Leu', 'UUG': 'Leu',
            'CUU': 'Leu', 'CUC': 'Leu', 'CUA': 'Leu', 'CUG': 'Leu',
            'AUU': 'Ile', 'AUC': 'Ile', 'AUA': 'Ile', 'AUG': 'Met',
            'GUU': 'Val', 'GUC': 'Val', 'GUA': 'Val', 'GUG': 'Val',
            'UCU': 'Ser', 'UCC': 'Ser', 'UCA': 'Ser', 'UCG': 'Ser',
            // ... (add more as needed for demo)
            'AAA': 'Lys', 'AAG': 'Lys',
        };

        let proteinSeq = [];
        for (let i = 0; i < mrna.length; i += 3) {
            const codon = mrna.substring(i, i + 3);
            if (codon.length === 3) {
                proteinSeq.push(codonTable[codon] || '?');
            }
        }
        return proteinSeq.join('-');
    };

    const handleTranscribe = () => {
        const rna = transcribe(dnaInput);
        setMrna(rna);
        setProtein(translate(rna));
    };

    const handleReset = () => {
        setDnaInput('');
        setMrna('');
        setProtein('');
    };

    return (
        <div className="dna-tool glass-panel">
            <div className="tool-header">
                <Dna size={24} color="var(--color-accent-biology)" />
                <h3>Central Dogma Simulator</h3>
            </div>

            <div className="input-group">
                <label>DNA Sequence (5' to 3')</label>
                <input
                    type="text"
                    value={dnaInput}
                    onChange={(e) => setDnaInput(e.target.value.toUpperCase().replace(/[^ATCG]/g, ''))}
                    placeholder="e.g. ATGCCG..."
                    className="tool-input"
                />
                <div className="tool-controls">
                    <button onClick={handleTranscribe} className="btn-primary">
                        Transcribe & Translate
                        <ArrowRight size={16} />
                    </button>
                    <button onClick={handleReset} className="btn-secondary">
                        <RotateCcw size={16} />
                    </button>
                </div>
            </div>

            {(mrna || protein) && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="results-container"
                >
                    <div className="result-item">
                        <span className="label">mRNA:</span>
                        <code className="sequence rna">{mrna}</code>
                    </div>
                    <div className="result-item">
                        <span className="label">Protein:</span>
                        <code className="sequence protein">{protein}</code>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default DNATool;
