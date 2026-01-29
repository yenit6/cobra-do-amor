let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

/* =======================
   CONTROLE POR TECLADO
======================= */
addEventListener('keydown', e => {
    switch (e.key) {
        case "ArrowUp":
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;

        case "ArrowDown":
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;

        case "ArrowLeft":
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;

        case "ArrowRight":
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
    }
});

/* =======================
   CONTROLE POR SWIPE
======================= */
let touchStartX = 0;
let touchStartY = 0;

addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Decide se o movimento foi mais horizontal ou vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal
        if (diffX > 0 && lastInputDirection.x === 0) {
            inputDirection = { x: 1, y: 0 }; // direita
        } else if (diffX < 0 && lastInputDirection.x === 0) {
            inputDirection = { x: -1, y: 0 }; // esquerda
        }
    } else {
        // Vertical
        if (diffY > 0 && lastInputDirection.y === 0) {
            inputDirection = { x: 0, y: 1 }; // baixo
        } else if (diffY < 0 && lastInputDirection.y === 0) {
            inputDirection = { x: 0, y: -1 }; // cima
        }
    }
});
