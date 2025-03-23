let applyTextHover = true;
let applyButtonHover = true;
let applyImageHover = true;

chrome.storage.sync.get(['applyTextHover', 'applyButtonHover', 'applyImageHover'], (data) => {
  applyTextHover = data.applyTextHover !== undefined ? data.applyTextHover : true;
  applyButtonHover = data.applyButtonHover !== undefined ? data.applyButtonHover : true;
  applyImageHover = data.applyImageHover !== undefined ? data.applyImageHover : true;

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
