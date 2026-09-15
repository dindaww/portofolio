// Typing Effect
const typingText = document.getElementById("typing-text");

if (typingText) {

    const texts = [
        "I'm a Computer Science student.",
        "I love learning new things.",
        "I'm always ready to explore."
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentText = texts[textIndex];

        if (!deleting) {

            typingText.textContent =
                currentText.slice(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentText.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingText.textContent =
                currentText.slice(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                textIndex =
                    (textIndex + 1) % texts.length;
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 50 : 90
        );
    }

    typeEffect();
}


// Mobile Navbar
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });

}