const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// When "Yes" is clicked, redirect to yes.html
yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html'; // Redirect to yes.html
});

// When "No" is hovered over, it moves
noBtn.addEventListener('mouseover', () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const randomX = Math.floor(Math.random() * (viewportWidth - 100)); // Adjust based on button width
    const randomY = Math.floor(Math.random() * (viewportHeight - 100)); // Adjust based on button height
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
