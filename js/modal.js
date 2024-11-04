// Get the modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");

// Select all grid items with the "image-link" class
const imageLinks = document.querySelectorAll(".image-link");

// Add click event listeners to each image link
imageLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the link from navigating
    const gridItem = this.closest(".grid__item"); // Get the parent grid item
    const imageUrl = gridItem.getAttribute("data-image"); // Get the image URL from data attribute

    // Set the modal image source to the stored data-image URL
    modalImg.src = imageUrl;

    // Display the modal
    modal.style.display = "block";
  });
});

// Event listener for closing the modal when clicking the "close" button
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal when clicking outside of the image content
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

