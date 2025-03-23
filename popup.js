document.addEventListener('DOMContentLoaded', () => {
    // Load preferences from localStorage or set defaults
    const textHover = localStorage.getItem('applyTextHover') === 'true';
    const buttonHover = localStorage.getItem('applyButtonHover') === 'true';
    const imageHover = localStorage.getItem('applyImageHover') === 'true';

    document.getElementById('textHover').checked = textHover !== null ? textHover : true;
    document.getElementById('buttonHover').checked = buttonHover !== null ? buttonHover : true;
    document.getElementById('imageHover').checked = imageHover !== null ? imageHover : true;

    // Save settings to localStorage when the user clicks "Save Settings"
    document.getElementById('saveSettings').addEventListener('click', () => {
        const textHover = document.getElementById('textHover').checked;
        const buttonHover = document.getElementById('buttonHover').checked;
        const imageHover = document.getElementById('imageHover').checked;

        localStorage.setItem('applyTextHover', textHover);
        localStorage.setItem('applyButtonHover', buttonHover);
        localStorage.setItem('applyImageHover', imageHover);

        alert('Settings saved!');
    });
});
