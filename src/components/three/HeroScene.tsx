import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import type { DeviceTier } from "@/hooks/useDeviceTier";

interface HeroSceneProps {
  pointer: React.RefObject<{ x: number; y: number }>;
  scrollRef: React.RefObject<number>;
  tier: DeviceTier;
}

const TIER_CONFIG: Record<DeviceTier, { nodes: number; particles: number; neighbors: number; coreLinks: number }> = {
  desktop: { nodes: 42, particles: 200, neighbors: 2, coreLinks: 7 },
  tablet: { nodes: 28, particles: 110, neighbors: 2, coreLinks: 6 },
  mobile: { nodes: 16, particles: 60, neighbors: 1, coreLinks: 4 },
};

function fibonacciSphere(count: number, radius: number, seed: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));

  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    const jitter = 0.12;
    const x = Math.cos(phi) * r + (rand() - 0.5) * jitter;
    const z = Math.sin(phi) * r + (rand() - 0.5) * jitter;
    points.push(new THREE.Vector3(x, y + (rand() - 0.5) * jitter, z).multiplyScalar(radius));
  }
  return points;
}

function buildConnections(nodes: THREE.Vector3[], neighbors: number, coreLinks: number): Float32Array {
  const segments: number[] = [];

  for (let i = 0; i < nodes.length; i++) {
    const distances = nodes
      .map((p, j) => ({ j, d: i === j ? Infinity : p.distanceTo(nodes[i]) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, neighbors);

    for (const { j } of distances) {
      segments.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
    }
  }

  const step = Math.max(1, Math.floor(nodes.length / coreLinks));
  for (let i = 0; i < nodes.length; i += step) {
    segments.push(0, 0, 0, nodes[i].x, nodes[i].y, nodes[i].z);
  }

  return new Float32Array(segments);
}

function NetworkNodes({ nodes }: { nodes: THREE.Vector3[] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const pulse = 0.75 + Math.sin(state.clock.elapsedTime * 1.4 + i) * 0.25;
      child.scale.setScalar(pulse);
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.028, 8, 8]} />
          <meshBasicMaterial color={i % 5 === 0 ? "#22d3ee" : "#6f93ff"} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function ConnectionLines({ positions }: { positions: Float32Array }) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#3b6dfb" transparent opacity={0.22} />
    </lineSegments>
  );
}

function ParticleField({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.6 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.015;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#3b6dfb" size={0.018} sizeAttenuation depthWrite={false} opacity={0.45} />
    </Points>
  );
}

function CoreNode() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const material = ref.current.material as THREE.MeshStandardMaterial;
    material.emissiveIntensity = 0.55 + Math.sin(state.clock.elapsedTime * 1.2) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.16, 32, 32]} />
      <meshStandardMaterial color="#0b1c4a" emissive="#3b6dfb" emissiveIntensity={0.6} roughness={0.25} metalness={0.7} />
    </mesh>
  );
}

export function HeroScene({ pointer, scrollRef, tier }: HeroSceneProps) {
  const config = TIER_CONFIG[tier];
  const rootRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => fibonacciSphere(config.nodes, 1.7, 42), [config.nodes]);
  const connections = useMemo(
    () => buildConnections(nodes, config.neighbors, config.coreLinks),
    [nodes, config.neighbors, config.coreLinks]
  );

  useFrame((state, delta) => {
    if (!rootRef.current) return;

    const targetRotX = pointer.current.y * 0.2;
    const targetRotY = pointer.current.x * 0.3 + (scrollRef.current ?? 0) * 0.6;

    rootRef.current.rotation.x = THREE.MathUtils.damp(rootRef.current.rotation.x, targetRotX, 3, delta);
    rootRef.current.rotation.y = THREE.MathUtils.damp(
      rootRef.current.rotation.y,
      targetRotY + state.clock.elapsedTime * 0.06,
      3,
      delta
    );
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 2, 4]} intensity={30} color="#3b6dfb" />
      <pointLight position={[-3, -2, -3]} intensity={18} color="#22d3ee" />

      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.5}>
        <group ref={rootRef}>
          <CoreNode />
          <NetworkNodes nodes={nodes} />
          <ConnectionLines positions={connections} />
        </group>
      </Float>

      <ParticleField count={config.particles} />
    </>
  );
}
