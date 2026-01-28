import { useState, useEffect } from 'react';
import { Network } from 'lucide-react';
import './Algorithms.css';

const Algorithms = () => {
    const [array, setArray] = useState<number[]>([]);
    const [sorting, setSorting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 80) + 10);
        setArray(newArray);
        setSorted(false);
        setCurrentIndex(null);
        setSorting(false);
    };

    const bubbleSortStep = async () => {
        setSorting(true);
        const arr = [...array];
        let swapped = false;

        // Visualizing just one pass or step would be complex without a proper loop with delays.
        // For this simple card, we'll do a simple delay loop.

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                setCurrentIndex(j);
                // Delay for visualization
                await new Promise(resolve => setTimeout(resolve, 100));

                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    setArray([...arr]);
                    swapped = true;
                }
            }
            if (!swapped) break;
        }

        setSorting(false);
        setCurrentIndex(null);
        setSorted(true);
    };

    return (
        <div className="algorithms-tool glass-panel">
            <div className="tool-header">
                <Network size={24} color="var(--color-accent-cs)" />
                <h3>Algorithms</h3>
            </div>

            <div className="controls">
                <button
                    className="control-btn"
                    onClick={resetArray}
                    disabled={sorting}
                >
                    Reset
                </button>
                <button
                    className="control-btn"
                    onClick={bubbleSortStep}
                    disabled={sorting || sorted}
                >
                    {sorting ? 'Sorting...' : 'Bubble Sort'}
                </button>
            </div>

            <div className="sort-visualizer">
                {array.map((val, idx) => (
                    <div
                        key={idx}
                        className={`bar ${idx === currentIndex || idx === (currentIndex !== null ? currentIndex + 1 : -1) ? 'active' : ''} ${sorted ? 'sorted' : ''}`}
                        style={{ height: `${val}%` }}
                        title={val.toString()}
                    ></div>
                ))}
            </div>

            <p className="tool-note" style={{ textAlign: 'center', marginTop: '1rem' }}>
                Simple Bubble Sort Visualization
            </p>
        </div>
    );
};

export default Algorithms;
