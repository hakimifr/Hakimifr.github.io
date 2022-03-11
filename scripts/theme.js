// kanged from stackoverflow
// To save or update use :
// localStorage.setItem('theme','value');

// To get the Value:
// localStorage.getItem('theme');

// To clear:
// localStorage.clear()


// function darktheme() {
//     document.getElementById('bg').style.backgroundColor = '#212121';
//     document.getElementById('bg').style.color = '#c9c9c9';
//     document.getElementById('count-ttl').style.color = '#c9c9c9';
//     document.getElementById('count-txt').style.color = '#c9c9c9';
//     localStorage.setItem('theme', 'dark');
// }
function darktheme() {
    document.getElementById('bg').style.backgroundColor = 'black';
    document.getElementById('count-title').style.color = 'white';
    document.getElementById('count-txt').style.color = 'white';
    localStorage.setItem('theme', 'dark')
}

function lighttheme() {
    localStorage.clear();
    location.reload()
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



