document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.feature__link');
    const accordionText = document.querySelectorAll('.feature-sub');

    for (let i = 0; i < accordionButtons.length; i++) {
        accordionButtons[i].addEventListener('click', () => {
            accordionText[i].classList.toggle('hidden')
            accordionButtons[i].classList.toggle('feature__link_active')
        })
    }
});