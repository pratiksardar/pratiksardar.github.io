import React, { useRef, useEffect } from 'react';

// Retro Neon Space Shooter Game as a background
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 20;
const PLAYER_SPEED = 7;
const BULLET_WIDTH = 4;
const BULLET_HEIGHT = 12;
const BULLET_SPEED = 8;
const ENEMY_WIDTH = 32;
const ENEMY_HEIGHT = 20;
const BASE_ENEMY_SPEED = 2.5;
const BASE_ENEMY_SPAWN_INTERVAL = 60; // frames
const START_LIVES = 3;

function randomNeonColor() {
  const colors = ['#0fffc1', '#ff00cc', '#fff', '#f472b6', '#2d00f7', '#00ffe7', '#fffb00'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function SpaceShooterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Responsive
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Game state
    let playerX = width / 2 - PLAYER_WIDTH / 2;
    let bullets: { x: number; y: number }[] = [];
    let enemies: { x: number; y: number; color: string }[] = [];
    let frame = 0;
    let left = false, right = false, space = false;
    let canShoot = true;
    let score = 0;
    let highScore = Number(localStorage.getItem('spaceShooterHighScore') || 0);
    let newHighScore = false;
    let lives = START_LIVES;
    let gameOver = false;
    let enemySpeed = BASE_ENEMY_SPEED;
    let enemySpawnInterval = BASE_ENEMY_SPAWN_INTERVAL;

    // Controls
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') left = true;
      if (e.key === 'ArrowRight') right = true;
      if (e.key === ' ' || e.key === 'Spacebar') space = true;
      if (gameOver && (e.key === 'r' || e.key === 'R')) restartGame();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') left = false;
      if (e.key === 'ArrowRight') right = false;
      if (e.key === ' ' || e.key === 'Spacebar') space = false;
      canShoot = true;
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    // Mouse controls (move player)
    const onMouseMove = (e: MouseEvent) => {
      playerX = e.clientX - PLAYER_WIDTH / 2;
    };
    canvas.addEventListener('mousemove', onMouseMove);

    // Draw neon shapes
    function neonRect(x: number, y: number, w: number, h: number, color: string) {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 18;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
      ctx.restore();
    }
    function neonTriangle(x: number, y: number, w: number, h: number, color: string) {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 18;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x + w / 2, y);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x + w, y + h);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    function drawBackground() {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#1a0033');
      gradient.addColorStop(0.3, '#0fffc1');
      gradient.addColorStop(0.6, '#2d00f7');
      gradient.addColorStop(1, '#000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      // Stars
      for (let i = 0; i < 60; i++) {
        const sx = Math.random() * width;
        const sy = Math.random() * height;
        ctx.save();
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(sx, sy, Math.random() * 1.5 + 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    function drawScore() {
      ctx.save();
      ctx.font = 'bold 32px Orbitron, monospace';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#ff00cc';
      ctx.shadowBlur = 16;
      ctx.fillStyle = '#fff';
      ctx.fillText(`SCORE: ${score}`, width / 2, 48);
      ctx.font = 'bold 20px Orbitron, monospace';
      ctx.shadowColor = '#0fffc1';
      ctx.fillText(`HIGH: ${highScore}`, width / 2, 80);
      ctx.restore();
      if (newHighScore) {
        ctx.save();
        ctx.font = 'bold 28px Orbitron, monospace';
        ctx.textAlign = 'center';
        ctx.shadowColor = '#fffb00';
        ctx.shadowBlur = 24;
        ctx.fillStyle = '#fffb00';
        ctx.fillText('NEW HIGH SCORE!', width / 2, 120);
        ctx.restore();
      }
    }
    function drawLives() {
      ctx.save();
      ctx.font = 'bold 20px Orbitron, monospace';
      ctx.textAlign = 'left';
      ctx.shadowColor = '#ff00cc';
      ctx.shadowBlur = 12;
      ctx.fillStyle = '#fff';
      ctx.fillText(`LIVES: ${lives}`, 32, 48);
      ctx.restore();
    }
    function drawGameOver() {
      ctx.save();
      ctx.font = 'bold 48px Orbitron, monospace';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#ff00cc';
      ctx.shadowBlur = 32;
      ctx.fillStyle = '#fff';

      ctx.restore();
      ctx.save();
      ctx.font = 'bold 28px Orbitron, monospace';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#0fffc1';
      ctx.shadowBlur = 16;
      ctx.fillStyle = '#0fffc1';
      ctx.fillText('GAME OVER', width / 2, height - 75);
      ctx.fillText('Press R to Restart', width / 2, height - 48);
      ctx.restore();
    }

    function restartGame() {
      playerX = width / 2 - PLAYER_WIDTH / 2;
      bullets = [];
      enemies = [];
      frame = 0;
      score = 0;
      lives = START_LIVES;
      gameOver = false;
      newHighScore = false;
      enemySpeed = BASE_ENEMY_SPEED;
      enemySpawnInterval = BASE_ENEMY_SPAWN_INTERVAL;
    }

    // Game loop
    function loop() {
      drawBackground();
      if (gameOver) {
        drawScore();
        drawLives();
        drawGameOver();
        animationRef.current = requestAnimationFrame(loop);
        return;
      }
      // Increase difficulty
      enemySpeed = BASE_ENEMY_SPEED + Math.floor(score / 100) * 0.7;
      enemySpawnInterval = Math.max(20, BASE_ENEMY_SPAWN_INTERVAL - Math.floor(score / 100) * 8);
      // Move player
      if (left) playerX -= PLAYER_SPEED;
      if (right) playerX += PLAYER_SPEED;
      playerX = Math.max(0, Math.min(width - PLAYER_WIDTH, playerX));
      // Shoot
      if (space && canShoot) {
        bullets.push({ x: playerX + PLAYER_WIDTH / 2 - BULLET_WIDTH / 2, y: height - PLAYER_HEIGHT - BULLET_HEIGHT });
        canShoot = false;
      }
      // Move bullets
      bullets = bullets.filter(b => b.y > -BULLET_HEIGHT);
      bullets.forEach(b => b.y -= BULLET_SPEED);
      // Spawn enemies
      if (frame % enemySpawnInterval === 0) {
        const ex = Math.random() * (width - ENEMY_WIDTH);
        enemies.push({ x: ex, y: -ENEMY_HEIGHT, color: randomNeonColor() });
      }
      // Move enemies
      enemies = enemies.filter(e => e.y < height + ENEMY_HEIGHT);
      enemies.forEach(e => e.y += enemySpeed);
      // Collision detection
      bullets.forEach((b, bi) => {
        enemies.forEach((e, ei) => {
          if (
            b.x < e.x + ENEMY_WIDTH &&
            b.x + BULLET_WIDTH > e.x &&
            b.y < e.y + ENEMY_HEIGHT &&
            b.y + BULLET_HEIGHT > e.y
          ) {
            // Remove bullet and enemy
            bullets.splice(bi, 1);
            enemies.splice(ei, 1);
            score += 10;
            if (score > highScore) {
              highScore = score;
              localStorage.setItem('spaceShooterHighScore', String(highScore));
              newHighScore = true;
            }
          }
        });
      });
      // Enemy reaches bottom (lose life)
      enemies.forEach((e, ei) => {
        if (e.y + ENEMY_HEIGHT >= height - PLAYER_HEIGHT - 8) {
          enemies.splice(ei, 1);
          lives--;
          if (lives <= 0) {
            gameOver = true;
          }
        }
      });
      // Draw player
      neonTriangle(playerX, height - PLAYER_HEIGHT - 8, PLAYER_WIDTH, PLAYER_HEIGHT, '#0fffc1');
      // Draw bullets
      bullets.forEach(b => neonRect(b.x, b.y, BULLET_WIDTH, BULLET_HEIGHT, '#fff'));
      // Draw enemies
      enemies.forEach(e => neonRect(e.x, e.y, ENEMY_WIDTH, ENEMY_HEIGHT, e.color));
      // Draw score and lives
      drawScore();
      drawLives();
      animationRef.current = requestAnimationFrame(loop);
      frame++;
    }
    loop();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      canvas.removeEventListener('mousemove', onMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-auto select-none"
      tabIndex={-1}
      aria-label="Space shooter game background"
    />
  );
} 