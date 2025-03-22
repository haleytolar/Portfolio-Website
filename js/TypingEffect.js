// Update this in your DOM ready function
document.addEventListener('DOMContentLoaded', function() {
    // Calculate total duration for Hello + World typing
    const helloTypingDuration = 1; // from --typing-duration
    const worldTypingDelay = 1.2;  // from --first-line-typing-time
    const worldTypingDuration = 1; // from --typing-duration
    
    // Total duration for Hello World sequence (in seconds)
    const totalHelloWorldDuration = worldTypingDelay + worldTypingDuration + 0.5; // +0.5 for final cursor blink
    
    // Get paragraph text length
    const paragraphText = document.querySelector('.typewriter-p').textContent;
    const paragraphLength = paragraphText.length;
    
    // Calculate appropriate typing speed to finish at the same time
    // We need to type paragraphLength characters in totalHelloWorldDuration seconds
    // The JavaScript speed is in milliseconds per character
    const typingSpeed = Math.round((totalHelloWorldDuration * 1000) / paragraphLength);
    
    // Set the typing speed on the paragraph element
    document.querySelector('.typewriter-p').setAttribute('data-speed', typingSpeed);
    
    // Continue with existing typewriter code...
    // Get all typewriter elements
    const typewriterElements = document.querySelectorAll('.typewriter-p');
    
    typewriterElements.forEach(element => {
      // Create container
      const container = document.createElement('div');
      container.className = 'typewriter-container';
      element.parentNode.insertBefore(container, element);
      
      // Move the original element into container
      container.appendChild(element);
      
      // Get text and speed
      const text = element.textContent;
      const typingSpeed = parseInt(element.getAttribute('data-speed') || '50');
      
      // Create typed text element
      const typedTextElement = document.createElement('div');
      typedTextElement.className = 'typed-text';
      container.appendChild(typedTextElement);
      
      // Create cursor
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      container.appendChild(cursor);
      
      // Start typing
      let charIndex = 0;
      let cursorLeft = 0;
      let cursorTop = 0;
      
      function typeNextChar() {
        if (charIndex < text.length) {
          // Add next character
          typedTextElement.textContent = text.substring(0, charIndex + 1);
          charIndex++;
          
          // Update cursor position
          const lastChar = typedTextElement.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          
          // Update cursor position after the text has rendered
          setTimeout(() => {
            const range = document.createRange();
            const selection = window.getSelection();
            
            // Position at the end of the typed text
            range.setStart(typedTextElement.firstChild, charIndex);
            range.collapse(true);
            
            selection.removeAllRanges();
            selection.addRange(range);
            
            // Get position of the cursor
            const rect = range.getBoundingClientRect();
            cursorLeft = rect.left - containerRect.left;
            cursorTop = rect.top - containerRect.top;
            
            // Update cursor position
            cursor.style.left = cursorLeft + 'px';
            cursor.style.top = cursorTop + 'px';
            
            // Continue typing
            setTimeout(typeNextChar, typingSpeed);
          }, 0);
        } else {
          // Typing complete, hide cursor after delay
          setTimeout(() => {
            cursor.style.display = 'none';
          }, 1500);
        }
      }
      
      // Start typing after a small delay
      setTimeout(typeNextChar, 500);
    });
  });