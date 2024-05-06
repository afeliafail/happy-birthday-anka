function confettiStart() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        shapes: ['circle', 'square'], // You can customize shapes or use images
        colors: [
          '#ff5f6d',
          '#ffc371',
          '#48c6ef',
          '#6f86d6'
        ] // Custom color palette
    });
}
