document.addEventListener("DOMContentLoaded", () => {
    // Function to request fullscreen
    function goFullscreen() {
        const elem = document.documentElement; // Fullscreen the entire webpage
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // For Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // For Internet Explorer/Edge
            elem.msRequestFullscreen();
        }
    }

    // Trigger fullscreen mode after user clicks anywhere
    document.addEventListener("click", () => {
        goFullscreen();
    }, { once: true });

    alert("Click anywhere to enable fullscreen mode!");
});
