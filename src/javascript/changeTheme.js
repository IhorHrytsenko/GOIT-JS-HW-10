export default function changeTheme(checkTheme, bodyTag, Theme){ 
    if (checkTheme.checked === true){
        bodyTag.classList.remove(Theme.LIGHT);
        bodyTag.classList.add(Theme.DARK);
        localStorage.setItem('CheckDark', true);
        checkTheme.setAttribute("checked" , true);
    } 
    else {
        bodyTag.classList.remove(Theme.DARK);
        bodyTag.classList.add(Theme.LIGHT);
        localStorage.setItem('CheckDark', false);
        checkTheme.setAttribute("checked" , false);
    }
}