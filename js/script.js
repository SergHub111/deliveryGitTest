
let hamburger = document.querySelector('.gamburger');
let menu = document.querySelector('.navigation_menu');
let navMenuItem = document.querySelector('.navigation_menu_item');


const toggleMenu = () => {
    menu.classList.toggle('navigation_menu_active');
}

hamburger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
});


document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;
    let menu_is_active = menu.classList.contains('navigation_menu_active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
    }
})






let subMenu = document.querySelector('.sub_menu');
let btnLeng = document.querySelector('.btn_leng');

const toggleMenuLeng = () => {
    subMenu.classList.toggle('sub_menu_active');
}

btnLeng.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenuLeng();
});


document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == subMenu || subMenu.contains(target);
    let its_hamburger = target == btnLeng;
    let menu_is_active = subMenu.classList.contains('sub_menu_active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenuLeng();
    }
})
