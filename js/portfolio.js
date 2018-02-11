document.addEventListener("DOMContentLoaded", function (event) {

    /**
     * Smooth scrolling on links
     */
    var scrollLink = $('#exCollapsingNavbar a, #start, #scroll-to-top-link');
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
    document.body.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 50) {
            document.getElementById('navbar-main').classList.add('navbar-scroll');
            document.getElementById('navbar-main').classList.add('box-shadow');
            document.getElementById('scroll-to-top-link').style.display = 'block';
        } else {
            document.getElementById('navbar-main').classList.remove('navbar-scroll');
            document.getElementById('navbar-main').classList.remove('box-shadow');
            document.getElementById('scroll-to-top-link').style.display = 'none';
        }
    }
});