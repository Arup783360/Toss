function flipCoin() {
    const video = document.getElementById('flipVideo');
    const result = document.getElementById('result');

    // Hide the result text initially
    result.textContent = '';

    // Play the video
    video.play();

    // Show result after the video ends
    video.onended = () => {
        const isHeads = Math.random() >= 0.5;
        result.textContent = isHeads ? 'Heads' : 'Tails';
    };
}
