let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

const gameLoop = () => {
  requestAnimationFrame(gameLoop);

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0 , 1270, 720);
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.arc(400, 400, 100, 0, Math.PI * 2);
  ctx.stroke();
};

window.onload = () => {
  canvas = document.getElementById('cnvs') as HTMLCanvasElement;
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  gameLoop();
};
