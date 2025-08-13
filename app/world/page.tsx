'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

type Obj = {
  id: string;
  kind: 'stone' | 'bench' | 'tree' | 'candle';
  position: [number, number, number];
  rotationY?: number;
  scale?: number;
};

const STARTER: Obj[] = [
  { id: 'stone-1', kind: 'stone', position: [0,0, -3], rotationY: 0.2, scale: 1 },
  { id: 'bench-1', kind: 'bench', position: [2,0,-5], rotationY: Math.PI/2, scale: 1 },
  { id: 'tree-1',  kind: 'tree',  position: [-3,0,-6], rotationY: 0, scale: 1.2 }
];

export default function WorldPage() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [objects, setObjects] = useState<Obj[]>(() => {
    try {
      const saved = localStorage.getItem('plot_state');
      if (saved) return JSON.parse(saved);
    } catch {}
    return STARTER;
  });
  const [selected, setSelected] = useState<string | null>(null);
  const [placing, setPlacing] = useState<Obj['kind']>('candle');

  useEffect(() => {
    localStorage.setItem('plot_state', JSON.stringify(objects));
  }, [objects]);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0b0f14');

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(6, 6, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Lighting
    const hemi = new THREE.HemisphereLight(0xffffff, 0x223344, 0.7);
    scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xffffff, 0.7);
    dir.position.set(5, 10, 2);
    scene.add(dir);

    // Ground
    const groundGeo = new THREE.PlaneGeometry(30, 30, 1, 1);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x133a2c, roughness: 0.9, metalness: 0.0 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Helpers to create meshes
    function makeStone() {
      const geo = new THREE.DodecahedronGeometry(0.7, 1);
      const mat = new THREE.MeshStandardMaterial({ color: 0xbfbfbf, roughness: 0.8, metalness: 0.1 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      return mesh;
    }
    function makeBench() {
      const group = new THREE.Group();
      const wood = new THREE.MeshStandardMaterial({ color: 0x7a5230, roughness: 0.9 });
      const seat = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.1, 0.5), wood);
      seat.position.y = 0.5;
      group.add(seat);
      const back = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.4, 0.1), wood);
      back.position.set(0, 0.8, -0.2);
      group.add(back);
      const legGeo = new THREE.BoxGeometry(0.1, 0.5, 0.1);
      const leg1 = new THREE.Mesh(legGeo, wood); leg1.position.set(-0.8, 0.25, 0.2);
      const leg2 = new THREE.Mesh(legGeo, wood); leg2.position.set(0.8, 0.25, 0.2);
      group.add(leg1, leg2);
      group.traverse(o => { if ((o as any).isMesh) (o as any).castShadow = true; });
      return group;
    }
    function makeTree() {
      const group = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.22, 2, 8), new THREE.MeshStandardMaterial({ color: 0x5c3a21 }));
      trunk.position.y = 1;
      group.add(trunk);
      const foliage = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 1), new THREE.MeshStandardMaterial({ color: 0x2a7b53 }));
      foliage.position.y = 2.1;
      foliage.castShadow = true;
      group.add(foliage);
      return group;
    }
    function makeCandle() {
      const group = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.3, 16), new THREE.MeshStandardMaterial({ color: 0xfaf7f0 }));
      body.position.y = 0.15;
      group.add(body);
      const flame = new THREE.PointLight(0xffdd99, 1, 5);
      flame.position.y = 0.4;
      group.add(flame);
      return group;
    }

    // Add and track objects
    const objectMap = new Map<string, THREE.Object3D>();
    function addObject(obj: Obj) {
      let mesh: THREE.Object3D;
      if (obj.kind === 'stone') mesh = makeStone();
      else if (obj.kind === 'bench') mesh = makeBench();
      else if (obj.kind === 'tree') mesh = makeTree();
      else mesh = makeCandle();
      mesh.position.set(...obj.position);
      mesh.rotation.y = obj.rotationY || 0;
      const s = obj.scale || 1;
      mesh.scale.setScalar(s);
      mesh.name = obj.id;
      scene.add(mesh);
      objectMap.set(obj.id, mesh);
    }

    objects.forEach(addObject);

    // Raycaster for placing/selecting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    function onClick(ev: MouseEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([ground], false);
      if (intersects.length) {
        const p = intersects[0].point;
        const id = `${placing}-${Math.random().toString(36).slice(2, 8)}`;
        const newObj: Obj = { id, kind: placing, position: [p.x, 0, p.z], rotationY: 0, scale: 1 };
        setObjects(prev => [...prev, newObj]);
        // Immediate visual feedback
        addObject(newObj);
      }
    }
    renderer.domElement.addEventListener('click', onClick);

    // Orbit controls (basic)
    let isDragging = false;
    let lastX = 0, lastY = 0;
    function onDown(e: MouseEvent){ isDragging = true; lastX = e.clientX; lastY = e.clientY; }
    function onUp(){ isDragging = false; }
    function onMove(e: MouseEvent){
      if(!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      camera.position.applyAxisAngle(new THREE.Vector3(0,1,0), -dx * 0.005);
      camera.position.y = Math.max(2, Math.min(12, camera.position.y - dy * 0.02));
      camera.lookAt(0,0,0);
    }
    renderer.domElement.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);

    function onResize(){
      if(!mount) return;
      camera.aspect = mount.clientWidth/mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }
    window.addEventListener('resize', onResize);

    camera.lookAt(0,0,0);
    let raf = 0;
    const tick = () => { raf = requestAnimationFrame(tick); renderer.render(scene, camera); };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      renderer.domElement.removeEventListener('mousedown', onDown);
      renderer.domElement.removeEventListener('click', onClick);
      mount.removeChild(renderer.domElement);
    };
  }, [mountRef, placing]); // rebind click when placing changes

  return (
    <div className="card">
      <h1>Your Plot</h1>
      <p className="small">Click on the ground to place items. Your design saves locally. We’ll wire it to Supabase next.</p>
      <div className="world-wrap" ref={mountRef}>Loading world…</div>
      <div className="controls">
        <label>Add:</label>
        {(['stone','bench','tree','candle'] as const).map(k => (
          <button key={k} className="btn" onClick={() => setPlacing(k)} aria-pressed={placing===k}>{k}</button>
        ))}
        <button className="btn secondary" onClick={() => {
          localStorage.removeItem('plot_state');
          setObjects([]);
          location.reload();
        }}>Clear Plot</button>
        <button className="btn" onClick={() => {
          const data = localStorage.getItem('plot_state') || '[]';
          navigator.clipboard.writeText(data);
          alert('Copied current plot JSON to clipboard.');
        }}>Copy Plot JSON</button>
      </div>
    </div>
  );
}
