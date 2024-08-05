document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll('.card a');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Read More clicked!");
        });
    });
});
