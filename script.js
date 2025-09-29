const canvas = document.getElementById("world");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const groundHeight = 100; // grass height
let grassOffset = 0;      // grass scrolling

// Player properties
let player = {
  x: canvas.width / 2,
  y: canvas.height - groundHeight,
  width: 20,
  height: 60,
  speed: 5,
  dx: 0
};

// Key handling
let keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

function drawBackground() {
  // Sky
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grass
  const grassPatternWidth = 50;
  ctx.fillStyle = "#228B22";
  for (let x = -grassPatternWidth + grassOffset; x < canvas.width; x += grassPatternWidth) {
    ctx.fillRect(x, canvas.height - groundHeight, grassPatternWidth, groundHeight);
  }
}

function drawPlayer() {
  const { x, y, width, height } = player;

  // Body
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;

  // Head
  ctx.beginPath();
  ctx.arc(x, y - height, 10, 0, Math.PI * 2);
  ctx.stroke();

  // Body line
  ctx.beginPath();
  ctx.moveTo(x, y - height + 10);
  ctx.lineTo(x, y - 20);
  ctx.stroke();

  // Arms
  ctx.beginPath();
  ctx.moveTo(x, y - height + 20);
  ctx.lineTo(x - 15, y - height + 35);
  ctx.moveTo(x, y - height + 20);
  ctx.lineTo(x + 15, y - height + 35);
  ctx.stroke();

  // Legs
  ctx.beginPath();
  ctx.moveTo(x, y - 20);
  ctx.lineTo(x - 15, y);
  ctx.moveTo(x, y - 20);
  ctx.lineTo(x + 15, y);
  ctx.stroke();
}

function updatePlayer() {
  if (keys["ArrowRight"]) {
    player.x += player.speed;
  }
  if (keys["ArrowLeft"]) {
    player.x -= player.speed;
  }

  // Boundaries
  if (player.x < 20) player.x = 20;
  if (player.x > canvas.width - 20) player.x = canvas.width - 20;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();
  drawPlayer();
  updatePlayer();

  // Optional: scrolling grass
  grassOffset -= 2;
  if (grassOffset <= -50) {
    grassOffset = 0;
  }

  requestAnimationFrame(animate);
}

animate();

// Resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  player.y = canvas.height - groundHeight;
});
