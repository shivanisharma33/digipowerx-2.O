import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const IsometricGPUCompute = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let W = container.clientWidth;
    let H = container.clientHeight;

    const scene = new THREE.Scene();
    
    // Orthographic Camera for Isometric View
    const aspect = W / H;
    const d = 10;
    const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directLight = new THREE.DirectionalLight(0xffffff, 1);
    directLight.position.set(10, 20, 10);
    directLight.castShadow = true;
    scene.add(directLight);

    // Materials
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x0a0c0f, metalness: 0.8, roughness: 0.2 });
    const moduleMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const neonMat = new THREE.MeshStandardMaterial({ color: 0xf5c518, emissive: 0xf5c518, emissiveIntensity: 1 });
    const coolantMat = new THREE.MeshStandardMaterial({ color: 0xf5c518, emissive: 0xf5c518, emissiveIntensity: 0.5 });

    // Floor
    const floor = new THREE.Mesh(new THREE.BoxGeometry(16, 0.5, 16), floorMat);
    floor.position.y = -0.25;
    floor.receiveShadow = true;
    scene.add(floor);

    // GPU Compute Modules
    const moduleGroup = new THREE.Group();
    const rows = 2;
    const cols = 2;
    const spacing = 6;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const cluster = new THREE.Group();
        
        // Base Compute Unit
        const base = new THREE.Mesh(new THREE.BoxGeometry(4, 1.5, 4), moduleMat);
        base.position.y = 0.75;
        base.castShadow = true;
        cluster.add(base);

        // Neon Accents
        const accent = new THREE.Mesh(new THREE.BoxGeometry(4.1, 0.1, 4.1), neonMat);
        accent.position.y = 1.4;
        cluster.add(accent);

        // "Cooling Pipes" (Horizontal)
        const pipe1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4.5), coolantMat);
        pipe1.rotation.z = Math.PI / 2;
        pipe1.position.set(0, 0.5, 1.2);
        cluster.add(pipe1);

        const pipe2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4.5), coolantMat);
        pipe2.rotation.z = Math.PI / 2;
        pipe2.position.set(0, 0.5, -1.2);
        cluster.add(pipe2);

        // Small "Chips" on top
        for (let x = 0; x < 2; x++) {
          for (let z = 0; z < 2; z++) {
            const chip = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.4, 0.8), new THREE.MeshStandardMaterial({ color: 0x333333 }));
            chip.position.set((x - 0.5) * 1.5, 1.7, (z - 0.5) * 1.5);
            cluster.add(chip);
          }
        }

        cluster.position.set((i - 0.5) * spacing, 0, (j - 0.5) * spacing);
        moduleGroup.add(cluster);
      }
    }
    scene.add(moduleGroup);

    // Connecting Power Lines on Floor
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xf5c518, transparent: true, opacity: 0.3 });
    const line1 = new THREE.Mesh(new THREE.PlaneGeometry(16, 0.1), lineMat);
    line1.rotation.x = -Math.PI / 2;
    line1.position.y = 0.01;
    scene.add(line1);

    const line2 = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 16), lineMat);
    line2.rotation.x = -Math.PI / 2;
    line2.position.y = 0.01;
    scene.add(line2);

    // Animation
    const animate = () => {
      const time = Date.now() * 0.001;
      moduleGroup.rotation.y = Math.sin(time * 0.1) * 0.1;
      neonMat.emissiveIntensity = 0.8 + Math.sin(time * 3) * 0.4;
      coolantMat.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.2;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      const aspect = W / H;
      camera.left = -d * aspect;
      camera.right = d * aspect;
      camera.top = d;
      camera.bottom = -d;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default IsometricGPUCompute;
