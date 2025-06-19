const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
}
