const t = confetti.shapeFromText

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.birthday-container');

  container.addEventListener('click', function (event) {
    let rect = container.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    let normalizedX = x / container.offsetWidth;
    let normalizedY = y / container.offsetHeight;

    fireConfetti(normalizedX, normalizedY);
  });
});

function fireConfetti(x, y) {
  let scalar = 3
  let pippa = [
    t({ text: '🐈', scalar }),
    t({ text: '🐈', scalar }),
  ]
  let shapes = [
    t({ text: '♥️', scalar }),
    t({ text: '🖤', scalar }),
    t({ text: '🌹', scalar }),
    t({ text: '🍙', scalar }),
    t({ text: '🍟', scalar }),
    t({ text: '🥔', scalar }),
    t({ text: '🐀', scalar }),
    t({ text: '🐁', scalar }),
    t({ text: '🌙', scalar }),
    t({ text: '🥑', scalar }),
    t({ text: '🍉', scalar }),
    t({ text: '🍣', scalar }),
    t({ text: '🍤', scalar }),
    t({ text: '🥢', scalar }),
    t({ text: '🗿', scalar }),
    t({ text: '🛁', scalar }),
    t({ text: '🧿', scalar }),
    t({ text: '🇹🇷', scalar }),
  ]
  pippa.push(shapes[getRandomInt(0, shapes.length-1)])
  pippa.push(shapes[getRandomInt(0, shapes.length-1)])
  confetti({
    particleCount: 150,
    spread: [60, 120, 360][getRandomInt(0, 2)],
    angle: getRandomInt(30, 150),
    startVelocity: 30,
    ticks: 400,
    gravity: 0.5,
    origin: { x, y },
    shapes: pippa,
    scalar,
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
