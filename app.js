// Get the input element
function bGc() {
    const colorInput = document.getElementById('bgColor');
    colorInput.addEventListener('input', function() {
    const hexValue = colorInput.value;
    document.body.style.backgroundColor = hexValue;

    });
}
bGc();