document.addEventListener("DOMContentLoaded", function() {
    const headlineElement = document.querySelector('.headline-title');
    if (!headlineElement) return;

    // Get the page name from the URL
    const pageName = window.location.pathname.split("/").pop();

    // Define text variations and settings per page
    const pageConfig = {
        "index.html": {
            textLines: ["AI & Data Specialist", "Scalable System Bldr.", "Intelligence Xfrmr."],
            speed: 70,
            loop: true,
            fadeOut: true
        },
        "studio.html": {
            textLines: ["Photography Studio"],
            speed: 50,
            loop: false,
            fadeOut: true // Ensure text disappears after completion
        }
    };

    // Select the appropriate settings based on the page
    const config = pageConfig[pageName] || pageConfig["index.html"];
    const textLines = config.textLines;
    const speed = config.speed;
    const loop = config.loop;
    const fadeOut = config.fadeOut;

    // Create typewriter container
    headlineElement.innerHTML = '<div class="typewriter-container" id="typewriter-container"></div>';
    const container = document.getElementById('typewriter-container');

    async function typeWriter(text, speed) {
        container.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'typewriter-wrapper';
        wrapper.textContent = '.';
        container.appendChild(wrapper);

        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        container.appendChild(cursor);

        let displayedText = '';

        for (let i = 0; i < text.length; i++) {
            await new Promise(resolve => setTimeout(resolve, speed));
            displayedText += text[i];
            wrapper.textContent = displayedText;
        }

        cursor.style.display = 'none';

        // Pause before disappearing (if fadeOut is enabled)
        if (fadeOut) {
            await new Promise(resolve => setTimeout(resolve, 800));
            wrapper.classList.add('fade-out');
            await new Promise(resolve => setTimeout(resolve, 800));
            container.innerHTML = ''; // Remove the text
        }
    }

    async function runTypewriter() {
        for (let i = 0; i < textLines.length; i++) {
            await typeWriter(textLines[i], speed);
            if (!loop) break; // Stop after one run if looping is disabled
        }
        if (loop) runTypewriter(); // Restart if looping is enabled
    }

    runTypewriter();
});
