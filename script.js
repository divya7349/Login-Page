document.querySelectorAll('.input-container')
.forEach((element, index) => {
    element.addEventListener('focusin', () => {
        element.classList.add('active');
    });
    element.addEventListener('focusout', () => {
        if(element.querySelector('.input').value === ""){
            element.classList.remove('active');
        }
    })
});