const container = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });
}
