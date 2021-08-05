function addMenu() {
    console.log(1);
    new Menu('EVENT', "index.html");
    new Menu('SHOP', "shop.html");
    new Menu('ABOUT US', "about_us.html");
    new Menu('NEWS', "news.html");
    new Menu('CONTACT', "contact.html");

    // for, of 사용..

    for (var i = 0; i < 5; i++) {
        document.write('<li><a href="' + Menu[i] + '.html">' + Menu[i][j] + '</a></li>');
    }
}

let reset = function () {
    console.log(1);
    location.href = "index.html"
};
