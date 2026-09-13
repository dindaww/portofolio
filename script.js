document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.getElementById("typing-text");

    if (typingText) {

        const texts = [
            "I'm a Computer Science Student.",
            "i love ice cream.",
        ];

        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {

            const currentText = texts[textIndex];

            if (!deleting) {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentText.length) {
                    deleting = true;

                    setTimeout(type, 1500);
                    return;
                }

            } else {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    deleting = false;
                    textIndex = (textIndex + 1) % texts.length;

                    setTimeout(type, 500);
                    return;
                }
            }

            setTimeout(type, deleting ? 50 : 100);
        }

        type();
    }

});