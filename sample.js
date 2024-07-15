const image = document.getElementById('image');

image.animate(
    [
        { transform: 'translateX(0)'},
        { transform: 'translateX(1000px)' }
    ],
    {
        fill: 'backwards',
        duration: 1000,
        iterations: Infinity,
    },
);
