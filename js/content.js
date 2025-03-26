document.addEventListener('DOMContentLoaded', function() {

    function isInViewport(element, threshold = 0) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight - threshold) &&
        rect.bottom >= threshold &&
        rect.left <= (window.innerWidth - threshold) &&
        rect.right >= threshold
      );
    }
    
    const aboutHeading = document.getElementById('typing-h1');
    
    let aboutAnimationTriggered = false;
    
    function handleAboutScroll() {
      if (!aboutAnimationTriggered && aboutHeading && isInViewport(aboutHeading)) {
        aboutHeading.classList.add('typing');
        aboutAnimationTriggered = true;
      }
    }
    
    const contentBox = document.querySelector('.content-box');
    
    let contentBoxAnimated = false;
    
    function handleContentBoxScroll() {
      if (!contentBoxAnimated && contentBox && isInViewport(contentBox, 150)) {
        contentBox.classList.add('show');
        contentBoxAnimated = true;
      }
    }
    
    const gridItems = document.querySelectorAll('.grid__item');
    
    const gridItemsAnimated = new Array(gridItems.length).fill(false);
    
    function handleGridItemsScroll() {
      let allGridItemsAnimated = true;
      
      gridItems.forEach((item, index) => {
        if (!gridItemsAnimated[index] && isInViewport(item, 150)) {

          setTimeout(() => {
            item.classList.add('show');
          }, index * 100); 
          
          gridItemsAnimated[index] = true;
        }
        
        if (!gridItemsAnimated[index]) {
          allGridItemsAnimated = false;
        }
      });
      
      return allGridItemsAnimated;
    }
    
    const workHeading = document.querySelector('#work-head h1');
    
    let workAnimationTriggered = false;
    
    function handleWorkHeadingScroll() {
      if (!workAnimationTriggered && workHeading && isInViewport(workHeading)) {
        workHeading.classList.add('typing');
        workAnimationTriggered = true;
      }
    }
    
    function handleAllScrollAnimations() {
      handleAboutScroll();
      handleContentBoxScroll();
      const allGridAnimated = handleGridItemsScroll();
      handleWorkHeadingScroll();
      
      if (aboutAnimationTriggered && contentBoxAnimated && allGridAnimated && workAnimationTriggered) {
        window.removeEventListener('scroll', handleAllScrollAnimations);
      }
    }
    
    window.addEventListener('scroll', handleAllScrollAnimations);
    
    setTimeout(handleAllScrollAnimations, 300); 
  });

  document.addEventListener('DOMContentLoaded', function() {

    const contactHeading = document.querySelector('.contact-section h1');
    const emailHeading = document.querySelector('.contact-info-heading');
    const footerText = document.querySelector('.footer-text');
    
    const contactObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                contactHeading.classList.add('typing-active');
                
                setTimeout(() => {
                    emailHeading.classList.add('typing-active');
                }, 2500); 
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 }); 
    
    const footerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                footerText.classList.add('typing-active');
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); 
    
    if (contactHeading) {
        contactObserver.observe(document.querySelector('.section-4'));
    }
    
    if (footerText) {
        footerObserver.observe(document.querySelector('.page-footer'));
    }
});