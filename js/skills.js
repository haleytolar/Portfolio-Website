document.addEventListener('DOMContentLoaded', () => {

    const skillElements = document.querySelectorAll('.skill-title');
    const totalSkills = skillElements.length;
    
    function positionSkills() {

        const container = document.querySelector('.skills-grid');
        const containerWidth = container.offsetWidth;
        
        const radius = containerWidth * 0.38; 
        
        skillElements.forEach((skill, index) => {
           
            const angle = ((index / totalSkills) * 2 * Math.PI) - (Math.PI / 2);
            
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            skill.style.left = '50%';
            skill.style.top = '50%';
            skill.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
    }
    
    positionSkills();
    
    window.addEventListener('resize', positionSkills);
});