let applyTextHover = true;
let applyButtonHover = true;
let applyImageHover = true;

// Read preferences from cookies
document.addEventListener('DOMContentLoaded', () => {
    applyTextHover = getCookie('applyTextHover') !== undefined ? getCookie('applyTextHover') === 'true' : true;
    applyButtonHover = getCookie('applyButtonHover') !== undefined ? getCookie('applyButtonHover') === 'true' : true;
    applyImageHover = getCookie('applyImageHover') !== undefined ? getCookie('applyImageHover') === 'true' : true;

    applyHoverEffects();
});

function applyHoverEffects() {
    if (applyTextHover) {
        GM_addStyle(`
      p:hover, h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover, span:hover, li:hover {
        transform: scale(1.1) !important;
        transition: transform 0.3s ease !important;
      }
    `);
    }

    if (applyButtonHover) {
        GM_addStyle(`
      button:hover, a:hover, [role="button"]:hover, [href]:hover, [onclick]:hover {
        transform: scale(1.1) !important;
        transition: transform 0.3s ease !important;
      }
    `);
    }

    if (applyImageHover) {
        GM_addStyle(`
      img:hover, svg:hover {
        transform: scale(1.1) !important;
        transition: transform 0.3s ease !important;
      }
    `);
    }
}

// Helper function to get a specific cookie by name
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : undefined;
}
