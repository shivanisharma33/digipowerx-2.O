import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const IsometricEnergyGen = () => {
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
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xf5c518, metalness: 0.1, roughness: 0.8 });
    const industrialMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const energyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xf5c518, emissiveIntensity: 2 });
    const silverMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9, roughness: 0.1 });

    // Floor
    const floor = new THREE.Mesh(new THREE.BoxGeometry(16, 0.5, 16), floorMat);
    floor.position.y = -0.25;
    floor.receiveShadow = true;
    scene.add(floor);

    // Central Turbine Unit
    const turbine = new THREE.Group();
    
    // Main Body
    const body = new THREE.Mesh(new THREE.CylinderGeometry(2, 2.2, 6, 32), industrialMat);
    body.rotation.z = Math.PI / 2;
    body.position.y = 1.5;
    body.castShadow = true;
    turbine.add(body);

    // Silver Rings
    for (let i = -2; i <= 2; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.1, 16, 64), silverMat);
      ring.rotation.y = Math.PI / 2;
      ring.position.set(i * 1.2, 1.5, 0);
      turbine.add(ring);
    }

    // Energy Core (Glowing line inside)
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 6.2, 16), energyMat);
    core.rotation.z = Math.PI / 2;
    core.position.y = 1.5;
    turbine.add(core);

    // Support Legs
    for (let x = -2; x <= 2; x += 4) {
      for (let z = -1.5; z <= 1.5; z += 3) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.5, 0.6), industrialMat);
        leg.position.set(x, 0.75, z);
        turbine.add(leg);
      }
    }

    scene.add(turbine);

    // Power Lines
    const lineGeo = new THREE.CylinderGeometry(0.1, 0.1, 8);
    const lineMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const line1 = new THREE.Mesh(lineGeo, lineMat);
    line1.position.set(0, 0.1, 6);
    line1.rotation.z = Math.PI / 2;
    scene.add(line1);

    const line2 = new THREE.Mesh(lineGeo, lineMat);
    line2.position.set(0, 0.1, -6);
    line2.rotation.z = Math.PI / 2;
    scene.add(line2);

    // Animation
    const animate = () => {
      const time = Date.now() * 0.001;
      turbine.rotation.x = Math.sin(time * 0.1) * 0.05;
      energyMat.emissiveIntensity = 1.5 + Math.sin(time * 4) * 0.5;
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

export default IsometricEnergyGen;
