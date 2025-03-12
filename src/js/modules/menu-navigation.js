function menuNavigation() {
    const body = document.querySelector('body')
    const header = document.querySelector('.header')
    const root  = document.querySelector(':root')
    const menuBtnOpen = document.querySelector('.menu-btn--open')
    const menu = document.querySelector('.navigation')

    menuBtnOpen?.addEventListener('click', onOpenMenu)

    window.addEventListener('resize', onChangeVariabel)

    window.addEventListener('load', onChangeVariabel)

    function onChangeVariabel() {
        root.style.setProperty("--height-header", `${header.offsetHeight}px`);
    }

    function onOpenMenu() {
        body.classList.toggle('no-scroll')
        menuBtnOpen.classList.toggle('is-open')
        menu.classList.toggle('is-open')
    }
}

export default menuNavigation;