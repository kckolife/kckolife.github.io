var loadCSS = function (href) {
    return function (event) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = href;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(link);
    };
};
