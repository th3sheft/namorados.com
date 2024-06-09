document.getElementById('yesBtn').addEventListener('click', function() {
    for (let i = 0; i < 100; i++) {
        createHeart();
    }
});

document.getElementById('noBtn').addEventListener('click', function() {
    this.textContent = 'Claro que sim';
    this.removeEventListener('click', arguments.callee);
    this.addEventListener('click', function() {
        document.getElementById('noBtn').textContent = 'Eu sabia';
        for (let i = 0; i < 100; i++) {
            createHeart();
        }
    });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
