// Simple example of smooth scroll effect for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Open the modal and embed the YouTube video
function openVideoModal(videoId) {
    const modal = document.getElementById("videoModal");
    const videoContainer = document.getElementById("videoContainer");

    // Create the embedded YouTube video iframe
    videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

    // Show the modal
    modal.style.display = "block";
}

// Close the modal when the user clicks the "x"
document.querySelector(".close").addEventListener("click", function() {
    const modal = document.getElementById("videoModal");
    const videoContainer = document.getElementById("videoContainer");

    // Close the modal
    modal.style.display = "none";

    // Remove the embedded video
    videoContainer.innerHTML = "";
});

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
