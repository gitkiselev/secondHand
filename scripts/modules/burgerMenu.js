const burgerMenu = ({classActive, selectorBtn, selectorMenu, selectorClose}) => {
    const btn = document.querySelector(selectorBtn)
    const menu = document.querySelector(selectorMenu)
    const active = document.querySelector(classActive)

    btn.addEventListener('click', () => {
        menu.classList.toggle(classActive)
    })

    menu.addEventListener('click', e => {
        if (e.target.closest(selectorClose)) {
            menu.classList.remove(classActive);
        }
    })
}
export default burgerMenu;