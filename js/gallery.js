function gallary() {
    var photos = document.images;
    for (var i = 0; i < photos; i++) {
        photos[i].src = `${i}.jpg`; // Removed unnecessary semicolon
    }
    console.log(photos); // Moved inside of for loop and changed index to 10
}

function gal(loc) {
    document.getElementById("bigImage").style.backgroundImage = `url(${loc})`
}