
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

        const observer = new IntersectionObserver(showImage, options);

        elements.forEach(target => {
            observer.observe(target);
        });

    }

    const post = document.querySelectorAll('.anim');

    animObserver(post, -100);
}
