document.addEventListener('DOMContentLoaded', () => {
    // Check if cookies exist and load their values
    loadPreferences();

    // Add event listeners to save preferences when user changes them
    document.getElementById('textHover').addEventListener('change', (e) => {
        document.cookie = `applyTextHover=${e.target.checked}; path=/; max-age=31536000`;
    });

    document.getElementById('buttonHover').addEventListener('change', (e) => {
        document.cookie = `applyButtonHover=${e.target.checked}; path=/; max-age=31536000`;
    });

    document.getElementById('imageHover').addEventListener('change', (e) => {
        document.cookie = `applyImageHover=${e.target.checked}; path=/; max-age=31536000`;
    });
});

// Load preferences from cookies
function loadPreferences() {
    const textHover = getCookie('applyTextHover');
    const buttonHover = getCookie('applyButtonHover');
    const imageHover = getCookie('applyImageHover');

    document.getElementById('textHover').checked = textHover !== undefined ? textHover === 'true' : true;
    document.getElementById('buttonHover').checked = buttonHover !== undefined ? buttonHover === 'true' : true;
    document.getElementById('imageHover').checked = imageHover !== undefined ? imageHover === 'true' : true;
}

// Helper function to get a specific cookie by name
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : undefined;
}
