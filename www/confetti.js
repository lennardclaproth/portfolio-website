function generateConfetti() {
    const confettiWrapper = document.getElementById('confetti-wrapper');
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff']; // Confetti colors
  
    // Generate each piece of confetti
    for (let i = 0; i < 100; i++) { // Adjust the number of pieces here
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      const bgColor = colors[Math.floor(Math.random() * colors.length)];
      const leftPosition = Math.floor(Math.random() * 100) + 'vw';
      const animationDuration = Math.random() * 3 + 2 + 's'; // Between 2 and 5 seconds
      const size = Math.floor(Math.random() * 10) + 5 + 'px'; // Between 5 and 15px
  
      // Apply styles to confetti
      confetti.style.backgroundColor = bgColor;
      confetti.style.left = leftPosition;
      confetti.style.width = size;
      confetti.style.height = size;
      confetti.style.animationName = 'fall';
      confetti.style.animationDuration = animationDuration;
      confetti.style.animationTimingFunction = 'linear';
      confetti.style.animationIterationCount = 'infinite'; // Use '1' for a single fall
  
      // Append confetti to wrapper
      confettiWrapper.appendChild(confetti);
    }
  }
  
  // Run the function to start the animation
  generateConfetti();