
'use strict';
{
    

    function animObserver(elements, timing) {
        const options = {
            root: null,
            rootMargin: `0px 0px ${timing}px 0px`,
            threshold: [0.3]
        }

        function showImage(entries) { 
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                }
            });
        }

        const observerlight = new IntersectionObserver(showImage, options);

        elements.forEach(target => {
            observerlight.observe(target);
        });

    }

    const photolight = document.querySelectorAll('.anim');

    animObserver(photolight, -100);
}
