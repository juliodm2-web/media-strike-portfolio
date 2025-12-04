document.addEventListener("DOMContentLoaded", function() {
    // --- Existing Reveal Effect Code (KEEP THIS) ---
    const revealElements = document.querySelectorAll(".reveal");
    const observerOptions = {
        rootMargin: "0px 0px -100px 0px", 
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    revealElements.forEach(element => {
        observer.observe(element);
    });
    // --- END Existing Reveal Effect Code ---


    // --- NEW LIGHTBOX CODE ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.querySelector('.lightbox-close');
    const body = document.body;

    // Function to open the lightbox
    function openLightbox(imageSource) {
        lightboxImage.src = imageSource;
        lightbox.classList.add('open');
        body.classList.add('modal-open');
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.classList.remove('open');
        body.classList.remove('modal-open');
    }

    // 1. Event listener for opening the lightbox
    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the link from navigating
            const imgSrc = this.getAttribute('data-img-src');
            openLightbox(imgSrc);
        });
    });

    // 2. Event listener for closing via the close button
    closeButton.addEventListener('click', closeLightbox);

    // 3. Event listener for closing by clicking the dark overlay
    lightbox.addEventListener('click', function(e) {
        // Only close if the click occurred directly on the lightbox overlay (not the image)
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
    });

    // 4. Event listener for closing via the ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) {
            closeLightbox();
        }
    });
    // --- END NEW LIGHTBOX CODE ---
});
