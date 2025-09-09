document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const menu = document.getElementById('menu');

    // Alterna a visibilidade do menu ao clicar no botão
    menuHamburguer.addEventListener('click', function () {
        menu.classList.toggle('ativo');
    });

    // Fecha o menu ao clicar em um dos links
    const menuLinks = menu.getElementsByTagName('a');
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function () {
            menu.classList.remove('ativo');
        });
    }
});