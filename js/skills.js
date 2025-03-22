document.addEventListener('DOMContentLoaded', () => {
    // Get all skill elements
    const skillElements = document.querySelectorAll('.skill-title');
    const totalSkills = skillElements.length;
    
    // Function to position skills based on container size
    function positionSkills() {
        // Get container dimensions
        const container = document.querySelector('.skills-grid');
        const containerWidth = container.offsetWidth;
        
        // Calculate radius (adjust as needed to maintain proper spacing)
        const radius = containerWidth * 0.38; // 38% of container width
        
        // Position each skill around the circle
        skillElements.forEach((skill, index) => {
            // Calculate the angle for each skill (in radians)
            // We start at -90 degrees (top) and go clockwise
            const angle = ((index / totalSkills) * 2 * Math.PI) - (Math.PI / 2);
            
            // Calculate x and y coordinates on the circle
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            // Apply the calculated position
            skill.style.left = '50%';
            skill.style.top = '50%';
            skill.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
    }
    
    // Position skills initially
    positionSkills();
    
    // Reposition on window resize
    window.addEventListener('resize', positionSkills);
});