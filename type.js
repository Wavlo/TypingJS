function typeText(parentElement, text, callback) {
    let index = 0;
    const span = document.createElement('span.typing-js-span');
    parentElement.appendChild(p);

    function type() {
        if (index < text.length) {
            p.innerHTML += text[index];
            index++;
            setTimeout(type, 50);
        } else if (callback) {
            return callback();
        }
    }
    
    type();
}
