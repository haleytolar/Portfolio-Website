document.addEventListener('DOMContentLoaded', function() {
    // ====== SHARED UTILITY FUNCTIONS ======
    
    // Function to check if element is in viewport
    function isInViewport(element, threshold = 0) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight - threshold) &&
        rect.bottom >= threshold &&
        rect.left <= (window.innerWidth - threshold) &&
        rect.right >= threshold
      );
    }
    
    // ====== ABOUT ME TYPING ANIMATION ======
    
    // Get the About Me heading
    const aboutHeading = document.getElementById('typing-h1');
    
    // Flag to ensure animation only runs once
    let aboutAnimationTriggered = false;
    
    // Function to handle About Me typing animation
    function handleAboutScroll() {
      if (!aboutAnimationTriggered && aboutHeading && isInViewport(aboutHeading)) {
        aboutHeading.classList.add('typing');
        aboutAnimationTriggered = true;
      }
    }
    
    // ====== CONTENT BOX ZOOM ANIMATION ======
    
    // Get the content box
    const contentBox = document.querySelector('.content-box');
    
    // Flag to ensure animation only runs once
    let contentBoxAnimated = false;
    
    // Function to handle content box zoom animation
    function handleContentBoxScroll() {
      if (!contentBoxAnimated && contentBox && isInViewport(contentBox, 150)) {
        contentBox.classList.add('show');
        contentBoxAnimated = true;
      }
    }
    
    // ====== GRID ITEMS ANIMATION ======
    
    // Get all grid items
    const gridItems = document.querySelectorAll('.grid__item');
    
    // Track which grid items have been animated
    const gridItemsAnimated = new Array(gridItems.length).fill(false);
    
    // Function to handle grid items animation
    function handleGridItemsScroll() {
      let allGridItemsAnimated = true;
      
      gridItems.forEach((item, index) => {
        if (!gridItemsAnimated[index] && isInViewport(item, 150)) {
          // Add animation class with a slight delay based on index
          setTimeout(() => {
            item.classList.add('show');
          }, index * 100); // 100ms staggered delay
          
          gridItemsAnimated[index] = true;
        }
        
        // Check if any items are still not animated
        if (!gridItemsAnimated[index]) {
          allGridItemsAnimated = false;
        }
      });
      
      return allGridItemsAnimated;
    }
    
    // ====== WORK HEADING ANIMATION ======
    
    // Get the Work heading
    const workHeading = document.querySelector('#work-head h1');
    
    // Flag to ensure animation only runs once
    let workAnimationTriggered = false;
    
    // Function to handle Work heading typing animation
    function handleWorkHeadingScroll() {
      if (!workAnimationTriggered && workHeading && isInViewport(workHeading)) {
        workHeading.classList.add('typing');
        workAnimationTriggered = true;
      }
    }
    
    // ====== COMBINED SCROLL HANDLER ======
    
    // Function to check all animations on scroll
    function handleAllScrollAnimations() {
      handleAboutScroll();
      handleContentBoxScroll();
      const allGridAnimated = handleGridItemsScroll();
      handleWorkHeadingScroll();
      
      // If all animations have been triggered, optionally remove the scroll listener
      if (aboutAnimationTriggered && contentBoxAnimated && allGridAnimated && workAnimationTriggered) {
        window.removeEventListener('scroll', handleAllScrollAnimations);
      }
    }
    
    // Add single scroll event listener for all animations
    window.addEventListener('scroll', handleAllScrollAnimations);
    
    // Check animations on initial page load
    setTimeout(handleAllScrollAnimations, 300); // Small delay to ensure DOM is fully loaded
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Get the elements we want to animate
    const contactHeading = document.querySelector('.contact-section h1');
    const emailHeading = document.querySelector('.contact-info-heading');
    const footerText = document.querySelector('.footer-text');
    
    // Set up Intersection Observer for the contact section
    const contactObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When contact section comes into view
            if (entry.isIntersecting) {
                // Add typing animation class to Contact Me heading
                contactHeading.classList.add('typing-active');
                
                // Add typing animation class to Email heading after a delay
                setTimeout(() => {
                    emailHeading.classList.add('typing-active');
                }, 2500); // 2.5 seconds delay
                
                // Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible
    
    // Set up Intersection Observer for the footer
    const footerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When footer comes into view
            if (entry.isIntersecting) {
                // Add typing animation class to Footer text
                footerText.classList.add('typing-active');
                
                // Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
    
    // Start observing the elements
    if (contactHeading) {
        contactObserver.observe(document.querySelector('.section-4'));
    }
    
    if (footerText) {
        footerObserver.observe(document.querySelector('.page-footer'));
    }
});