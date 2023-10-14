//switch banner sections
window.addEventListener('load', () => {
    const bannerSectionList = document.querySelectorAll('.banner-section');
    const logo = document.querySelector('.logo');

    bannerSectionList.forEach(section => {
        section.addEventListener('click', function (e) {
            e.preventDefault();
            bannerSectionList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            if (this.classList.contains('one')) {
                logo.classList.add('white');
            } else {
                logo.classList.remove('white');
            }
        });
    });
});

//set active content
const bannerContentActive = name => {
    const bannerContentList = document.querySelectorAll('.item');
    bannerContentList.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(name)) {
            content.classList.add('active');
        }
    });
};

const bannerContentHide = () => {
    const bannerContentList = document.querySelectorAll('.item');
    bannerContentList.forEach(content => {
        content.classList.remove('active');
    });
};

window.addEventListener('load', () => {
    const bannerBtnList = document.querySelectorAll('.banner-btn');
    const banner = document.querySelector('.banner');
    const closeBtn = document.querySelector('.close-btn');
    const sci = document.querySelector('.sci');

    bannerBtnList.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            banner.classList.add('active');
            sci.classList.add('active');
            bannerContentActive(this.getAttribute('data-target'));
        });
    });

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        banner.classList.remove('active');
        sci.classList.remove('active');
        bannerContentHide();
    });
});


