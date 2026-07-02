function openPanel(type) {
    const content = {
        about: `
        <h2>About Me</h2>

        <p>
        I am a B.Tech Electronics & Computer Engineering student with a strong interest in Web Development and Artificial Intelligence.
        </p>

        <p>
        I enjoy creating responsive websites, interactive JavaScript applications, and AI-based projects that solve real-world problems.
        </p>

        <p>
        Currently, I am working on Sign Language Recognition and EEG Analysis projects while continuously learning modern web technologies.
        </p>
        `,
        skills: `
        <h2>Skills</h2>

        <h3>Frontend</h3>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>

            <h3>Programming</h3>
            <p>C++</p>
            <p>Python</p>

            <h3>AI & Tools</h3>
            <p>OpenCV</p>
            <p>MediaPipe</p>
            <p>MATLAB</p>
            <p>Git & GitHub</p>
        `,
        contact: `
            <h2>Contact</h2>

            <p>📧 Email: kashishbadhwar79@gmail.com</p>

            <p>💻 GitHub: github.com/kashishb20</p>

            <p>📍 India</p>
            `,
    };

    document.getElementById("panel-content").innerHTML = content[type];
    document.getElementById("overlay").classList.add("active");
    document.getElementById("focusPanel").classList.add("active");
}

function closePanel() {
    document.getElementById("overlay").classList.remove("active");
    document.getElementById("focusPanel").classList.remove("active");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanel();
});

