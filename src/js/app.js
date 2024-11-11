document.querySelector('.navigation__burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__top-navigation').classList.toggle('open');

    document.querySelector('.navigation__item-link').addEventListener('click', function () {
        document.querySelector('..navigation__item-link').classList.remove('active');
        document.querySelector('.header__top-navigation').classList.remove('open');
    })


})


console.log('Link form for CROSS-CHECK(CV#3. CV. Cross-Check): https://rolling-scopes-school.github.io/checklist/');