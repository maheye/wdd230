function checkCharacterCount(textarea) {
    let charCount = textarea.value.length;

    document.getElementById('charCount').innerText = charCount + "/150 characters";

    if (charCount > 150) {
        
        textarea.value = textarea.value.substring(0, 150);
    }
}