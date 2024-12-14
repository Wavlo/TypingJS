function typeText(parentElement, texts, callback) {
        let currentTextIndex = 0;

        function type() {
            if (currentTextIndex >= texts.length) {
            if (callback) {
                return callback();
            }
            return;
        }

        let text = texts[currentTextIndex];
        let index = 0;

        function clearAndType() {
            if (parentElement.innerHTML.length > 0) {
                parentElement.innerHTML = parentElement.innerHTML.slice(0, -1);
                setTimeout(clearAndType, 20);
            } else {
                typeCharacter();
            }
        }

        function typeCharacter() {
            if (index < text.length) {
                parentElement.innerHTML += text[index];
                index++;
                setTimeout(typeCharacter, 100);
            } else {
                currentTextIndex++;
                setTimeout(type, 500);
            }
        }

        clearAndType();
    }

    type();
}
