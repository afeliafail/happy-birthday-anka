document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.birthday-container');

    container.addEventListener('click', function (event) {
        var rect = container.getBoundingClientRect();
        var x = event.clientX - rect.left; // Get the horizontal coordinate
        var y = event.clientY - rect.top; // Get the vertical coordinate

        // Normalize the coordinates from 0 to 1
        var normalizedX = x / container.offsetWidth;
        var normalizedY = y / container.offsetHeight;

        fireConfetti(normalizedX, normalizedY);
    });
});

function fireConfetti(x, y) {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x, y: y }, // Set the origin based on click
        shapes: ['circle', 'square'],
        colors: ['#ff5f6d', '#ffc371', '#48c6ef', '#6f86d6']
    });
}
