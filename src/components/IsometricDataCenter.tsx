import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const IsometricDataCenter = () => {
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
    directLight.shadow.mapSize.width = 2048;
    directLight.shadow.mapSize.height = 2048;
    scene.add(directLight);

    const pointLight = new THREE.PointLight(0xf5c518, 1, 20);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    // Materials
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a });
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xf5c518, metalness: 0.1, roughness: 0.8 });
    const rackMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const detailMat = new THREE.MeshStandardMaterial({ color: 0xf5c518, emissive: 0xf5c518, emissiveIntensity: 0.5 });

    // Floor
    const floor = new THREE.Mesh(new THREE.BoxGeometry(16, 0.5, 16), floorMat);
    floor.position.y = -0.25;
    floor.receiveShadow = true;
    scene.add(floor);

    // Grid pattern on floor
    const grid = new THREE.GridHelper(16, 16, 0x000000, 0x000000);
    grid.position.y = 0.01;
    (grid.material as THREE.Material).opacity = 0.1;
    (grid.material as THREE.Material).transparent = true;
    scene.add(grid);

    // Walls
    const wallBack = new THREE.Mesh(new THREE.BoxGeometry(16.5, 8, 0.5), wallMat);
    wallBack.position.set(0, 3.75, -8.25);
    wallBack.receiveShadow = true;
    wallBack.castShadow = true;
    scene.add(wallBack);

    const wallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.5, 8, 16.5), wallMat);
    wallLeft.position.set(-8.25, 3.75, 0);
    wallLeft.receiveShadow = true;
    wallLeft.castShadow = true;
    scene.add(wallLeft);

    // Server Racks
    const rackGroup = new THREE.Group();
    const rows = 3;
    const cols = 3;
    const spacingX = 4;
    const spacingZ = 4;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const rack = new THREE.Group();
        const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 4, 1.5), rackMat);
        body.position.y = 2;
        body.castShadow = true;
        body.receiveShadow = true;
        rack.add(body);

        // Yellow LED lines
        const led1 = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.05, 1.52), detailMat);
        led1.position.y = 1;
        rack.add(led1);

        const led2 = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.05, 1.52), detailMat);
        led2.position.y = 3;
        rack.add(led2);

        rack.position.set((i - 1) * spacingX, 0, (j - 1) * spacingZ);
        rackGroup.add(rack);
      }
    }
    scene.add(rackGroup);

    // Overhead Ducts
    const ductMat = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const ductMain = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 16), ductMat);
    ductMain.position.set(0, 6, 0);
    ductMain.castShadow = true;
    scene.add(ductMain);

    const ductCross = new THREE.Mesh(new THREE.BoxGeometry(16, 0.6, 0.6), ductMat);
    ductCross.position.set(0, 6, 0);
    ductCross.castShadow = true;
    scene.add(ductCross);

    // Animation
    const animate = () => {
      const time = Date.now() * 0.001;
      scene.rotation.y = Math.sin(time * 0.2) * 0.05;
      
      // Pulse detail intensity
      detailMat.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.3;
      
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

export default IsometricDataCenter;
