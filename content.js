(function () {
    'use strict';

    // Add custom CSS to scale only clickable buttons, links, and text elements smoothly
    const style = document.createElement('style');
    style.textContent = `
        /* Smooth scaling on hover for clickable elements */
        button, a, .clickable, [role="button"], [href], [onclick], 
        span, p, h1, h2, h3, h4, h5, h6 {
            transition: transform 0.3s ease !important;
            transform-origin: center center; /* Keeps scaling centered */
        }

        button:hover, a:hover, .clickable:hover, [role="button"]:hover, [href]:hover, [onclick]:hover {
            transform: scale(1.1) !important; /* Scale up the hovered element */
        }

        /* Scale down the text elements on hover */
        span:hover, p:hover, h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover {
            transform: scale(1.08) !important; /* Scale down the text */
        }

        /* Ensures images, icons inside buttons or text elements scale smoothly if any */
        button img, a img, .clickable img, span img, p img, h1 img, h2 img, h3 img, h4 img, h5 img, h6 img {
            transition: transform 0.3s ease !important;
        }
    `;
    document.head.appendChild(style);
})();
