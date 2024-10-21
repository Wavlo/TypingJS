function typeText(parentElement, text, callback) {
    let index = 0;
    const p = document.createElement('p');
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
