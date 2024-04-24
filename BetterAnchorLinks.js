<script>
document.addEventListener("DOMContentLoaded", function () {
    // Function to replace IDs and update anchor links
    function replaceAndScrollTo(elementId) {
        var targetElement = document.getElementById(elementId);
        // Check if the target element exists
        if (targetElement) {
            // Remove the ID from the current target
            targetElement.removeAttribute("id");
            // Create a new element with the new-target class
            var newTarget = document.createElement("div");
            newTarget.className = "anchor-offset";
            newTarget.id = elementId;

            // Append the new element to the parent of the old target
            targetElement.parentNode.insertBefore(newTarget, targetElement);

            // Scroll to the new target
            newTarget.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Add click event listeners to your anchor links
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1); // Remove the '#'
            replaceAndScrollTo(targetId);
        });
    });
});
</script>
