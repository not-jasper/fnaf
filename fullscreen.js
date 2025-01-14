document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const elem = document.documentElement; // Select the entire document for fullscreen
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // For Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // For Internet Explorer/Edge
            elem.msRequestFullscreen();
        }
    }, 2000); // Wait 2 seconds before attempting fullscreen
});
