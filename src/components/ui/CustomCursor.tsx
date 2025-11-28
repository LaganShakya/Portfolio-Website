import { useState, useEffect, useRef } from 'react';

/**
 * CUSTOM CURSOR COMPONENT
 * * Usage:
 * 1. Place <CustomCursor /> at the root of your app.
 * 2. Add 'cursor-none' to your body/main container.
 * 3. Add class 'hover-target' to buttons/links for hover effect.
 * 4. Add class 'image-hover-target' to images/cards for "VIEW" effect.
 */
const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null); // The outer ring
    const dotRef = useRef<HTMLDivElement>(null);    // The inner dot
    const [click, setClick] = useState(false);
    const [hoverType, setHoverType] = useState<'default' | 'pointer' | 'image'>('default');

    useEffect(() => {
        // Refs for animation loop
        const mouse = { x: -100, y: -100 }; // Start off-screen
        const pos = { x: -100, y: -100 };   // Current position of the ring (for interpolation)
        const speed = 0.15;                 // Lerp speed (0 to 1)

        const mouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Direct update for the small dot (instant)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
            }

            // Check what we are hovering over for cursor states
            const target = e.target as HTMLElement;

            // Reset first
            let newHoverType: 'default' | 'pointer' | 'image' = 'default';

            // Check for buttons/links
            if (target.closest('a') || target.closest('button') || target.closest('.hover-target')) {
                newHoverType = 'pointer';
            }
            // Check for images/cards
            if (target.closest('.image-hover-target')) {
                newHoverType = 'image';
            }

            setHoverType(newHoverType);
        };

        const onMouseDown = () => setClick(true);
        const onMouseUp = () => setClick(false);

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        // Animation Loop for smooth trailing effect
        let animationFrameId: number;
        const loop = () => {
            // Linear interpolation (Lerp) for smooth following
            pos.x += (mouse.x - pos.x) * speed;
            pos.y += (mouse.y - pos.y) * speed;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
            }
            animationFrameId = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Dynamic classes based on state
    const getCursorSize = () => {
        if (click) return 'h-9 w-9'; // Shrink slightly on click
        if (hoverType === 'image') return 'h-24 w-24 bg-white mix-blend-normal text-black'; // Large opaque circle for view
        if (hoverType === 'pointer') return 'h-16 w-16 opacity-50'; // Larger transparent circle
        return 'h-12 w-12'; // Default ring size
    };

    return (
        <>
            {/* The trailing ring */}
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 pointer-events-none z-9999 rounded-full flex items-center justify-center transition-[width,height,background-color,opacity] duration-300 ease-out will-change-transform -translate-x-1/2 -translate-y-1/2
          ${hoverType === 'image' ? 'bg-white' : 'border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)] mix-blend-screen'}
          ${getCursorSize()}
        `}
            >
                {hoverType === 'image' && (
                    <span className="text-[10px] font-bold tracking-widest uppercase animate-fadeIn">View</span>
                )}
            </div>

            {/* The center dot (Increased size, disappears on 'image' hover for cleaner look) */}
            <div
                ref={dotRef}
                className={`fixed top-0 left-0 h-2 w-2 bg-cyan-400 rounded-full pointer-events-none z-9999 mix-blend-screen -translate-x-1/2 -translate-y-1/2 will-change-transform transition-opacity duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]
          ${hoverType === 'image' ? 'opacity-0' : 'opacity-100'}
        `}
            />
        </>
    );
};

export default CustomCursor;
