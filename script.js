function animateContentOnScroll() {
    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scrolling and adjust the 'aparecer' class
    function handleScroll(elements) {
        elements.forEach(content => {
            if (isElementInViewport(content) && !content.classList.contains('aparecer')) {
                content.classList.add('aparecer');
            }
        });
    }

    // Get all elements with the '.contenido' class
    const contentElements = document.querySelectorAll('.contenido');

    // Add an event listener to the scroll event
    window.addEventListener('scroll', function() {
        handleScroll(contentElements);
    });

    // Call the function on page load to handle the initial state
    handleScroll(contentElements);
}