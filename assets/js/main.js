//switch banner sections
window.addEventListener('load', () => {
    const bannerSectionList = document.querySelectorAll('.banner-section');
    bannerSectionList.forEach(section => {
        section.addEventListener('click', function (e) {
            e.preventDefault();
            bannerSectionList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});