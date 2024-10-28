// Obtener elementos del DOM
const languageSwitcher = document.querySelector('.language-switcher');
const languageOptions = document.querySelectorAll('.language-option');
const texts = document.querySelectorAll('[data-lang]');
const languageMenu = document.querySelector('.language-menu'); // Añadir esta línea

// Establecer idioma por defecto (español)
let currentLang = 'es';
showLang(currentLang);

// Agregar evento click al botón del menú de idiomas
languageSwitcher.querySelector('.btn-language').addEventListener('click', () => {
    languageMenu.classList.toggle('show'); // Alternar la clase 'show' para mostrar/ocultar el menú
});

// Agregar evento click a las opciones de idioma
languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        currentLang = option.getAttribute('data-lang'); // Obtener el idioma seleccionado
        showLang(currentLang); // Mostrar el idioma seleccionado
        languageMenu.classList.remove('show'); // Ocultar el menú después de seleccionar un idioma
    });
});

// Función para mostrar el idioma seleccionado
function showLang(lang) {
    texts.forEach(text => {
        if (text.getAttribute('data-lang') === lang) {
            text.style.display = 'block'; // Mostrar texto en el idioma seleccionado
        } else {
            text.style.display = 'none'; // Ocultar texto en el idioma no seleccionado
        }
    });
}
