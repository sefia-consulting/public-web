// js/clients.js
document.addEventListener('DOMContentLoaded', function() {
    const logosSlide = document.querySelector('.logos-slide');
    const logosContainer = document.querySelector('.logos');
    
    let marqueeTween;
    let isModalOpen = false;

    if (logosSlide && logosContainer) {
        // Clone the logos to create a seamless loop
        const copy = logosSlide.cloneNode(true);
        logosContainer.appendChild(copy);

        // GSAP Ticker for smooth marquee (Replaces the buggy CSS hover-pause implementation)
        const slides = document.querySelectorAll('.logos-slide');
        
        marqueeTween = gsap.to(slides, {
            xPercent: -100,
            repeat: -1,
            duration: 60,
            ease: "none"
        });

        // Flawless pause and play without triggering browser reflows/scroll jumps
        logosContainer.addEventListener('mouseenter', () => {
            if (!isModalOpen && marqueeTween) marqueeTween.pause();
        });
        logosContainer.addEventListener('mouseleave', () => {
            if (!isModalOpen && marqueeTween) marqueeTween.play();
        });
    }

    // Modal Logic
    const modal = document.getElementById('client-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModalBtn = document.getElementById('close-modal');

    // Function to open modal
    function openModal(imgSrc, altText, descText) {
        isModalOpen = true;
        if (marqueeTween) marqueeTween.pause();

        // Set modal content
        modalImg.src = imgSrc;
        modalImg.alt = altText;
        modalTitle.textContent = altText;
        modalDesc.textContent = descText;

        // Show modal with animation and add flex to center properly
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Small delay to allow display:flex to apply before animating opacity/transform
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.classList.add('opacity-100');
            const modalContent = modal.querySelector('div');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        const modalContent = modal.querySelector('div');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        
        // Wait for animation to finish before hiding
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            
            isModalOpen = false;
            // Resume marquee if mouse is not currently hovering over the container
            if (marqueeTween && logosContainer && !logosContainer.matches(':hover')) {
                marqueeTween.play();
            }
        }, 300);
    }

    // Attach click events to all client logos (even cloned ones)
    // We use event delegation on the .logos container
    if (logosContainer) {
        logosContainer.addEventListener('click', function(e) {
            // Mobile restriction removed so clicks work on desktop
            const logoElement = e.target.closest('.client-logo');
            if (logoElement) {
                const img = logoElement.querySelector('img');
                const tooltip = logoElement.querySelector('.tooltip');
                
                if (img && tooltip) {
                    openModal(img.src, img.alt, tooltip.textContent);
                }
            }
        });
    }

    // Close modal events
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        // Close on background click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});