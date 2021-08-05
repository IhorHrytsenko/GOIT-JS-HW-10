// import './sass/main.scss';
import jsonText from './menu.json';
import templateHTML from '/templates/cardTemplate.hbs';
import loadTheme from './javascript/loadTheme';
import changeTheme from './javascript/changeTheme';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const menuItem = jsonText;

const checkTheme = document.querySelector(".theme-switch__toggle");  
const bodyTag = document.querySelector('body');
  
const mainList = document.querySelector(".js-menu");

const resultTemplate = createHTML(menuItem);

function createHTML(temps) {
    return templateHTML(temps);
    }

mainList.insertAdjacentHTML("afterbegin", resultTemplate);

checkTheme.addEventListener('click', () => changeTheme(checkTheme, bodyTag, Theme));

loadTheme(checkTheme, bodyTag, Theme);

