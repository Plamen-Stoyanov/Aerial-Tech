function classToggle() {
    var navs = document.querySelectorAll('.nav-links')

    navs.forEach(nav => nav.classList.toggle('toggle-reveal'));
}

document.querySelector('#navbar-toggle')
    .addEventListener('click', classToggle);