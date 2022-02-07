// window.location.href = "https://github.com/Hakimi0804";

function redirect(dest) {
    switch (dest) {
        case "telegram":
            window.location.href = "https://t.me/Hakimi0804";
            console.log('beaming to telegram');
            break;
        case "github":
            window.location.href = "https://github.com/Hakimi0804";
            console.log('beaming to github');
            break;
        case "twitter":
            w
            console.log('beaming to twitter');
            break;
        case "discord":
            window.location.href = "../html/discord.html";
            console.log('beaming to discord html page');
            break;
        case "back":
            window.location.href = "../index.html";
            console.log('bacc');
            break;
        default:
            console.log('something went wrong');
    }
}
