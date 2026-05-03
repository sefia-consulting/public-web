// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 0. Home Section Load & Scrub Animation
const heroReveal = document.querySelector('.hero-reveal');
const heroElements = document.querySelectorAll('.hero-reveal > *');

if (heroReveal && heroElements.length > 0) {
    
    // Abstracted function to run the entrance animation cleanly
    function playHeroEntrance() {
        gsap.fromTo(heroElements, 
            { y: (i) => i === 0 ? -60 : 60, opacity: 0, filter: 'blur(10px)' }, 
            { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, stagger: 0.2, ease: "power3.out", overwrite: "auto" }
        );
    }

    // Play entrance animation on initial load
    setTimeout(playHeroEntrance, 50);

    // Scrub away the entire wrapper smoothly on scroll down.
    // By scrubbing the parent (.hero-reveal) while applying the entrance animation to its children,
    // we eliminate GSAP overwrite conflicts and guarantee iOS correctly calculates the scroll restoration state.
    gsap.fromTo(heroReveal, 
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        {
            y: -100,
            opacity: 0,
            filter: 'blur(5px)',
            ease: "none",
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        }
    );
}

// Helper function to map custom classes to specific starting animations for the icons
function getIconAnim(iconEl) {
    let fromProps = { opacity: 0 };
    // The resting state (to) is universally 0 resets and opacity 1
    let toProps = { x: 0, y: 0, scale: 1, rotation: 0, rotationX: 0, rotationY: 0, opacity: 1 };

    if (iconEl.classList.contains('icon-spin')) {
        fromProps.rotation = -360;
        fromProps.scale = 0;
    } else if (iconEl.classList.contains('icon-drop')) {
        fromProps.y = -150;
    } else if (iconEl.classList.contains('icon-slide-left')) {
        fromProps.x = -150;
    } else if (iconEl.classList.contains('icon-scale-up')) {
        fromProps.scale = 0;
    } else if (iconEl.classList.contains('icon-flip')) {
        fromProps.rotationY = 180;
    } else if (iconEl.classList.contains('icon-rotate-in')) {
        fromProps.rotation = -90;
        fromProps.x = -50;
    } else if (iconEl.classList.contains('icon-slide-right')) {
        fromProps.x = 150;
    } else if (iconEl.classList.contains('icon-zoom-spin')) {
        fromProps.scale = 2.5;
        fromProps.rotation = 180;
    } else if (iconEl.classList.contains('icon-pop')) {
        fromProps.y = 100;
        fromProps.scale = 0.5;
    } else if (iconEl.classList.contains('icon-3d-flip')) {
        fromProps.rotationX = -180;
        fromProps.y = 150;
        fromProps.scale = 0.3;
    } else if (iconEl.classList.contains('icon-fly-in')) {
        fromProps.x = -300;
        fromProps.y = 300;
        fromProps.rotation = -90;
        fromProps.scale = 0.2;
    } else if (iconEl.classList.contains('icon-boomerang')) {
        fromProps.x = 200;
        fromProps.y = -200;
        fromProps.rotation = 540;
        fromProps.scale = 0;
    } else {
        fromProps.y = 50; // Fallback
    }

    return { from: fromProps, to: toProps };
}

// 1. Fade Up Elements on Scroll (Generic blocks)
gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
    gsap.fromTo(elem, 
        { y: 50, opacity: 0 }, 
        {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out"
        }
    );
});

// 2. Horizontal Scroll Section
// IMPORTANT: This must be instantiated BEFORE the reveal triggers below the fold so GSAP factors in the pin spacing!
const horizontalSection = document.querySelector(".horizontal-scroll-container");
const pinWrap = document.querySelector(".pin-wrap");

// Calculate how far to move horizontally: total width of content minus viewport width
let getToValue = () => -(pinWrap.scrollWidth - window.innerWidth); 

// We store the horizontal animation in a variable (scrollTween) so we can link inner animations to it
let scrollTween = gsap.to(".pin-wrap", {
    x: getToValue,
    ease: "none",
    scrollTrigger: {
        trigger: horizontalSection,
        pin: true,
        scrub: 1, // Smooth scrubbing
        invalidateOnRefresh: true, // Recalculates on window resize
        // The 'end' value controls how long the user must scroll vertically to finish the horizontal animation.
        // 4000px provides a smooth, unhurried reading pace for 6 panels.
        end: () => "+=" + (pinWrap.scrollWidth - window.innerWidth) * 1.5 
    }
});

// 2b. Apple-style reveal animations for Expertise icons, titles, and text
gsap.utils.toArray(".service-panel").forEach((panel, index) => {
    // Separate the icon from the h2/p to animate differently
    const icon = panel.querySelector(".glass > div[class*='icon-']");
    const textElements = panel.querySelectorAll(".glass > h2, .glass > p");
    
    // Setup Trigger config - First panel standard vertical scroll, rest linked to horizontal scrollTween
    let triggerConfig = index === 0 ? {
        trigger: horizontalSection, // Use the stable outer section instead of the inner panel to avoid pin calculation bugs on anchor jump
        start: "top 80%", // Triggers as the container comes into vertical view
        end: "top top", // Finishes exactly as the container pins
        scrub: 1 // Smoothly links the animation to the vertical scroll
    } : {
        trigger: panel,
        containerAnimation: scrollTween, // Links to the horizontal movement
        start: "left 85%", // Triggers when the panel's left edge is 85% across the screen
        end: "center center", // Finishes exactly when the panel is centered
        scrub: 1
    };

    // Apply unique transformation to the icon
    if (icon) {
        const animConfig = getIconAnim(icon);
        gsap.fromTo(icon, animConfig.from, {
            ...animConfig.to,
            ease: "power2.out",
            scrollTrigger: triggerConfig
        });
    }

    // Apply staggered fade/slide to headers and text
    if (textElements.length > 0) {
        gsap.fromTo(textElements, 
            { y: 80, opacity: 0, scale: 0.9 },
            {
                y: 0, opacity: 1, scale: 1, 
                stagger: 0.15, ease: "power2.out",
                scrollTrigger: triggerConfig
            }
        );
    }
});

// 3. Apple-style staggered reveal for Philosophy, Augmentation, Clients, and Contact sections
gsap.utils.toArray('.apple-reveal').forEach(function(container) {
    // Find the icon based on our custom icon prefix
    const icon = container.querySelector('div[class*="icon-"]');
    // Grab text/logo elements excluding the icon container to stagger them normally
    const textElements = Array.from(container.children).filter(el => 
        typeof el.className === 'string' && !el.className.includes('icon-')
    );

    // Animate the icon using its unique entrance animation on scroll into view
    if (icon) {
        const animConfig = getIconAnim(icon);
        gsap.fromTo(icon, animConfig.from, {
            ...animConfig.to,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container,
                start: "top 85%", 
                toggleActions: "play none none reverse"
            }
        });
    }

    // Stagger text contents up below the icon on scroll into view (Ripple effect added)
    if (textElements.length > 0) {
        gsap.fromTo(textElements, 
            { y: 60, opacity: 0, scale: 0.98 }, 
            {
                y: 0, opacity: 1, scale: 1, 
                duration: 1.2,
                stagger: { amount: 0.3, from: "start", ease: "power2.out" }, // This triggers the subtle ripple
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container,
                    start: "top 85%", 
                    toggleActions: "play none none reverse"
                }
            }
        );
    }
});

// 4. Navbar Glass Effect on Scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('bg-black/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/10');
        nav.classList.remove('glass');
    } else {
        nav.classList.remove('bg-black/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-white/10');
        nav.classList.add('glass');
    }
});

// 5. Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 6. Rerun Home Animations on Nav Logo Click
const navLogo = document.querySelector('a[href="#home"]');
if (navLogo) {
    navLogo.addEventListener('click', (e) => {
        // Hide mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }

        // Rerun home hero animations
        if (heroElements.length > 0) {
            // Re-trigger the smooth entrance after a short delay to allow smooth scrolling to the top to complete
            setTimeout(() => {
                gsap.fromTo(heroElements, 
                    { y: (i) => i === 0 ? -60 : 60, opacity: 0, filter: 'blur(10px)' }, 
                    { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.5, stagger: 0.2, ease: "power3.out", overwrite: "auto" }
                );
            }, 600); 
        }
    });
}

// 7. Clean URL Hash
// Removes the hash from the URL after navigation to ensure clean bookmarks and top-level reloads.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', () => {
        setTimeout(() => {
            history.replaceState(null, null, window.location.pathname + window.location.search);
        }, 10); // Short delay to allow default browser hash jump to trigger first
    });
});

// Also clear the hash on initial load if present, after the browser has already jumped
if (window.location.hash) {
    setTimeout(() => {
        history.replaceState(null, null, window.location.pathname + window.location.search);
    }, 100);
}

// 8. Background Parallax Scrolling
// Vertical Parallax for standard layout sections
gsap.utils.toArray('.vertical-parallax').forEach(bg => {
    gsap.fromTo(bg, 
        { yPercent: -15 }, 
        {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: bg.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        }
    );
});

// Horizontal Parallax for the horizontally scrolling service panels
gsap.utils.toArray('.horizontal-parallax').forEach(bg => {
    gsap.fromTo(bg, 
        { xPercent: -15 }, 
        {
            xPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: bg.parentElement,
                containerAnimation: scrollTween, // Binds the parallax to the horizontal container motion
                start: "left right",
                end: "right left",
                scrub: true
            }
        }
    );
});