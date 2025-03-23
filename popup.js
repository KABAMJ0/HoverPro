document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['applyTextHover', 'applyButtonHover', 'applyImageHover'], (data) => {
      document.getElementById('textHover').checked = data.applyTextHover !== undefined ? data.applyTextHover : true;
      document.getElementById('buttonHover').checked = data.applyButtonHover !== undefined ? data.applyButtonHover : true;
      document.getElementById('imageHover').checked = data.applyImageHover !== undefined ? data.applyImageHover : true;
    });
  
    document.getElementById('textHover').addEventListener('change', (e) => {
      chrome.storage.sync.set({ applyTextHover: e.target.checked });
    });
  
    document.getElementById('buttonHover').addEventListener('change', (e) => {
      chrome.storage.sync.set({ applyButtonHover: e.target.checked });
    });
  
    document.getElementById('imageHover').addEventListener('change', (e) => {
      chrome.storage.sync.set({ applyImageHover: e.target.checked });
    });
  });
  