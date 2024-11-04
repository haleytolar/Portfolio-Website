document.addEventListener("DOMContentLoaded", function() {
    const divider = document.querySelector(".divider");

    // Function to check if the divider is in view
    function checkVisibility() {
        const dividerPosition = divider.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        console.log(`Divider position: ${dividerPosition.top} to ${dividerPosition.bottom}`);
        console.log(`Window height: ${windowHeight}`);

        // Check if the divider is in the middle of the viewport
        if (dividerPosition.top < windowHeight / 2 && dividerPosition.bottom > windowHeight / 2) {
            divider.classList.add("show");
        } else {
            divider.classList.remove("show");
        }
    }

    // Check visibility on scroll
    window.addEventListener("scroll", checkVisibility);

    // Initial check in case the divider is already in view
    checkVisibility();
});
