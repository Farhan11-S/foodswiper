var items = [{
    name: "BAKSO KUAH KALDU",
    price: "20.000"
}, {
    name: "BAKSO KUAH TAICHAN",
    price: "22.000"
}, {
    name: "CEKER KUAH KALDU",
    price: "13.000"
}, {
    name: "CAKAR KUAH TAICHAN",
    price: "15.000"
}, {
    name: "IGA KUAH KALDU",
    price: "30.000"
}, {
    name: "IGA KUAH TAICHAN",
    price: "32.000"
}, {
    name: "TAHU KUAH KALDU",
    price: "12.000"
}, {
    name: "TAHU KUAH TAICHAN",
    price: "14.000"
}, {
    name: "TETELAN KUAH KALDU",
    price: "16.000"
}, {
    name: "TETELAN KUAH TAICHAN",
    price: "18.000"
}];
var carousellItems = [{
    name: "BAKSO KUAH TAICHAN",
    price: "22.000"
}, {
    name: "CAKAR KUAH TAICHAN",
    price: "15.000"
}, {
    name: "TETELAN KUAH TAICHAN",
    price: "18.000"
}];
var wrapperPotrait = document.getElementById("wrapper-potrait");
var wrapperLandscape = document.getElementById("wrapper-landscape");
var menuWrapperLandscape = document.getElementById("menu-landscape");
var menuWrapperPotrait = document.getElementById("menu-potrait");
items.forEach(showImage);
carousellItems.forEach(showCarousell);
function showCarousell(item, index, arr) {
    var contentPotrait = `<div class="swiper-slide">
                <img src="img/${item.name}.jpg" alt="" width="100%">
                <div class="content" id="content-potrait">
                        <h1>${item.name}</h1>
                        <p>RP. ${item.price}</p>
                </div>
            </div>`;
    var contentLandscape = `<div class="swiper-slide landscape">
                    <div data-swiper-parallax="500" data-swiper-parallax-opacity="0">
                    <img src="img/${item.name}.jpg" alt="${item.name}" style="width:100%;">
                    <div class="content" id="content-landscape">
                        <h1>${item.name}</h1>
                        <p>RP. ${item.price}</p>
                    </div>
                </div>
                </div>`;
    wrapperPotrait.innerHTML += contentPotrait;
    wrapperLandscape.innerHTML += contentLandscape;
}
function showImage(item, index, arr) {
    var menuLandscape = `<div class="card card-landscape p-2 mx-auto my-2" style="width: 18rem;">
                    <img class="card-img-top" src="img/${item.name}.jpg" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${item.name}</h5>
                        <p class="card-text">RP. ${item.price}</p>
                    </div>
                </div>`;
    var menuPotrait = `<div class="card card-landscape p-2 mt-3 mx-auto" style="width: 90vw;">
                    <img class="card-img-top" src="img/${item.name}.jpg" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${item.name}</h5>
                        <p class="card-text">RP. ${item.price}</p>
                    </div>
                </div>`;
    menuWrapperLandscape.innerHTML += menuLandscape;
    menuWrapperPotrait.innerHTML += menuPotrait;
}
console.log(wrapperLandscape);
var allMenuId = "all-menu-landscape"
function screenResize() {
    if (window.innerWidth < 768) {
        var navbar = document.getElementById("navbar");
        navbar.classList.remove("fixed-top");
        console.log(navbar.classList);
        var allMenuId = "all-menu-potrait"
    } else {
        var navbar = document.getElementById("navbar");
        navbar.classList.add("fixed-top");
    }
}
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        position: 'absolute'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        position: 'absolute'

    },

    autoplay: {
        delay: 5000,
    },
});
document.getElementById("menu-button").onclick = function () {
    window.location.href = `#${allMenuId}`;
};
window.onload = screenResize;
window.onresize = screenResize;