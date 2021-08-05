export default function loadTheme(checkTheme, bodyTag, Theme){
    if (localStorage.getItem('CheckDark') === "true"){
            checkTheme.checked = true;
            bodyTag.classList.remove(Theme.LIGHT);
            bodyTag.classList.add(Theme.DARK);
        } 
        else {
            bodyTag.classList.remove(Theme.DARK);
            bodyTag.classList.add(Theme.LIGHT);
            checkTheme.checked = false;
        }
}
