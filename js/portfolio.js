$(document).ready(function () {
    /**
     * Smooth scrolling on links
     */
    var scrollLink = $('#exCollapsingNavbar a, #willkommen a');
    scrollLink.on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top,
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    /**
     * Animated scrolling navigation bar
     */
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('#navbar-main').addClass('navbar-scroll');
        } else {
            $('#navbar-main').removeClass('navbar-scroll');
        }
    });
});