var initNav = function(event) {
    var navbar = document.getElementById("navbar");
    var rect = navbar.getBoundingClientRect();
    window.onscroll = function (event) {
        if (window.pageYOffset >= rect.top) {
            navbar.classList.add("stick");
        } else {
            navbar.classList.remove("stick");
        };
    };
};
