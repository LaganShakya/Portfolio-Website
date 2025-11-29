import React, { useState, useEffect, useRef } from 'react';

interface TerminalLoaderProps {
    /** Optional callback to trigger when progress hits 100% */
    onComplete?: () => void;
}

interface BootStep {
    message: string;
    delay: number;
}

const TerminalLoader: React.FC<TerminalLoaderProps> = ({ onComplete }) => {
    const [logs, setLogs] = useState<string[]>([]);
    const [progress, setProgress] = useState<number>(0);

    // We specify HTMLDivElement because this ref is attached to a <div>
    const endRef = useRef<HTMLDivElement>(null);

    const bootSequence: BootStep[] = [
        { message: "Hello Welcome...", delay: 200 },
        { message: "Initializing system core...", delay: 600 },
        { message: "Verifying encrypted handshake...", delay: 1000 },
        { message: "Establishing secure connection (164.125.355.87)...", delay: 1800 },
        { message: "Allocating memory blocks: 0x0000 -> 0xFFFF", delay: 2600 },
        { message: "Parsing dependency tree...", delay: 3200 },
        { message: "Compiling assets...", delay: 3800 },
        { message: "Website ready.", delay: 4800 },
    ];

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    useEffect(() => {
        // Type the timeouts array to allow for cleanup
        const timeouts: ReturnType<typeof setTimeout>[] = [];

        // 1. Add logs sequentially
        bootSequence.forEach((step) => {
            const timeout = setTimeout(() => {
                setLogs((prev) => [...prev, `> ${step.message}`]);
            }, step.delay);
            timeouts.push(timeout);
        });

        // 2. Handle Progress Bar Simulation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    if (onComplete) setTimeout(onComplete, 500);
                    return 100;
                }
                return Math.min(prev + Math.random() * 15, 100);
            });
        }, 500);

        return () => {
            timeouts.forEach(clearTimeout);
            clearInterval(progressInterval);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 font-mono text-sm sm:text-base">

                {/* Header */}
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-gray-400 text-xs select-none">root@server:~</span>
                </div>

                {/* Body */}
                <div className="p-4 h-64 sm:h-80 overflow-y-auto flex flex-col gap-1 text-green-400 selection:bg-green-900 selection:text-white">
                    {logs.map((log, index) => (
                        <div key={index} className="break-words">
                            {log}
                        </div>
                    ))}

                    <div className="flex items-center">
                        <span className="mr-2 text-green-600">$</span>
                        <span className="animate-pulse">_</span>
                    </div>

                    <div ref={endRef} />
                </div>

                {/* Footer */}
                <div className="bg-gray-800 p-2 border-t border-gray-700">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>STATUS: {progress < 100 ? "LOADING" : "COMPLETE"}</span>
                        <span>{Math.floor(progress)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-green-500 h-2.5 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TerminalLoader;