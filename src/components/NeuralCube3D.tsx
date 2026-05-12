import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NeuralCube3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let W = container.clientWidth;
    let H = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Texture (Simple Circle)
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.5, 'rgba(245, 197, 24, 0.3)');
      gradient.addColorStop(1, 'rgba(245, 197, 24, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createCircleTexture();

    // ── CUBE PARTICLES ──
    const cubeCount = 4000;
    const cubeGeometry = new THREE.BufferGeometry();
    const cubePositions = new Float32Array(cubeCount * 3);
    const cubeSize = 3.5;

    for (let i = 0; i < cubeCount; i++) {
      // Randomly place on the surface of a cube
      const side = Math.floor(Math.random() * 6);
      let x, y, z;
      const r1 = (Math.random() - 0.5) * cubeSize;
      const r2 = (Math.random() - 0.5) * cubeSize;
      const fix = cubeSize / 2;

      switch(side) {
        case 0: x = fix; y = r1; z = r2; break;
        case 1: x = -fix; y = r1; z = r2; break;
        case 2: x = r1; y = fix; z = r2; break;
        case 3: x = r1; y = -fix; z = r2; break;
        case 4: x = r1; y = r2; z = fix; break;
        default: x = r1; y = r2; z = -fix; break;
      }

      cubePositions[i * 3] = x;
      cubePositions[i * 3 + 1] = y;
      cubePositions[i * 3 + 2] = z;
    }

    cubeGeometry.setAttribute('position', new THREE.BufferAttribute(cubePositions, 3));
    const cubeMaterial = new THREE.PointsMaterial({
      size: 0.05,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      color: 0xf5c518,
      opacity: 0.3,
      depthWrite: false
    });

    const cubePoints = new THREE.Points(cubeGeometry, cubeMaterial);
    scene.add(cubePoints);

    // ── INNER BRAIN/NEURAL PARTICLES ──
    const brainCount = 3000;
    const brainGeometry = new THREE.BufferGeometry();
    const brainPositions = new Float32Array(brainCount * 3);

    for (let i = 0; i < brainCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / brainCount);
      const theta = Math.sqrt(brainCount * Math.PI) * phi;
      const r = 1.2 * (0.8 + Math.random() * 0.4); // Rough sphere/blob

      brainPositions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      brainPositions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      brainPositions[i * 3 + 2] = r * Math.cos(phi);
    }

    brainGeometry.setAttribute('position', new THREE.BufferAttribute(brainPositions, 3));
    const brainMaterial = new THREE.PointsMaterial({
      size: 0.08,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      color: 0xf5c518,
      opacity: 0.5,
      depthWrite: false
    });

    const brainPoints = new THREE.Points(brainGeometry, brainMaterial);
    scene.add(brainPoints);

    // ── CONNECTING LINES ──
    const lineCount = 100;
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineCount * 2 * 3);
    for (let i = 0; i < lineCount; i++) {
        // Random lines between points inside
        const idx1 = Math.floor(Math.random() * brainCount);
        const idx2 = Math.floor(Math.random() * brainCount);
        linePositions[i * 6] = brainPositions[idx1 * 3];
        linePositions[i * 6 + 1] = brainPositions[idx1 * 3 + 1];
        linePositions[i * 6 + 2] = brainPositions[idx1 * 3 + 2];
        linePositions[i * 6 + 3] = brainPositions[idx2 * 3];
        linePositions[i * 6 + 4] = brainPositions[idx2 * 3 + 1];
        linePositions[i * 6 + 2] = brainPositions[idx2 * 3 + 2];
    }
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xf5c518, transparent: true, opacity: 0.1 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Animation
    const animate = () => {
      const time = Date.now() * 0.001;
      
      cubePoints.rotation.y = time * 0.15;
      cubePoints.rotation.x = Math.sin(time * 0.1) * 0.1;

      brainPoints.rotation.y = -time * 0.2;
      brainPoints.scale.setScalar(1 + Math.sin(time * 2) * 0.05);

      lines.rotation.y = -time * 0.2;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      W = container.clientWidth;
      H = container.clientHeight;
      camera.aspect = W / H;
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

export default NeuralCube3D;
