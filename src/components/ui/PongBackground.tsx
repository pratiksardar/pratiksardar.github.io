import React, { useRef, useEffect } from 'react';

// Neon Pong Game as a background
const PADDLE_HEIGHT = 80;
const PADDLE_WIDTH = 12;
const BALL_SIZE = 16;
const PADDLE_MARGIN = 24;
const SPEED = 4;
const AI_SPEED = 3.2;

export default function PongBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const keys = useRef<{ up: boolean; down: boolean }>({ up: false, down: false });

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
    let playerY = height / 2 - PADDLE_HEIGHT / 2;
    let aiY = height / 2 - PADDLE_HEIGHT / 2;
    let ballX = width / 2 - BALL_SIZE / 2;
    let ballY = height / 2 - BALL_SIZE / 2;
    let ballVX = SPEED * (Math.random() > 0.5 ? 1 : -1);
    let ballVY = SPEED * (Math.random() * 2 - 1);
    let playerScore = 0;
    let aiScore = 0;

    // Keyboard controls
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') keys.current.up = true;
      if (e.key === 'ArrowDown') keys.current.down = true;
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') keys.current.up = false;
      if (e.key === 'ArrowDown') keys.current.down = false;
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // Mouse controls
    const onMouseMove = (e: MouseEvent) => {
      playerY = e.clientY - PADDLE_HEIGHT / 2;
    };
    canvas.addEventListener('mousemove', onMouseMove);

    // Draw neon glow
    function neonRect(x: number, y: number, w: number, h: number, color: string) {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 18;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
      ctx.restore();
    }
    function neonCircle(x: number, y: number, r: number, color: string) {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 18;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    function drawCenterLine() {
      for (let y = 0; y < height; y += 32) {
        neonRect(width / 2 - 2, y, 4, 16, '#fff');
      }
    }
    function drawScore() {
      ctx.save();
      ctx.font = 'bold 32px Orbitron, monospace';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#f472b6';
      ctx.shadowBlur = 16;
      ctx.fillStyle = '#fff';
      ctx.fillText(playerScore.toString(), width / 2 - 60, 48);
      ctx.fillText(aiScore.toString(), width / 2 + 60, 48);
      ctx.restore();
    }

    // Game loop
    function loop() {
      // Trippy neon gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#1a0033'); // deep purple
      gradient.addColorStop(0.3, '#0fffc1'); // neon aqua
      gradient.addColorStop(0.6, '#2d00f7'); // neon blue
      gradient.addColorStop(1, '#000'); // black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      // Move player
      if (keys.current.up) playerY -= SPEED * 1.5;
      if (keys.current.down) playerY += SPEED * 1.5;
      playerY = Math.max(0, Math.min(height - PADDLE_HEIGHT, playerY));
      // Move AI
      if (aiY + PADDLE_HEIGHT / 2 < ballY) aiY += AI_SPEED;
      else if (aiY + PADDLE_HEIGHT / 2 > ballY) aiY -= AI_SPEED;
      aiY = Math.max(0, Math.min(height - PADDLE_HEIGHT, aiY));
      // Move ball
      ballX += ballVX;
      ballY += ballVY;
      // Collisions
      // Top/bottom
      if (ballY < 0 || ballY + BALL_SIZE > height) ballVY *= -1;
      // Player paddle
      if (
        ballX < PADDLE_MARGIN + PADDLE_WIDTH &&
        ballY + BALL_SIZE > playerY &&
        ballY < playerY + PADDLE_HEIGHT
      ) {
        ballVX = Math.abs(ballVX);
        ballVY += (Math.random() - 0.5) * 2;
      }
      // AI paddle
      if (
        ballX + BALL_SIZE > width - PADDLE_MARGIN - PADDLE_WIDTH &&
        ballY + BALL_SIZE > aiY &&
        ballY < aiY + PADDLE_HEIGHT
      ) {
        ballVX = -Math.abs(ballVX);
        ballVY += (Math.random() - 0.5) * 2;
      }
      // Score
      if (ballX < 0) {
        aiScore++;
        ballX = width / 2 - BALL_SIZE / 2;
        ballY = height / 2 - BALL_SIZE / 2;
        ballVX = SPEED;
        ballVY = SPEED * (Math.random() * 2 - 1);
      }
      if (ballX > width) {
        playerScore++;
        ballX = width / 2 - BALL_SIZE / 2;
        ballY = height / 2 - BALL_SIZE / 2;
        ballVX = -SPEED;
        ballVY = SPEED * (Math.random() * 2 - 1);
      }
      // Draw
      drawCenterLine();
      drawScore();
      neonRect(PADDLE_MARGIN, playerY, PADDLE_WIDTH, PADDLE_HEIGHT, '#00ffe7');
      neonRect(width - PADDLE_MARGIN - PADDLE_WIDTH, aiY, PADDLE_WIDTH, PADDLE_HEIGHT, '#ff00cc');
      neonCircle(ballX + BALL_SIZE / 2, ballY + BALL_SIZE / 2, BALL_SIZE / 2, '#fff');
      animationRef.current = requestAnimationFrame(loop);
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
      aria-label="Pong game background"
    />
  );
} 