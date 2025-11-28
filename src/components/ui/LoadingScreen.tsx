import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// We import specific loaders from the examples folder for 3D Text
// Fixed imports by adding .js extension which is required in some build environments
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export default function LoadingScreen() {
    const mountRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!mountRef.current) return;

        // --- Scene Setup ---
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();
        // Fog for depth fading
        scene.fog = new THREE.FogExp2(0x111111, 0.02);

        const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
        camera.position.set(0, 0, 14);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Clamp for performance
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        mountRef.current.appendChild(renderer.domElement);

        // --- Lighting (Studio Setup) ---
        // 1. Key Light (Warm Gold)
        const keyLight = new THREE.SpotLight(0xffaa00, 80);
        keyLight.position.set(5, 5, 10);
        keyLight.angle = Math.PI / 5;
        keyLight.penumbra = 0.5;
        scene.add(keyLight);

        // 2. Rim Light (Cool Blue)
        const rimLight = new THREE.SpotLight(0x4455ff, 60);
        rimLight.position.set(-5, 5, -5);
        scene.add(rimLight);

        // 3. Fill Light (Neutral)
        const fillLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(fillLight);

        // 4. Front Light (White)
        const frontLight = new THREE.PointLight(0xffffff, 20);
        frontLight.position.set(0, 2, 8);
        scene.add(frontLight);

        // --- Materials ---
        const goldMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffd700,
            metalness: 0.9,
            roughness: 0.3,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            reflectivity: 1.0,
            side: THREE.DoubleSide
        });

        const highlightMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffeebb, // Champagne gold
            metalness: 0.9,
            roughness: 0.2,
            clearcoat: 1.0,
            emissive: 0x221100,
            emissiveIntensity: 0.4,
        });

        // --- Geometry: The Premium Coin ---
        const coinGroup = new THREE.Group();
        scene.add(coinGroup);

        // 1. Main Body
        const radius = 2.0;
        const coinShape = new THREE.Shape();
        coinShape.absarc(0, 0, radius, 0, Math.PI * 2, false);

        const extrudeSettings = {
            depth: 0.2,
            bevelEnabled: true,
            bevelThickness: 0.15,
            bevelSize: 0.15,
            bevelSegments: 12,
            curveSegments: 64
        };

        const coinGeo = new THREE.ExtrudeGeometry(coinShape, extrudeSettings);
        const coinMesh = new THREE.Mesh(coinGeo, goldMaterial);

        coinGeo.center();
        coinMesh.rotation.x = 0;
        coinGroup.add(coinMesh);

        // 2. Inner Ring Detail
        const ringGeo = new THREE.TorusGeometry(1.5, 0.03, 16, 64);
        const ringMeshFront = new THREE.Mesh(ringGeo, highlightMaterial);
        ringMeshFront.position.z = 0.26;
        coinGroup.add(ringMeshFront);

        const ringMeshBack = new THREE.Mesh(ringGeo, highlightMaterial);
        ringMeshBack.position.z = -0.26;
        coinGroup.add(ringMeshBack);

        // 3. Decor: Lotus (Padma) - Front
        const lotusGroup = new THREE.Group();

        // Create Petal Shape
        const petalShape = new THREE.Shape();
        petalShape.moveTo(0, 0);
        // Draw a teardrop/petal shape
        petalShape.quadraticCurveTo(0.3, 0.5, 0, 1.0); // Curve out and up
        petalShape.quadraticCurveTo(-0.3, 0.5, 0, 0);  // Curve back down

        const petalGeo = new THREE.ExtrudeGeometry(petalShape, {
            depth: 0.05,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.02,
            bevelSegments: 2
        });

        // Arrange 8 petals radially
        for (let i = 0; i < 8; i++) {
            const petal = new THREE.Mesh(petalGeo, highlightMaterial);
            const angle = (i / 8) * Math.PI * 2;
            petal.rotation.z = angle - Math.PI / 2; // Orient correctly
            // Offset slightly from center
            petal.position.x = Math.cos(angle) * 0.15;
            petal.position.y = Math.sin(angle) * 0.15;
            lotusGroup.add(petal);
        }

        // Lotus Center (Bindu)
        const centerGeo = new THREE.SphereGeometry(0.2, 32, 16);
        centerGeo.scale(1, 1, 0.4); // Flatten it
        const centerMesh = new THREE.Mesh(centerGeo, highlightMaterial);
        centerMesh.position.z = 0.05;
        lotusGroup.add(centerMesh);

        lotusGroup.scale.set(0.8, 0.8, 1);
        lotusGroup.position.z = 0.25;
        coinGroup.add(lotusGroup);

        // 4. Decor: "Sanskari" Text (Back)
        const loader = new FontLoader();
        // Using a reliable CDN for the font
        loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function (font) {

            const textGeo = new TextGeometry('SANSKARI', {
                font: font,
                size: 0.4,
                depth: 0.1, // Extrusion depth
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.02,
                bevelSize: 0.01,
                bevelOffset: 0,
                bevelSegments: 3
            });

            // Center the text
            textGeo.computeBoundingBox();
            const centerOffset = - 0.5 * (textGeo.boundingBox!.max.x - textGeo.boundingBox!.min.x);
            textGeo.translate(centerOffset, -0.25, 0); // Center X, adjust Y to center visually

            const textMesh = new THREE.Mesh(textGeo, highlightMaterial);

            textMesh.position.z = -0.28; // Embed slightly or sit on back face
            textMesh.rotation.y = Math.PI; // Flip it to face backwards

            coinGroup.add(textMesh);
            setLoading(false); // Only finish loading once font is ready
        },
            undefined,
            function (err) {
                console.error("Font load error", err);
                setLoading(false); // Ensure loading state clears even on error
            });


        // --- Particles (Background Atmosphere) ---
        const particlesGeo = new THREE.BufferGeometry();
        const particleCount = 200;
        const posArray = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 20;
        }

        particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMat = new THREE.PointsMaterial({
            size: 0.05,
            color: 0xffd700,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particlesMesh);


        // --- Interaction Variables ---
        const mouse = new THREE.Vector2();
        const targetRotation = new THREE.Vector2();
        const windowHalfX = width / 2;
        const windowHalfY = height / 2;

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX - windowHalfX) * 0.001;
            mouse.y = (event.clientY - windowHalfY) * 0.001;
        };

        document.addEventListener('mousemove', onMouseMove);


        // --- Animation Loop ---
        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const elapsed = clock.getElapsedTime();

            // Coin Base Spin - INCREASED SPEED HERE
            coinGroup.rotation.y += 0.04;

            // Coin Float (Bobbing)
            coinGroup.position.y = Math.sin(elapsed * 1.5) * 0.2;

            // Mouse Parallax Effect
            targetRotation.x = mouse.y * 0.5;
            targetRotation.y = mouse.x * 0.5;

            coinGroup.rotation.x += (targetRotation.x - coinGroup.rotation.x) * 0.05;
            coinGroup.rotation.z += (-targetRotation.y - coinGroup.rotation.z) * 0.05;

            // Rotate Particles
            particlesMesh.rotation.y = -elapsed * 0.05;
            particlesMesh.rotation.x = elapsed * 0.02;

            renderer.render(scene, camera);
        };

        animate();

        // --- Cleanup & Resize ---
        const handleResize = () => {
            if (!mountRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(frameId);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }

            coinGeo.dispose();
            ringGeo.dispose();
            petalGeo.dispose();
            centerGeo.dispose();
            particlesGeo.dispose();
            goldMaterial.dispose();
            highlightMaterial.dispose();
            particlesMat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center h-screen w-full bg-[#050505] overflow-hidden">

            {/* Cinematic Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2b0a0a_0%,_#000000_100%)] opacity-80 pointer-events-none" />

            {/* Decorative Blur Orbs (Saffron/Gold hues) */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-900/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            {/* 3D Canvas Container */}
            <div
                ref={mountRef}
                className="relative z-10 w-full max-w-[800px] h-[600px] outline-none cursor-grab active:cursor-grabbing"
            />

            {/* Minimal UI Overlay */}
            <div className={`absolute bottom-20 flex flex-col items-center transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-80'}`}>
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-sm md:text-base font-light tracking-[0.5em] text-white/80 uppercase font-sans">
                        Loading
                    </h2>

                    {/* Elegant Progress Line */}
                    <div className="h-[1px] w-24 bg-white/10 overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent animate-[shimmer_2s_infinite]"></div>
                    </div>

                    <p className="text-[10px] text-white/40 tracking-widest pt-2">
                        PLEASE WAIT
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
        </div>
    );
}
