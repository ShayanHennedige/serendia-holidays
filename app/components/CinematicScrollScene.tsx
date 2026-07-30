'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Chapter {
  eyebrow: string;
  title: string;
  caption: string;
  copy: string;
  image: string;
  alt: string;
  focus: [number, number, number];
  camera: [number, number, number];
  scale: [number, number];
  rotation: [number, number, number];
}

const storyChapters: Chapter[] = [
  {
    eyebrow: 'Chapter 01',
    title: 'Sunset Beach Arrival',
    caption: 'Fishing boat on a Sri Lankan beach at sunset',
    copy: 'The journey opens with warm ocean light, palm silhouettes, and a quiet fishing boat resting on the sand.',
    image: '/images/hero-4.png',
    alt: 'Fishing boat on a Sri Lankan beach at sunset',
    focus: [0, 0.06, 0],
    camera: [-0.25, 0.16, 5.2],
    scale: [7.2, 4.7],
    rotation: [0.02, -0.12, 0],
  },
  {
    eyebrow: 'Chapter 02',
    title: 'Leopard in the Forest',
    caption: 'Sri Lankan leopard resting in a green jungle reserve',
    copy: 'The coast gives way to forest depth, where the leopard becomes the focus and the surrounding leaves drift with parallax.',
    image: '/images/hero-3.png',
    alt: 'Sri Lankan leopard resting in a green jungle reserve',
    focus: [2.15, -0.08, -1.25],
    camera: [1.72, 0.02, 3.95],
    scale: [5.2, 5.2],
    rotation: [-0.02, 0.18, 0.02],
  },
  {
    eyebrow: 'Chapter 03',
    title: 'Painted Cave Temple',
    caption: 'Historic Sri Lankan cave temple with painted ceilings and a stupa',
    copy: 'The camera slides into painted ceilings, stone texture, and temple detail so the image reads as a heritage chapter.',
    image: '/images/tour-polonnaruwa.png',
    alt: 'Historic Sri Lankan cave temple with painted ceilings and a stupa',
    focus: [-2.05, -0.16, -2.55],
    camera: [-2.48, -0.02, 2.45],
    scale: [5.5, 3.9],
    rotation: [0.05, -0.22, -0.018],
  },
  {
    eyebrow: 'Chapter 04',
    title: 'Moonlit Ancient Temple',
    caption: 'Illuminated ancient Sri Lankan temple under a moonlit sky',
    copy: 'The final scene settles on an illuminated temple at night, turning the journey from visual wonder into an itinerary.',
    image: '/images/hero-1.png',
    alt: 'Illuminated ancient Sri Lankan temple under a moonlit sky',
    focus: [0.55, 0.18, -3.85],
    camera: [0.26, 0.22, 1.25],
    scale: [5, 3.45],
    rotation: [0.08, 0.1, 0.01],
  },
];

export default function CinematicScrollScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [matches, setMatches] = useState<{ slug: string; title: string; href: string; type: string; reason: string }[]>([]);
  const { locale, dictionary: { hero } } = useLanguage();

  const discover = async (event: FormEvent) => {
    event.preventDefault();
    if (!query.trim() || searching) return;
    setSearching(true);
    try {
      const response = await fetch('/api/ai/search', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ query, language: locale }),
      });
      const data = await response.json();
      setMatches(response.ok ? data.results.slice(0, 3) : []);
    } finally {
      setSearching(false);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const section = sectionRef.current;

    if (!canvas || !section) {
      return undefined;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x061818, 0.085);

    const camera = new THREE.PerspectiveCamera(43, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(...storyChapters[0].camera);

    const cameraTarget = new THREE.Vector3(...storyChapters[0].focus);

    const group = new THREE.Group();
    scene.add(group);

    const ambient = new THREE.AmbientLight(0xffffff, 0.68);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffc08a, 2.5);
    sun.position.set(-3, 4, 5);
    scene.add(sun);

    const rim = new THREE.PointLight(0x60f4ff, 2.2, 14);
    rim.position.set(3.2, -1.4, 3);
    scene.add(rim);

    const textureLoader = new THREE.TextureLoader();
    const planes = storyChapters.map((chapter, index) => {
      const texture = textureLoader.load(chapter.image);
      texture.colorSpace = THREE.SRGBColorSpace;

      const geometry = new THREE.PlaneGeometry(chapter.scale[0], chapter.scale[1], 28, 18);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        roughness: 0.72,
        metalness: 0.04,
        opacity: index === 0 ? 1 : 0.14,
        emissive: new THREE.Color(0x061b1c),
        emissiveIntensity: index === 0 ? 0.14 : 0.04,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...chapter.focus);
      mesh.rotation.set(...chapter.rotation);
      mesh.userData.baseX = chapter.focus[0];
      mesh.userData.baseY = chapter.focus[1];
      mesh.userData.baseZ = chapter.focus[2];
      mesh.userData.depth = index + 1;
      group.add(mesh);
      return mesh;
    });

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 140;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 13;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.018,
      transparent: true,
      opacity: 0.56,
    });
    const particles = new THREE.Points(starGeometry, starMaterial);
    scene.add(particles);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.1,
      },
    });

    storyChapters.forEach((chapter, index) => {
      const position = index / (storyChapters.length - 1);

      timeline
        .to(camera.position, {
          x: chapter.camera[0],
          y: chapter.camera[1],
          z: chapter.camera[2],
          ease: 'power2.inOut',
        }, position)
        .to(cameraTarget, {
          x: chapter.focus[0],
          y: chapter.focus[1],
          z: chapter.focus[2],
          ease: 'power2.inOut',
        }, position)
        .to(group.rotation, {
          x: chapter.rotation[0] * 0.75,
          y: chapter.rotation[1] * 0.9,
          z: chapter.rotation[2] * 0.9,
          ease: 'power2.inOut',
        }, position)
        .to(sun.position, {
          x: index % 2 === 0 ? -3 : 3,
          y: 3.4 - index * 0.18,
          z: 5 - index * 0.45,
          ease: 'sine.inOut',
        }, position)
        .to(rim.position, {
          x: index % 2 === 0 ? 3.2 : -2.8,
          y: -1 + index * 0.82,
          z: 3.2 - index * 0.4,
          ease: 'sine.inOut',
        }, position);

      planes.forEach((plane, planeIndex) => {
        timeline.to(plane.material, {
          opacity: planeIndex === index ? 1 : 0.12,
          emissiveIntensity: planeIndex === index ? 0.16 : 0.035,
          ease: 'sine.inOut',
        }, position);
        timeline.to(plane.scale, {
          x: planeIndex === index ? 1.08 : 0.96,
          y: planeIndex === index ? 1.08 : 0.96,
          z: 1,
          ease: 'sine.inOut',
        }, position);
      });
    });

    timeline.to(starMaterial, { opacity: 0.2, ease: 'sine.inOut' }, 0.75);

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      planes.forEach((plane) => {
        const depth = plane.userData.depth as number;
        gsap.to(plane.position, {
          x: plane.userData.baseX + x * depth * 0.045,
          y: plane.userData.baseY - y * depth * 0.035,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', handleResize);

    let animationFrame: number;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsed = clock.getElapsedTime();
      particles.rotation.y = elapsed * 0.025;
      particles.rotation.x = Math.sin(elapsed * 0.18) * 0.02;
      planes.forEach((plane, index) => {
        plane.position.z = plane.userData.baseZ + Math.sin(elapsed * 0.35 + index) * 0.025;
      });

      camera.lookAt(cameraTarget);
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
      timeline.kill();
      planes.forEach((plane) => {
        plane.geometry.dispose();
        if (plane.material.map) {
          plane.material.map.dispose();
        }
        plane.material.dispose();
      });
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="cinematic-scroll" ref={sectionRef}>
      <div className="cinematic-sticky">
        <canvas ref={canvasRef} className="cinematic-canvas" aria-label="Cinematic 3D Sri Lanka travel scene" />
        <div className="cinematic-vignette" />
        <div className="cinematic-copy">
          <span>{hero.kicker}</span>
          <h1>{hero.title}</h1>
          <p>{hero.copy}</p>
          <form className="cinematic-ai-search" onSubmit={discover}>
            <div className="cinematic-ai-label"><i /> {hero.ask}</div>
            <div className="cinematic-ai-input-row">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={hero.placeholder}
                aria-label="Describe your ideal Sri Lanka trip"
              />
              <button type="submit" disabled={searching} aria-label="Find matching journeys">{searching ? '···' : '↗'}</button>
            </div>
            {matches.length > 0 && (
              <div className="cinematic-ai-results">
                {matches.map((match) => (
                  <Link href={match.href} key={match.slug}>
                    <small>{match.type}</small><strong>{match.title}</strong><span>{match.reason}</span>
                  </Link>
                ))}
              </div>
            )}
          </form>
          <div className="cinematic-actions">
            <a href="/customize">{hero.build}</a>
            <a href="/tours">{hero.explore}</a>
          </div>
        </div>
      </div>

      <div className="cinematic-chapters" aria-label="Scroll animation prompts">
        {storyChapters.map((chapter) => (
          <article key={chapter.title} className="cinematic-chapter">
            <span>{chapter.eyebrow}</span>
            <h2>{chapter.title}</h2>
            <small>{chapter.caption}</small>
            <p>{chapter.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
