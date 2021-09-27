// kanged from stackoverflow
// To save or update use :
// localStorage.setItem('theme','value');

// To get the Value:
// localStorage.getItem('theme');

// To clear:
// localStorage.clear()

function darktheme() {
    document.getElementById('bg').style.backgroundColor = 'gray';
    localStorage.setItem('theme', 'dark')
}

function lighttheme() {
    document.getElementById('bg').style.backgroundColor = '#ff92bc88'
    localStorage.setItem('theme', 'light')
}

var theme = localStorage.getItem('theme');
console.log(theme);
var change = document.getElementById('bg');
function changetheme(color) {
    if (color == "dark") {
        darktheme();
    } else if (color == "light") {
        lighttheme();
    } else {}
}

if (theme == "dark") {
    darktheme();
} else if (theme == "light") {
    lighttheme();
} else {}



