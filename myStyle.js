document.getElementById('tap1').addEventListener('click', function() {
    toggleBox('box1');
});
document.getElementById('tap2').addEventListener('click', function() {
    toggleBox('box2');
});
document.getElementById('tap3').addEventListener('click', function() {
    toggleBox('box3');
});

function toggleBox(boxId, color) {
    const boxes = ['box1', 'box2', 'box3'];
    boxes.forEach(id => {
        if (id !== boxId) {
            document.getElementById(id).style.display = 'none';
        }
    });
    const box = document.getElementById(boxId);
    if (box.style.display === 'block') {
        box.style.display = 'none';
    } else {
        box.style.display = 'block';
        box.style.backgroundColor = color;
    }
}
