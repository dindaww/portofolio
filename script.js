// ========================================
// Typing Effect - Home
// ========================================

const typingText = document.getElementById("typing-text");

if (typingText) {

    const texts = [
        "I'm a Computer Science student.",
        "I love learning new things.",
        "I'm interested in technology.",
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
            deleting ? 45 : 85
        );
    }

    typeEffect();
}


// ========================================
// Mobile Navbar
// ========================================

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

        const isOpen =
            !mobileMenu.classList.contains("hidden");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.textContent =
            isOpen ? "✕" : "☰";

    });


    // Close menu after clicking a link
    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.add("hidden");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        });

    });

}