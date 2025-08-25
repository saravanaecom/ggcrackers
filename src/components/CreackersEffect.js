import React, { useRef, useEffect } from 'react';

const colours = ['#ff3', '#f03', '#0f0', '#93f', '#0cf', '#f93', '#f0c'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const CrackersEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

  let fireworks = [];
  let lastFrameTime = 0;
  const MAX_FIREWORKS = 4;
  const MAX_PARTICLES = 40;

    function createRocket() {
      const side = Math.floor(Math.random() * 3); // bottom, left, right
      let x, y, vx, vy;
      const color = colours[Math.floor(Math.random() * colours.length)];
      const speed = randomBetween(5, 8);

      if (side === 0) {
        x = randomBetween(width * 0.2, width * 0.8);
        y = height;
        vx = 0;
        vy = -speed;
      } else if (side === 1) {
        x = 0;
        y = randomBetween(height * 0.4, height * 0.8);
        vx = speed;
        vy = -randomBetween(2, 5);
      } else {
        x = width;
        y = randomBetween(height * 0.4, height * 0.8);
        vx = -speed;
        vy = -randomBetween(2, 5);
      }

      return {
        x, y, vx, vy, color,
        exploded: false,
        particles: [],
        trail: [],
      };
    }

    function createParticles(x, y, color, type = 'flowerpot') {
      const particles = [];
      let count = MAX_PARTICLES;
      let speedRange = [2, 5];
      switch (type) {
        case 'ring':
          count = Math.floor(MAX_PARTICLES * 0.8);
          speedRange = [3, 4];
          break;
        case 'chrysanthemum':
          count = Math.floor(MAX_PARTICLES * 1.2);
          speedRange = [2, 6];
          break;
        case 'random':
          count = Math.floor(MAX_PARTICLES * 0.7);
          speedRange = [2, 7];
          break;
        default:
          count = MAX_PARTICLES;
          speedRange = [2, 5];
      }
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = randomBetween(...speedRange);
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
        });
      }
      return particles;
    }

    function animate(now) {
      // Cap to 60 FPS
      if (now && lastFrameTime && now - lastFrameTime < 16) {
        requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = now || performance.now();
      ctx.clearRect(0, 0, width, height);

      fireworks.forEach((fw) => {
        if (!fw.exploded) {
          // Rocket trail
          fw.trail.push({ x: fw.x, y: fw.y });
          if (fw.trail.length > 10) fw.trail.shift();

          ctx.beginPath();
          ctx.moveTo(fw.x, fw.y);
          fw.trail.forEach((t) => {
            ctx.lineTo(t.x, t.y);
          });
          ctx.strokeStyle = fw.color;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Rocket head
          ctx.beginPath();
          ctx.arc(fw.x, fw.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = fw.color;
          ctx.shadowBlur = 8; // Lowered for performance
          ctx.shadowColor = fw.color;
          ctx.fill();
          ctx.shadowBlur = 0;

          fw.x += fw.vx;
          fw.y += fw.vy;
          fw.vy += 0.02;

          if (fw.vy >= 0 || Math.random() < 0.005) {
            fw.exploded = true;
            const burstTypes = ['flowerpot', 'chrysanthemum', 'ring', 'random'];
            const type = burstTypes[Math.floor(Math.random() * burstTypes.length)];
            fw.particles = createParticles(fw.x, fw.y, fw.color, type);
          }
        } else {
          fw.particles.forEach((p) => {
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 5; // Lowered for performance
            ctx.shadowColor = p.color;
            ctx.fill();
            ctx.shadowBlur = 0;

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.alpha -= 0.02;
          });
          ctx.globalAlpha = 1;
          fw.particles = fw.particles.filter((p) => p.alpha > 0.05);
        }
      });

      fireworks = fireworks.filter((fw) => !fw.exploded || fw.particles.length > 0);

      if (fireworks.length < MAX_FIREWORKS && Math.random() < 0.04) {
        fireworks.push(createRocket());
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CrackersEffect;
