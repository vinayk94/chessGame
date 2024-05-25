const board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
});

function onDrop(source, target, piece, newPos, oldPos, orientation) {
    const move = { from: source, to: target, piece: piece };

    fetch('http://localhost:8080/move', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(move)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Move response:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

const board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true,
    onDrop: onDrop
});
