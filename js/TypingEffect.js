document.addEventListener('DOMContentLoaded', function() {

    const helloTypingDuration = 1; 
    const worldTypingDelay = 1.2;  
    const worldTypingDuration = 1; 
    
    const totalHelloWorldDuration = worldTypingDelay + worldTypingDuration + 0.5; // +0.5 for final cursor blink
    
    const paragraphText = document.querySelector('.typewriter-p').textContent;
    const paragraphLength = paragraphText.length;
    
    const typingSpeed = Math.round((totalHelloWorldDuration * 1000) / paragraphLength);
    
    document.querySelector('.typewriter-p').setAttribute('data-speed', typingSpeed);
    
    const typewriterElements = document.querySelectorAll('.typewriter-p');
    
    typewriterElements.forEach(element => {

      const container = document.createElement('div');
      container.className = 'typewriter-container';
      element.parentNode.insertBefore(container, element);
      
      container.appendChild(element);
      
      const text = element.textContent;
      const typingSpeed = parseInt(element.getAttribute('data-speed') || '50');
      
      const typedTextElement = document.createElement('div');
      typedTextElement.className = 'typed-text';
      container.appendChild(typedTextElement);
      
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      container.appendChild(cursor);
      
      let charIndex = 0;
      let cursorLeft = 0;
      let cursorTop = 0;
      
      function typeNextChar() {
        if (charIndex < text.length) {

          typedTextElement.textContent = text.substring(0, charIndex + 1);
          charIndex++;
          
          const lastChar = typedTextElement.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          
          setTimeout(() => {
            const range = document.createRange();
            const selection = window.getSelection();
            
            range.setStart(typedTextElement.firstChild, charIndex);
            range.collapse(true);
            
            selection.removeAllRanges();
            selection.addRange(range);
            
            const rect = range.getBoundingClientRect();
            cursorLeft = rect.left - containerRect.left;
            cursorTop = rect.top - containerRect.top;
            
            cursor.style.left = cursorLeft + 'px';
            cursor.style.top = cursorTop + 'px';
            
            setTimeout(typeNextChar, typingSpeed);
          }, 0);
        } else {

          setTimeout(() => {
            cursor.style.display = 'none';
          }, 1500);
        }
      }
      
      setTimeout(typeNextChar, 500);
    });
  });